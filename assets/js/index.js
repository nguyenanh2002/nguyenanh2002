$(document).ready(function() {
    $('#box_move').click(function() {
        $('#box_move').css('left', `${Math.round(Math.random() * 1000)}px`)
        $('#box_move').css('top', `${Math.round(Math.random() * 355)}px`)
    })
});