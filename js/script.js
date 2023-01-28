$(window).scroll(function(){
    
    if ($(this).scrollTop() > 190) {
            $('#seguir').css({"display": "flex"});
            $('#btn_top').css({"display": "none"});
        } else {
            $('#seguir').css({"display": "none"});
            $('#btn_top').css({"display": "flex"});
        }
});