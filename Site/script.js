//Run some jQuery

$(document).ready(function(){



  
  
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=Oradea,ro&units=metric&APPID=6a427d2b5b1334cca0f52d7957172ce3",
      method: "GET",
      success: function(data) {
        console.log(data);


        var icon = data.weather[0].id;
        console.log(icon);

        
        var markup = "<div>  <span>"+ data.main.temp+ "</span></div>";


        $('#temperature').html(markup);
       

      }
    
  });
      });