$('.item').click(function() {
    
if (!$(this).hasClass('in-cart')){
    $(this).addClass('in-cart');

    var current_count = $('.item-count'). html(),
        current_value = Math.abs(current_count),
        new_count     = current_value + 1;
        
    $('.item-count').html(new_count);
}

});

$('.cart-toggle').click(function(){
    $('.cart').toggleClass('hide');
});