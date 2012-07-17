$('document').ready(function () {
    PUBNUB.subscribe({
        channel: "tip&skip",
        restore: false,
        callback: function (message) {
            var ticket = createTicket(message.provider, message.details);
            displayTicket(ticket);
        },
        disconnect: function () {
        },
        reconnect: function () {
        },
        connect: function () {
        }
        /*<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="d" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="index.html" class="ui-link-inherit"><p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

        <h3 class="ui-li-heading">Stephen Weber</h3>
        <p class="ui-li-desc"><strong>You've been invited to a meeting at Filament Group in Boston, MA</strong></p>
        <p class="ui-li-desc">Hey Stephen, if you're available at 10am tomorrow, we've got a meeting with the jQuery team.</p>

        </a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>*/
    });

    $.each(providers, function (id, provider) {
        /*
        * create list-divider
        */

        //<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-li-has-count">
        var li1 = $('<li>').attr({
            id: "list-divider-" + provider.id,
            'data-role': "list-divider",
            role: "heading",
            class: "ui-li ui-li-divider ui-bar-d ui-li-has-count"
        }).text(provider.title);

        //<span class="ui-li-count ui-btn-up-c ui-btn-corner-all">2</span>
        var span = $('<span>').attr({
            id: 'count-' + provider.id,
            class: "ui-li-count ui-btn-up-c ui-btn-corner-all"
        }).text('0');
        span.appendTo(li1);
        li1.appendTo('ul#tickets');
        /*
        * <li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-li-has-count">
        * Friday, October 8, 2010
        * <span class="ui-li-count ui-btn-up-c ui-btn-corner-all">2</span>
        * </li>
        */

        /*
        * add buy button
        */

        //<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c">
        var li2 = $('<li>').attr({
            id: "list-item-buy-" + provider.id,
            'data-corners': "false",
            'data-shadow': "false",
            'data-iconshadow': "true",
            'data-wrapperels': "div",
            'data-icon': "arrow-r",
            'data-iconpos': "right",
            'data-theme': "d",
            class: "ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d"
        });

        //<div class="ui-btn-inner ui-li">
        var div1 = $('<div>').attr({
            class: "ui-btn-inner ui-li"
        });

        //<div class="ui-btn-text">
        var div2 = $('<div>').attr({
            class: "ui-btn-text"
        });

        //<a href="index.html" class="ui-link-inherit">
        var a = $('<a>').attr({
            href: "receiver.html#buy-" + provider.id,
            class: "ui-link-inherit"
        }).text('Buy ticket');
        a.appendTo(div2);
        div2.appendTo(div1);

        //<span class="ui-li-count ui-btn-up-c ui-btn-corner-all">2</span>
        var span = $('<span>').attr({
            id: 'buy-' + provider.id,
            class: "ui-icon ui-icon-arrow-r ui-icon-shadow"
        }).text(' ');
        span.appendTo(div1);
        div1.appendTo(li2);
        li2.appendTo('ul#tickets');
        /*
        * <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c">
        * 
        * <div class="ui-btn-inner ui-li">
        * <div class="ui-btn-text">
        * <a href="index.html" class="ui-link-inherit">Acura</a></div>
        * 
        * <span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
        */
    });

    /*
    * buy-dl specific
    */
    $('a#buy-dl-60').click(function () {
        var ticket = createTicket('dl', '60');
        $.mobile.changePage('receiver.html#main');
        displayTicket(ticket);
    });

    $('a#buy-dl-120').click(function () {
        var ticket = createTicket('dl', '120');
        $.mobile.changePage('receiver.html#main');
        displayTicket(ticket);
    });

    /*
    * buy-nmbs specific
    */
    $('a#nmbs').click(function () {
        var details = {
            departure: $('input#departure').val(),
            destination: $('input#destination').val()
        };
        var ticket = createTicket('nmbs', details);
        $.mobile.changePage('receiver.html#main');
        displayTicket(ticket);
    });
});

/*
* compose sms
*/
function dl60() {
    var message = {};
    message.body = "DL";
    message.recipient = "4884";
    window.plugins.composer.send(message);
}

function dl120() {
    var message = {};
    message.body = "DL120";
    message.recipient = "4884";
    window.plugins.composer.send(message);
}

