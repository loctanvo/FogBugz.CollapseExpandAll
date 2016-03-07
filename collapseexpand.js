var collapse = $('<span><a class="navlink">Collapse/Expand</a></span>');
collapse.click(function(){
    var arrows = $('.arrow');
    
    arrows.each(function(){
        $(this).mouseover();
        $(this).mousedown();
    });
});

$('#belowBanner').first().prepend(collapse);