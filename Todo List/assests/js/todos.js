//alert("Connected");
//Check off specifion todos onclick
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
});
///////////////////////////////////////////////////////////////////////////////
//Remove todo on X click
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })

    event.stopPropagation();
});
///////////////////////////////////////////////////////////////////////////////
//Add new todo
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var toDo_variable = $(this).val();
        // console.log(toDo_variable);
        $(this).val("");
        var newToDo = "<li><span><i class='fa fa-trash'></i></span> ";
        newToDo += toDo_variable;
        newToDo += "</li>";
        //console.log(newToDo);
        $("ul").append(newToDo);
    }
});
//////////////////////////////////////////////////////////////////////////////////
//Hide input bar
$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
})