const template = Handlebars.getTemplate("stories-template");

$('#all-stories').click(function() {
    console.log("all sotries"); 
});
$('#open-stories').click(function() {
    console.log("open stories");
});
$('#closed-stories').click(function() {
    console.log("closed stories"); 
    console.log(template);
});

$(".dropdown-menu li").click(function(){
    console.log("clicked");
    $(this).parents(".dropdown").find('#story-filter').html($(this).text());
    $(this).parents(".dropdown").find('#story-filter').val($(this).data('value'));
    return; 
});