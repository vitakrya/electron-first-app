// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var d3 = require('d3');

var svg = d3.select('#chart')
  .append('svg')
  .attr('width', 700)
  .attr('height', 500)
  .attr('class', 'myChart');

svg.selectAll('circle')
    .data(['#e39019', '#091db8'])
  .enter()
    .append('circle')
    .attr('r', 10)
    .attr('fill', (d) => d)
    .attr('cx', (d, i) => (i + 1) * 40)
    .attr('cy', 84);
