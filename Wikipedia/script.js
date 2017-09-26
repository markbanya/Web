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
				$('#humidity').html(data.main.humidity);
				$('#wind').html(data.wind.speed);


			}
		
	});







  $("#driv").click(function(){
  
    var url = "http://ergast.com/api/f1/current/driverStandings.json?callback=myParser";
   
      $.ajax({
        type: "GET",
        url: url,
        
        success: function (data) {
        	
        	console.log(data);
           

		}
		
	
	});
      });




  $("#const").click(function(){
  
    var url = "http://ergast.com/api/f1/current/constructorStandings.json?callback=myParser";
   
      $.ajax({
        type: "GET",
        url: url,
        
        success: function (data) {
        	
        	console.log(data);
    

		}
		
	
	});
      });

















  //On click run code
  $("#search").click(function(){
    //Get value of input field
 var searchTerm = $('#searchTerm').val();
//Run ajax and get return in data type JSON
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
   
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function (data) {
        	//console.log(data[1][0]);
        	//console.log(data[2][0]);
        	//console.log(data[3][0]);
        	//console.log(url);
          $('#output').html('');
          for(var i=0;i<data[1].length;i++){
            $('#output').prepend("<div><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div>" ); 
   }

    $("#searchTerm").val('');
        },
        error: function (errorMessage) {
         console.log(errorMessage);
        }
    });
 });


  $("#searchTerm").keypress(function(e){
      if(e.which==13){
        $("#search").click();
      }
    });

  });    

 
