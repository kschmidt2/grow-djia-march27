// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }\

// adds social-square class to get square social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social-square";
// }

Highcharts.setOptions({
    lang: {
      thousandsSep: ',',
      numericSymbols: [null, "M", "G", "T", "P", "E"]
    }
});

let chartIdDJIAMarch27 = document.getElementById("chart-container-djia-march27");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdDJIAMarch27.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-djia-march27");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdDJIAMarch27, {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Holfy3hzKBJoQIVaNdN18txwAdXNm25nJQeIKkzqW1M'
        },
        // for bar charts only
        // plotOptions: {
        //     series: {
        //         groupPadding: 0.1
        //     } 
        // },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            dateTimeLabelFormats: {
                week: '%b. %e',
            },
            tickLength: 5,
            plotLines: [{
                color: '#FF0000', // Red
                width: 2,
                value: 1581465600000,
                label: {
                    text: 'Start of<br>bear market',
                    align: 'left',
                    x: 5,
                    y: 15,
                    rotation: 0
                }
            }]
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            min: 18000
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function() {
                console.log(this)
            }
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}