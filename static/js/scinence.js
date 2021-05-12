$(function(){
    $('.btn').click(function(){
          $('.breed-box').fadeIn(300);
        $('.knowledge-box, .illness-box').hide();
          $('.mask-box').show();
          $('body,html').css('overflow', 'hidden');
    });
    $('.illness-btn').click(function(){
        $('.science-box, .illness-box').fadeIn(300);
        $('.breed-box, .knowledge-box').hide();
        $('.mask-box').show();
        $('body,html').css('overflow', 'hidden');
    });
    $('.knowledge-btn').click(function(){
        $('.science-box, .knowledge-box').fadeIn(300);
        $('.breed-box, .illness-box').hide();
        $('.mask-box').show();
        $('body,html').css('overflow', 'hidden');
    });

    $('.mask-box').click(function(){
          $('.science-box').fadeOut(300);
          $('.science-box').scrollTop(0);
          $('.excerpt').show();
          $('.element').hide();
          $('.science-main-box').height(150);
          $('body,html').css('overflow', 'auto');
    });

    $('.check-in').click(function(){
      //     //  console.log($(this).parent());
          $(this).parent().hide();
          $(this).parent().next().show();
          $(this).parent().parent().parent().parent().height($(this).parent().next().height() + $(this).parent().prev().height() + 20);
          // //  console.log($(this).parent().next().height());
          // //  console.log($(this).parent().prev().height());
          // //  console.log($(this).parent().parent().parent().parent().height());
        //   //  console.log($(this).parent().parent().prev().children().html())
    });

    $('.science-box').scroll(function(){
          $('.check-out').click(function(){
                // var n = $(".check-out").index(this);
                var n = $(this).parent().parent().parent().prev().children().html();
                $(this).parent().parent().hide();
                $(this).parent().parent().prev().show();
                $(this).parent().parent().parent().parent().parent().height(150);
                // $('.science-box').scrollTop(0);
                $('.science-box').scrollTop((n-1)*150);
            //     //  console.log((n-1)*150);
          });
    });    
});
