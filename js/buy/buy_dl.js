$('document').ready(function() {
    if (localStorage.dl == null) {
        localStorage.dl = JSON.stringify(new Array());
    }
    $.each(ticketCategories.dl.buy.categories, function(key, value) {
        $('<div>').attr({
            id : key,
            class : 'span3',
        }).appendTo('div#row-fluid-1');

        $('<a>').attr({
            id : key,
            class : 'btn btn-primary btn-large'
        }).appendTo('div#' + key).text(value.text).click(function() {
            if (confirm("U sure?")) {
                var date = new Date();

                var dl_tickets = $.parseJSON(localStorage.dl);

                var ticket = {
                    general : value,
                    humanReadableTime : date.toString(),
                    startTime : date.getTime(),
                    id : date.getTime(),
                    active : true,
                }

                dl_tickets.push(ticket);

                localStorage.dl = JSON.stringify(dl_tickets);
            }
        });
    });
}); 