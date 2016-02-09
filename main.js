//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    
    console.log('ready')
    
    $('#pic1, #pic2, #pic3, #pic4, #pic5').hide();

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
        
    });

    $('#img1').mouseout(function() {
        $(this).fadeTo('linear',.25);
        
    });
    
    $('#img1').mouseover(function(){
        console.log('ready')
        
        $('#img6').animate(
       {
           opacity: 1
       }
       ) 
        
    });
    
    $('#img1').mouseout(function(){
        console.log('ready')
        
        $('#img6').animate(
       {
           opacity: 0
       }
       ) 
        
    });
    
    
    $('#img2').mouseover(function() {
    $(this).fadeTo('linear',1);
   
    });

  $('#img2').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
    
    $('#img2').mouseover(function(){
        console.log('ready')
        
        $('#img7').animate(
       {
           opacity: 1
       }
       ) 
        
    });
    
    $('#img2').mouseout(function(){
        console.log('ready')
        
        $('#img7').animate(
       {
           opacity: 0
       }
       ) 
        
    });
    
    
    $('#img3').mouseover(function() {
    $(this).fadeTo('linear',1);
   
  });

  $('#img3').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
    
    $('#img3').mouseover(function(){
        console.log('ready')
        
        $('#img8').animate(
       {
           opacity: 1
       }
       ) 
        
    });
    
    $('#img3').mouseout(function(){
        console.log('ready')
        
        $('#img8').animate(
       {
           opacity: 0
       }
       ) 
        
    });
    
    
    
    $('#img4').mouseover(function() {
    $(this).fadeTo('linear',1);
   
  });

  $('#img4').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
    
    $('#img4').mouseover(function(){
        console.log('ready')
        
        $('#img9').animate(
       {
           opacity: 1
       }
       ) 
        
    });
    
    $('#img4').mouseout(function(){
        console.log('ready')
        
        $('#img9').animate(
       {
           opacity: 0
       }
       ) 
        
    });
    
    $('#img5').mouseover(function() {
    $(this).fadeTo('linear',1);
   
  });

  $('#img5').mouseout(function() {
   
    $(this).fadeTo('linear',.25);
  });
  
    $('#img5').mouseover(function(){
        console.log('ready')
        
        $('#img10').animate(
       {
           opacity: 1
       }
       ) 
        
    });
    
    $('#img5').mouseout(function(){
        console.log('ready')
        
        $('#img10').animate(
       {
           opacity: 0
       }
       ) 
        
    });
    
    
    
    $('#img1').click(function(){
       $('#pic1').show()
       //$('#pic2, pic3, pic4, pic5').hide()
        
    });
    
    $('#img2').click(function(){
       $('#pic2').show()
       //$('#pic1, pic3, pic4, pic5').hide()
        
    });
    
    $('#img3').click(function(){
       $('#pic3').show()
       //$('#pic1, pic2, pic4, pic5').hide()
        
    });
    
    $('#img4').click(function(){
       $('#pic4').show()
       //$('#pic1, pic2, pic3, pic5').hide()
        
    });
    
    $('#img5').click(function(){
       $('#pic5').show()
       //$('#pic1, pic2, pic3, pic4').hide()
        
    });
    
});