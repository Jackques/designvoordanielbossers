function getsizes(){
var liquidheight = $(window).height();
var liquidwith = $(".blog_content").width();
//alert(liquidheight);
//alert(liquidwith);

$('.customproject_viewer').children().children().children().children("img").width(liquidwith);
$('.customproject_viewer').children().children().children().children("img").height(liquidheight);
}

$(window).resize(function(){
getsizes();
});