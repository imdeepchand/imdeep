$("#on").on('click',function(){
    if($("#sidemenu").hasClass("d-none")) {
        $("#sidemenu").toggleClass("d-none");
        $("#sidemenu").toggleClass("active");
    } else {
        $("#sidemenu").toggleClass("d-none");
        $("#sidemenu").toggleClass("active");
    }
      });  
//up arrow button

$(window).on('scroll',() => {
    var scrollToTop = $('.up-btn');
    scroll = $(window).scrollTop();
    if(scroll >= 200){
        scrollToTop.show();
    } else {
        scrollToTop.hide();
    }
})

$(".up-btn").on('click',() => {
    $(window).scrollTop({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})