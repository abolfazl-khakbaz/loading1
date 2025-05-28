$(document).ready(function() {
    $('.btn').click(function() {
        $(".circle_loading").toggleClass('border-complete');
        $(".circle_checked").toggle()
    });
});