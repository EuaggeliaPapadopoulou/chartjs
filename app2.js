$(document).ready(function(){
  $.ajax({
    url: "http://localhost/chartjs/data2.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      
      
      var minute= [];
      var ekthema_id = [];

      for(var i in data) {
        
        minute.push( data[i].minute);
        ekthema_id.push(data[i].ekthema_id);
      }

      var chartdata = {
           
			labels: ekthema_id, 
			datasets:[{
            label: 'epanepiskepseis',
            backgroundColor: 'rgba(150, 10, 50, 1 )',
            borderColor: 'rgba(200, 200, 200, 1)',
            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
            hoverBorderColor: 'rgba(200, 200, 200, 1)',
            data: minute
           
     }
        ]
      };
var ctx = $("#mycanvas");
      const chart = new Chart (ctx,{
    type: 'bar',
    data: chartdata,
    options: {
        scales: {
            yAxes: [{
       ticks: {
                beginAtZero: true}
               } ]
                
        }
    }
});
}, 
    error: function(data) {
      console.log(data);
    }
  });
});
