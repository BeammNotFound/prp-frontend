// var n=0;

// $('.slicknav_arrow').on('click', function(){
//     n++;
//     console.log(1111)
//     if(n % 2 !== 0){
//         $('.slicknav_hidden').slideDown(200);
//         $('.slicknav_arrow').html('-');
//     }
//     else{
//         $('.slicknav_hidden').slideUp(200);
//         $('.slicknav_arrow').html('+');
//     }
// })

var m=0;
$('.slicknav_btn').on('click', function(){
    m++;
    if(m % 2 !== 0){
        $('.slicknav_nav').slideDown(200);
    }
    else{
        $('.slicknav_nav').slideUp(200);
    }
})