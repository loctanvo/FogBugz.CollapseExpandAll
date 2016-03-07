var collapse = $('<span><a class="navlink">Collapse All</a></span>');
collapse.click(function(){
    var arrows = $('.arrow[exp="1"]');
    
    arrows.each(function(){
        triggerMouseEvent(this, "mouseover");
        triggerMouseEvent(this, "mousedown");
    });
    
    function triggerMouseEvent (node, eventType) {
        var clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent (eventType, true, true);
        node.dispatchEvent (clickEvent);
    }
});

$('#belowBanner').first().prepend(collapse);