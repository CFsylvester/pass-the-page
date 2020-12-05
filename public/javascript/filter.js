
$('#all-stories').click(function() {
    console.log("all stories"); 
    $("#all").show(); 
    $('#open').hide();
    $('#closed').hide();
});

$('#open-stories').click(function() {
    console.log("open stories");
    $("#open").show(); 
    $('#all').hide();
    $('#closed').hide();  
});

$('#closed-stories').click(function() {
    console.log("closed stories"); 
    $("#closed").show(); 
    $('#open').hide();
    $('#all').hide();
});

$(".dropdown-menu li").click(function(){
    console.log("clicked");
    $(this).parents(".dropdown").find('#story-filter').html($(this).text());
    $(this).parents(".dropdown").find('#story-filter').val($(this).data('value'));
    return; 
});