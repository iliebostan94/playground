/*$("li").click(function(){
alert("something");
});
*/

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(function(){
    $(this).remove();
    });
});

$("input[type='text']").keypress(function(event){
    if(event.which == 13){
    var $insertBox = $(this).val();
    $(this).val("");
    $("<li>"+"<span>"+"<i class='far fa-trash-alt'></i>"+"</span>"+" "+ $insertBox+"</li>").appendTo("ul");
        //alert("something");
}});

