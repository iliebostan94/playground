/*$("li").click(function(){
alert("something");
});
*/

$("li").click(function(){
$(this).toggleClass("completed");
});

$("span").click(function(){
    $(this).parent().fadeOut(function(){
    $(this).remove();
    });
});

$("input[type='text']").keypress(function(event){
    if(event.which == 13){
    var $insertBox = $(this).val();
    $("<li>"+"<span>"+"X "+"</span>"+$insertBox+"</li>").appendTo("ul");
        //alert("something");
}});

