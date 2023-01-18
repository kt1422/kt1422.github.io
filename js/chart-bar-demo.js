// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var chart1 = document.getElementById("myBarChart");
var chart2 = document.getElementById("myBarChart2");
var chart3 = document.getElementById("myBarChart3");
var chart4 = document.getElementById("myBarChart4");
var chart5 = document.getElementById("myBarChart5");
passValue(chart1);
passValue(chart2);
passValue2(chart3);
passValue3(chart4);
passValue4(chart5);
function passValue(ctx){
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["August", "September", "October", "November", "December", "January"],
      datasets: [{
        label: "Students",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [148, 210, 308, 242, 188, 335],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 500,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
}

function passValue2(ctx){
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Biogesic", "Neozep", "Diatab", "Allerta", "Bandage", "Solmux"],
      datasets: [{
        label: "Students",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [312, 210, 160, 102, 60, 48],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 500,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
}

function passValue3(ctx){
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Biogesic", "Neozep", "Diatab", "Allerta", "Bandage", "Solmux"],
      datasets: [{
        label: "Students",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [28, 49, 60, 82, 90, 128],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 200,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
}

function passValue4(ctx){
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Aug - Dengue", "Sept - Dengue", "Oct - Flu", "Nov - Colds", "Dec - Dengue", "Jan - Flu"],
      datasets: [{
        label: "Students",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [9, 8, 19, 4, 10, 3],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 20,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
}