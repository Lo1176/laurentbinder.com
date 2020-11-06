const initOpacity = () => {
  $(document).ready(function(){
    $(window).scroll(function(){
      $('.banner').css("opacity", 1 - $(window).scrollTop()/400)
    })
  })
};

export default initOpacity;