function nmbs(details) {
    var message = {};
    message.body = "NMBS";
    message.recipient = "0478316644";
    //window.plugins.composer.send(message);
}

/*
* create a ticket
*/
var id = 0;
function createTicket(provider, details) {
    var ticket;
    if (provider == 'dl') {
        if (details == '60') {
            ticket = {
                ticketID: id++,
                active: true,
                date: new Date(),
                text: "De Lijn '60",
                publishKey: null,
                subscribeKey: null,
                provider: providers[provider],
                details: '60'
            };
            dl60();
        } else if (details == '120') {
            ticket = {
                ticketID: id++,
                active: true,
                date: new Date(),
                text: "De Lijn '120",
                publishKey: null,
                subscribeKey: null,
                provider: providers[provider],
                details: '120'
            };
            dl120();
        }
    } else if (provider == 'nmbs') {
        ticket = {
            ticketID: id++,
            active: true,
            date: new Date(),
            text: "Ticket from " + details.departure + " to " + details.destination + ".",
            publishKey: null,
            subscribeKey: null,
            provider: providers[provider],
            details: details
        };
        nmbs(details);
    }
    return ticket;
}

/*
* display the ticket
*/
function displayTicket(ticket) {
    /*
    * create list-item
    */

    //<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="d" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d">
    var li = $('<li>').attr({
        id: "list-item-" + ticket.ticketID,
        'data-corners': "false",
        'data-shadow': "false",
        'data-iconshadow': "true",
        'data-wrapperels': "div",
        'data-icon': "arrow-r",
        'data-iconpos': "right",
        'data-theme': "d",
        class: "ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d"
    });

    //<div class="ui-btn-inner ui-li">
    var div1 = $('<div>').attr({
        class: "ui-btn-inner ui-li"
    });

    //<div class="ui-btn-text">
    var div2 = $('<div>').attr({
        class: "ui-btn-text"
    });

    //<a href="index.html" class="ui-link-inherit">
    var a = $('<a>').attr({
        //href: "receiver.html#main",
        class: "ui-link-inherit"
    });

    //<p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>
    var p1 = $('<p>').attr({
        class: "ui-li-aside ui-li-desc"
    });
    var strong1 = $('<strong>').text(ticket.date.toString());
    strong1.appendTo(p1);
    p1.appendTo(a);

    //<h3 class="ui-li-heading">Stephen Weber</h3>
    var h3 = $('<h3>').attr({
        class: "ui-li-heading"
    }).text(ticket.ticketID);
    h3.appendTo(a);

    //<p class="ui-li-desc"><strong>You've been invited to a meeting at Filament Group in Boston, MA</strong></p>
    /*var p2 = $('<p>').attr({
    class : "ui-li-desc",
    });
    var strong1 = $('<strong>').text(ticket.date);
    strong1.appendTo(p2);
    p2.appendTo(a);*/

    //<p class="ui-li-desc">Hey Stephen, if you're available at 10am tomorrow, we've got a meeting with the jQuery team.</p>
    var p3 = $('<p>').attr({
        class: "ui-li-desc"
    }).text(ticket.text);
    p3.appendTo(a);

    a.appendTo(div2);
    div2.appendTo(div1);

    //<span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>
    var span = $('<span>').attr({
        class: "ui-icon ui-icon-arrow-r ui-icon-shadow"
    }).text(' ');

    span.appendTo(div1);
    div1.appendTo(li);
    $('li#list-divider-' + ticket.provider.id).after(li);

    //update counter
    var count = $('span#count-' + ticket.provider.id).text();
    count++;
    $('span#count-' + ticket.provider.id).text(count);

    /*<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="d" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d">
    <div class="ui-btn-inner ui-li">
    <div class="ui-btn-text">
    <a href="index.html" class="ui-link-inherit">
    <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

    <h3 class="ui-li-heading">Stephen Weber</h3>
    <p class="ui-li-desc"><strong>You've been invited to a meeting at Filament Group in Boston, MA</strong></p>
    <p class="ui-li-desc">Hey Stephen, if you're available at 10am tomorrow, we've got a meeting with the jQuery team.</p>

    </a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>*/
}

Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};