$(document).ready(function(){
  $.ajax({
    url: "http://localhost/chartjs/data3.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      
      
      var sumvisits= [];
      var ekthema_id = [];

      for(var i in data) {
        
        sumvisits.push( data[i].sumvisits);
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
            data: sumvisits
           
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
