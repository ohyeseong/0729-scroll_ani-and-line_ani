$(document).ready(function(){
    $(".main>li, .img_area").hover(function(){
        $(".sub, .img_area").stop().show();
    }, function(){
        $(".sub, .img_area").stop().fadeOut();
    })// .main>li.hover

    $(".main>li").hover(function(){
        var n = $(this).index();
        // console.log("순서:", n);

        $(".img_area .icons li").hide();
        $(".img_area .icons li").eq(n).show();
    }, function(){

    })
})// fin