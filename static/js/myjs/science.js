$(function(){
    // 科普详情打开
    $('.breed-btn').click(function(){
        $('.science-details, .breed-box').show();
        $('.knowledge-box, .illness-box').hide();
        $('body,html').css('overflow-y', 'hidden');
    });
    $('.illness-btn').click(function(){
        $('.science-details, .illness-box').show();
        $('.breed-box, .knowledge-box').hide();
        $('.mask-box').show();
        $('body,html').css('overflow', 'hidden');
    });
    $('.knowledge-btn').click(function(){
        $('.science-details, .knowledge-box').show();
        $('.breed-box, .illness-box').hide();
        $('.mask-box').show();
        $('body,html').css('overflow', 'hidden');
    });
  $('.mask-box, .details-open').click(function(){
      $('.science-details').hide();
      $('.element').hide();
      $('.excerpt').show();
      $('body,html').css('overflow-y', 'auto');
  });

    // 全文展开收起
    $('.check-in').click(function(){
        $(this).parent().hide();
        $(this).parent().next().show();
    });
    $('.check-out').click(function(){
        $(this).parent().parent().hide();
        $(this).parent().parent().prev().show();
        var n = $(this).parent().parent().parent().prev().prev().children().children().html();
        // //  console.log(n);
        // //  console.log((n-1)*150);
        $('.science-details').scrollTop((n-1)*150);
    });

});