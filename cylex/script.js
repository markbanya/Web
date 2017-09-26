

$(document).ready(function() {


AnimateRotateL(-90);
AnimateRotateR(90);





    $('#moveleft').click(function() {
        $('#rectangle').animate({
        'marginLeft' : "-=30px" //moves left
        });
    });
     
    $('#moveright').click(function() {
        $('#rectangle').animate({
        'marginLeft' : "+=30px" //moves right
        });
    });
    $('#movedown').click(function() {
        $('#rectangle').animate({
        'marginTop' : "+=30px" //moves down
        });
    });
    $('#moveup').click(function() {
        $('#rectangle').animate({
        'marginTop' : "-=30px" //moves up
        });
    });



/////////////////////////////////////////////////KEYS/////////////////////////////////////////////////////////


   $('html').keydown(function (e) {
if (e.keyCode == 38) {
 $('#rectangle').animate({
        'marginTop' : "-=30px" //up

        });

  $('#butU').addClass('active');
  

}

    $('html').keyup(function (e) {
if (e.keyCode == 38) {
 

  $('#butU').removeClass('active');

}
});

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


      $('html').keydown(function (e) {
if (e.keyCode == 40) {
 $('#rectangle').animate({  
        'marginTop' : "+=30px" //moves down arrow
        });
 $('#butD').addClass('active');
  

}
    $('html').keyup(function (e) {
if (e.keyCode == 40) {
 

  $('#butD').removeClass('active');

}
});

});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





         $('html').keydown(function (e) {
if (e.keyCode == 37) {
 $('#rectangle').animate({
        'marginLeft' : "-=30px" //moves left
        });
 $('#butL').addClass('active');
  

}

    $('html').keyup(function (e) {
if (e.keyCode == 37) {
 

  $('#butL').removeClass('active');

}
});

});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



            $('html').keydown(function (e) {
if (e.keyCode == 39) {
 $('#rectangle').animate({
        'marginLeft' : "+=30px" //moves right
        });
 $('#butR').addClass('active');
  

}

    $('html').keyup(function (e) {
if (e.keyCode == 39) {
 

  $('#butR').removeClass('active');

}
});

});



   

});

function AnimateRotateL(d){
    var elem = $("#rectangle");


$('#lleft').click(function(){

    $({deg: 0}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
           });
    });
}


function AnimateRotateR(d){
    var elem = $("#rectangle");


$('#rright').click(function(){

    $({deg: 0}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
           });
    });
}