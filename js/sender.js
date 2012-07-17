$('document').ready(function() {
    $.each(providers, function(id, provider) {
        //<a data-role="button" id="buy" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c">
        var a = $('<a>').attr({
            id: "id-" + provider.id,
            'provider-id': id,
            'data-role': "button",
            'data-corners': "true",
            'data-shadow': "true",
            'data-iconshadow': "true",
            'data-wrapperels': "span",
            'data-theme': "c",
            class: "ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c",
            href: 'sender.html#buy-' + provider.id
        });

        //<span class="ui-btn-inner ui-btn-corner-all">
        var span1 = $('<span>').attr({
            'provider-id': id,
            class: "ui-btn-inner ui-btn-corner-all"
        });

        //<span class="ui-btn-text">But ticket for phone!</span>
        var span2 = $('<span>').attr({
            'provider-id': id,
            class: "ui-btn-text"
        }).text(provider.title);
        span2.appendTo(span1);
        span1.appendTo(a);
        a.appendTo('div#content');

        /*
         * <a data-role="button" id="buy" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c">
         * <span class="ui-btn-inner ui-btn-corner-all">
         * <span class="ui-btn-text">But ticket for phone!</span></span></a>
         */
    });

    /*
     * buy-dl specific
     */
    $('a#buy-dl-60').click(function(event) {
        var ticket = {
            channel: "tip&skip",
            message: {
                publishKey: null,
                subscribeKey: null,
                provider: providers[event.srcElement.parentElement.getAttribute('provider-id')],
                details: '60'
            }
        };
        PUBNUB.publish(ticket);
    });
    $('a#buy-dl-120').click(function(event) {
        var ticket = {
            channel: "tip&skip",
            message: {
                publishKey: null,
                subscribeKey: null,
                provider: providers[event.srcElement.parentElement.getAttribute('provider-id')],
                details: '120'
            }
        };
        PUBNUB.publish(ticket);
    }); /*var id = 0;
     $('a').click(function(event) {
     var ticket = {
     channel : "tip&skip",
     message : {
     ticketID : id++,
     active : true,
     date : new Date(),
     text : "Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
     publishKey : null,
     subscribeKey : null,
     provider : providers[event.srcElement.getAttribute('provider-id')]
     }
     }
     PUBNUB.publish(ticket)
     });*/
});