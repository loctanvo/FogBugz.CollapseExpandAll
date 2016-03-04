var collapse = $('<span><a class="navlink">Collapse/Expand</a></span>');
collapse.click(function(){
    var arrows = $('.arrow');
    console.log(arrows);
    
    arrows.each(function(){
        this.click();
        //$(this).children().first().mousedown();
        // $(this).attr("exp", "0");
        // $(this).children().first().attr("class","flat-right-arrow-black");
        //$(this).children().first().trigger("click");
        console.log(this);
    });
});

$('#belowBanner').first().prepend(collapse);