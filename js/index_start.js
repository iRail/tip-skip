$('document').ready(function() {
    $.each(ticketCategories, function(categorieID, categorie) {
        $('<div>').attr({
            class : 'span4',
            id : categorieID
        }).appendTo('div#row-fluid-1').html('<h2>' + categorie.name + '<a class="btn btn-primary pull-right" href="' + categorie.buy.buyPage + '">Buy</a></h2><p>' + categorie.text + '</p>');

        if (localStorage.getItem(categorieID) != null) {
            $('<ul>').attr({
                class : 'nav nav-list',
                id : categorieID
            }).appendTo('div#' + categorieID);
            $.each($.parseJSON(localStorage[categorieID]), function(ticketID, ticket) {
                if (ticket.active) {
                    $('<li>').attr({
                        class : 'ticket',
                        id : ticketID
                    }).appendTo('ul#' + categorieID);

                    $('<a>').appendTo('li#' + ticketID);
                }
            })
        }
    });

    setInterval(function() {
        $.each($('li.ticket'), function(key, value) {
            var tickets = $.parseJSON(localStorage.getItem(value.parentNode.id));
            var ticket = tickets[value.id];
            var endTime = new Date().getTime();
            var elapsedTime = Math.round((ticket.general.validTime - (endTime - ticket.startTime) / 1000) / 60);
            $(this).find('a:first').html(ticket.general.text + '<p align="right">(' + elapsedTime + ' minutes remaining)</p>');
            if (elapsedTime <= 0) {
                ticket.active = false;
                tickets[value.id] = ticket;
                localStorage.setItem(value.parentNode.id, JSON.stringify(tickets));
            }
        });
    }, 1000);
});
