$('document').ready(function() {
    $.each(ticketCategories, function(key, value) {
        $('<div>').attr({
            id : 'div-' + key,
            class : 'span3'
        }).appendTo('#div-row-fluid').append('<h2>' + value.name + '</h2><p>' + value.settings + '</p>');
    });
});