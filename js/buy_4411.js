$('document').ready(function() {
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
});
