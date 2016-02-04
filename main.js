//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    
    console.log('ready')

//hide all <h4>s
    
    /*
    $(function() {
    console.log("ready");
    
    $('section h1.headphonesTitle').hide();
        
        $('section img#img1').click(function(){
  
        $('section h1.headphonesTitle').slideToggle();                       
            $('section h1.headphonesTitle').fadeToggle();
        return: true;
        
        });
    });
    */        
            
    $('#img1').mouseover(function() {
        $(this).fadeTo('linear',1);
        
        
        //$(this).attr('src', 'Headphones.PNG').animate(
            //{
            
                //opacity:1
            
            //});
        
    });

    $('#img1').mouseout(function() {
   
        $(this).fadeTo('linear',.25);
        
        //$(this).attr('src', 'Headphones.PNG').animate(
            //{
            
                //opacity:0
            
            //});
        
    });
    
    
    $('#img2').mouseover(function() {
    $(this).fadeTo('linear',1);
   
    });

  $('#img2').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
    
    
    $('#img3').mouseover(function() {
    $(this).fadeTo('linear',1);
   
  });

  $('#img3').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
    $('#img4').mouseover(function() {
    $(this).fadeTo('linear',1);
   
  });

  $('#img4').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
    $('#img5').mouseover(function() {
    $(this).fadeTo('linear',1);
   
  });

  $('#img5').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
  
});