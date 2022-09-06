var counterFlag = true;
$(document).ready(function(){
    
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","auto");
    });


    $("nav a").click(function(e){
        let aHref=$(e.target).attr("href");
        $("body,html").animate({scrollTop:$(aHref).offset().top},2000)
    });
    
    $(window).scroll(function(){
    
        if($(window).scrollTop() > $("#about").offset().top)
        {
            $("nav").css("backgroundColor","#333");
            $("#btnUp").fadeIn(500);
        }
        else{
            $("nav").css("backgroundColor","rgba(0,0,0,0.5)");
            $("#btnUp").fadeOut(500);
        }

        if( counterFlag && $(window).scrollTop() > $("#portfolio").offset().top )
        {
            let counters = $(".counter");
            for (let i = 0; i < counters.length; i++) {
                counters.eq(i).countMe(40,65); 
            }
            counterFlag = false;
            console.log("A");
        }
       
        
    
    
    });
    $("#btnUp").click(function(){
        //$(window).scrollTop(0);
        $("body,html").animate({scrollTop:0},1000);
    });
    
    $("#toggleIcon").click(function(){
        // $(".colorBox").toggle(500);
        if($(".sideBar").css("left") == "0px"){
            let colorBoxWidth = $(".colorBox").innerWidth();
            $(".sideBar").animate({left:`-${colorBoxWidth}`},500);
        }
        else{
            $(".sideBar").animate({left:"0"},500);
        }
    });
    

    
    

    var typed = new Typed('.element', {
        strings: ["signer", "veloper"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        smartBackspace: true,
        
      });   

      var mixer = mixitup('.mixitup');
    //   var mixer = mixitup( {
    //     selectors: {
    //         target: '.blog-item'
    //     },
    //     animation: {
    //         duration: 300
    //     }
    // });

    


});
