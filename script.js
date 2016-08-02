$(document).ready(function(){
    

$("body").keydown(function(event){
    
    if (event.keyCode===37){
       $('#tom').attr("src","tom/tomLeft.jpg");
    }else if(event.keyCode===38){
        $('#tom').attr("src","tom/tomUp.jpg");
    }else if(event.keyCode===39){
        $('#tom').attr("src","tom/tomRight.jpg");
    }else if(event.keyCode===40){
        $('#tom').attr("src","tom/tomDown.jpg");
    }
    
});
$('body').keyup(function(event){
    if (event.keyCode===37){
       $('#tom').attr("src","tom/tomStand.jpg");
    }else if(event.keyCode===38){
        $('#tom').attr("src","tom/tomStand.jpg");
    }else if(event.keyCode===39){
        $('#tom').attr("src","tom/tomStand.jpg");
    }else if(event.keyCode===40){
        $('#tom').attr("src","tom/tomStand.jpg");
    }
});
    
    
});