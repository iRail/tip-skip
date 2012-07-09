$('document').ready(function() {
    $.each(ticketCategories, function(key, value) {
        $('<div>').attr({
            id : 'categorie-' + key,
            class : 'span3',
        }).appendTo('div#row-fluid-1').html('<h2>' + value.name + '<a class="btn btn-primary pull-right" href="' + value.buyPage + '">Buy</a></h2><p>' + value.text + '</p>');

        /*Modernizr nog invoegen*/
        var tickets = localStorage['tickets'];
        if (tickets != null) {
            $.each(tickets, function(index, value) {
                /*<ul class="nav nav-list"><li><a href="#">Ticket 1</a></li><li><a href="#">Ticket 2</a></li></ul>'*/
            })
        }
    });
});
