$('document').ready(function() {
    $.each(ticketCategories, function(categorieID, categorie) {
        $('<div>').attr({
            class : 'span4 well',
            id : 'tickets-' + categorieID
        }).appendTo('div#row-fluid-1').html('<h2>' + categorie.name + '<a class="btn btn-primary pull-right" href="' + categorie.buy.buyPage + '">Buy</a></h2><p>' + categorie.text + '</p>');

        if (localStorage.getItem(categorieID) != null) {
            $('<ul>').attr({
                class : 'nav nav-list',
                id : categorieID
            }).appendTo('div#tickets-' + categorieID);
            $.each($.parseJSON(localStorage[categorieID]), function(ticketID, ticket) {
                if (ticket.active) {
                    $('<li>').attr({
                        class : 'ticket',
                        id : categorieID + '-' + ticketID
                    }).appendTo('ul#' + categorieID);

                    $('<a>').appendTo('li#' + categorieID + '-' + ticketID);
                }
            })
        }
    });

    setInterval(function() {
        $.each($('li.ticket'), function(key, value) {
            var ticketCategorie = value.parentNode.id;
            var tickets = $.parseJSON(localStorage.getItem(ticketCategorie));
            if (tickets != null) {
                var ticket = tickets[value.id.split('-')[1]];
                var now = new Date();
                if (ticketCategorie == 'park') {
                    if (ticket.active) {
                        var elapsedTime = Math.round((now.getTime() - ticket.startTime) / 1000);
                        if (elapsedTime < 60) {
                            $(this).find('a:first').html(ticket.general.text + '<p align="right">(active for ' + elapsedTime + ' seconds)</p>');
                        } else {
                            $(this).find('a:first').html(ticket.general.text + '<p align="right">(' + Math.round(elapsedTime / 60) + ' minutes)</p>');
                        }
                    }
                } else if (ticketCategorie == 'dl') {
                    var elapsedTime = Math.round((ticket.general.validTime - (now.getTime() - ticket.startTime) / 1000) / 60);
                    if (elapsedTime <= 0) {
                        ticket.active = false;
                        tickets[value.id] = ticket;
                        localStorage.setItem(value.parentNode.id, JSON.stringify(tickets));
                        $(this).find('a:first').html(ticket.general.text + '<p align="right">(expired ' + elapsedTime * -1 + ' minutes ago)</p>');
                    } else {
                        $(this).find('a:first').html(ticket.general.text + '<p align="right">(' + elapsedTime + ' minutes remaining)</p>');
                    }
                }
            }
        });
    }, 1000);
}); 