$(".burgers").click(function(){
    // alert($(".footer").css("left"));
    if($(".footer").css("paddingLeft")=="0px"){
        $(".footer").animate(
            {
            // width:"1090px",
            // left:"16.2rem",
            paddingLeft:"280px",
            },1400);
            // alert($(".footer").css("marginLeft"));
    }
    
    else{
        // alert($(".footer").css("marginLeft"));
        $(".footer").animate(
            {
            paddingLeft:"0px"
            },1400);
    }

})


