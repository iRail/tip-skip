$('document').ready(function() {
    if (localStorage.getItem('park') == null) {
        localStorage.setItem('park', JSON.stringify(new Array()));
    }
    var map = new L.Map('map');

    wax.tilejson('http://api.tiles.mapbox.com/v3/mapbox.mapbox-streets.jsonp', function(tilejson) {
        map.addLayer(new wax.leaf.connector(tilejson));
    });

    map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        var circle = new L.Circle(e.latlng, radius);
        map.addLayer(circle);
    };

    map.on('locationerror', onLocationError);

    function onLocationError(e) {
        alert(e.message);
    };

    map.locateAndSetView(16);

    var ticket = $.parseJSON(localStorage.getItem('park'))[0];
    var startTime, endTime, iT;

    function intervalTrigger() {
        return setInterval(function() {
            var now = new Date();
            var elapsedTime = Math.round((now.getTime() - startTime) / 1000);
            if (elapsedTime < 60) {
                $('a#elapsed-time').text(elapsedTime + " seconds");
            } else {
                $('a#elapsed-time').text(Math.round(elapsedTime / 60) + " minutes");
            };
        }, 1000);
    };

    if (ticket != null && ticket.active) {
        $('a#start').addClass('disabled');
        $('a#stop').removeClass('disabled');
        startTime = ticket.startTime;
        iT = intervalTrigger();
    } else {
        $('a#start').removeClass('disabled');
        $('a#stop').addClass('disabled');
    }

    $('a#start').click(function() {
        startTime = new Date();

        var tickets = [{
            general : ticketCategories.park.buy.categories.standardTicket,
            active : true,
            startTime : startTime.getTime()
        }];

        localStorage.setItem('park', JSON.stringify(tickets));

        $('a#stop').removeClass('disabled');
        $('a#start').addClass('disabled');

        iT = intervalTrigger();
    });

    $('a#stop').click(function() {
        endTime = new Date();

        var tickets = [{
            general : ticketCategories.park.buy.categories.standardTicket,
            active : false,
            totalTime : Math.round(((endTime.getTime() - startTime) / 1000) / 60)
        }];

        localStorage.setItem('park', JSON.stringify(tickets));

        $('a#start').removeClass('disabled');
        $('a#stop').addClass('disabled');

        clearInterval(iT);
    });
});
