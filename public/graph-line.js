var options = {
  series: [2,1],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['F', 'M'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();