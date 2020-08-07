$("ul").on("click","li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click","span", function(event) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newTodo = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newTodo + "</li>");
        $(this).val("");
    }
})

$("button").click(function(){
    $("input").toggleClass("dis");
})