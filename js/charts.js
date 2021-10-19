

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(mydata) {
    var data = google.visualization.arrayToDataTable(mydata);
    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('myGraphic'));
    chart.draw(data, options);
}
