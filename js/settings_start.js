$('document').ready(function() {
    $.each(ticketCategories, function(key, value) {
        $('<div>').attr({
            id : 'categorie-' + key,
            class : 'span3'
        }).appendTo('div#row-fluid-1').append('<h2>' + value.name + '</h2><p>' + '</p>');
    });
});