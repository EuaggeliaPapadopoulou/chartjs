$(document).ready(function(){
  $.ajax({
    url: "http://localhost/chartjs/data.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      
      
      var elxi= [];
      var ekthema_id = [];

      for(var i in data) {
        
        elxi.push( data[i].elxi);
        ekthema_id.push(data[i].ekthema_id);
      }

      var chartdata = {
           
			labels: ekthema_id, 
			datasets:[{
            label: 'elxi',
            backgroundColor: 'rgba(150, 10, 50, 1 )',
            borderColor: 'rgba(200, 200, 200, 1)',
            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
            hoverBorderColor: 'rgba(200, 200, 200, 1)',
            data: elxi
           
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
