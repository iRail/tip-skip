$('document').ready(function() {
    PUBNUB.subscribe({
        channel : "tip&skip",
        restore : false,
        callback : function(ticket) {
            /*<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="d" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d">
            <div class="ui-btn-inner ui-li">
            <div class="ui-btn-text">
            <a href="index.html" class="ui-link-inherit">
            <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

            <h3 class="ui-li-heading">Stephen Weber</h3>
            <p class="ui-li-desc"><strong>You've been invited to a meeting at Filament Group in Boston, MA</strong></p>
            <p class="ui-li-desc">Hey Stephen, if you're available at 10am tomorrow, we've got a meeting with the jQuery team.</p>

            </a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>*/

            /*
            * create list-item
            */

            //<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="d" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d">
            var li = $('<li>').attr({
                id : "list-item-" + ticket.ticketID,
                'data-corners' : "false",
                'data-shadow' : "false",
                'data-iconshadow' : "true",
                'data-wrapperels' : "div",
                'data-icon' : "arrow-r",
                'data-iconpos' : "right",
                'data-theme' : "d",
                class : "ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d"
            });

            //<div class="ui-btn-inner ui-li">
            var div1 = $('<div>').attr({
                class : "ui-btn-inner ui-li",
            });

            //<div class="ui-btn-text">
            var div2 = $('<div>').attr({
                class : "ui-btn-text",
            });

            //<a href="index.html" class="ui-link-inherit">
            var a = $('<a>').attr({
                href : "index.html",
                class : "ui-link-inherit"
            });

            //<p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>
            var p1 = $('<p>').attr({
                class : "ui-li-aside ui-li-desc",
            });
            var strong1 = $('<strong>').text(ticket.date);
            strong1.appendTo(p1);
            p1.appendTo(a);

            //<h3 class="ui-li-heading">Stephen Weber</h3>
            var h3 = $('<h3>').attr({
                class : "ui-li-heading",
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
                class : "ui-li-desc",
            }).text(ticket.text);
            p3.appendTo(a);

            a.appendTo(div2);
            div2.appendTo(div1);

            //<span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>
            var span = $('<span>').attr({
                class : "ui-icon ui-icon-arrow-r ui-icon-shadow"
            }).text(' ');

            span.appendTo(div1);
            div1.appendTo(li);
            $('li#list-divider-' + ticket.provider.id).after(li);

            //update counter
            var count = $('span#count-' + ticket.provider.id).text();
            count++;
            $('span#count-' + ticket.provider.id).text(count);
        },
        disconnect : function() {
        },
        reconnect : function() {
        },
        connect : function() {
        }
        /*<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="d" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="index.html" class="ui-link-inherit"><p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

         <h3 class="ui-li-heading">Stephen Weber</h3>
         <p class="ui-li-desc"><strong>You've been invited to a meeting at Filament Group in Boston, MA</strong></p>
         <p class="ui-li-desc">Hey Stephen, if you're available at 10am tomorrow, we've got a meeting with the jQuery team.</p>

         </a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>*/
    });

    $.each(providers, function(id, provider) {
        /*
        * create list-divider
        */

        //<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-li-has-count">
        var li1 = $('<li>').attr({
            id : "list-divider-" + provider.id,
            'data-role' : "list-divider",
            role : "heading",
            class : "ui-li ui-li-divider ui-bar-d ui-li-has-count"
        }).text(provider.title);

        //<span class="ui-li-count ui-btn-up-c ui-btn-corner-all">2</span>
        var span = $('<span>').attr({
            id : 'count-' + provider.id,
            class : "ui-li-count ui-btn-up-c ui-btn-corner-all"
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
            id : "list-item-buy-" + provider.id,
            'data-corners' : "false",
            'data-shadow' : "false",
            'data-iconshadow' : "true",
            'data-wrapperels' : "div",
            'data-icon' : "arrow-r",
            'data-iconpos' : "right",
            'data-theme' : "d",
            class : "ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-d"
        });

        //<div class="ui-btn-inner ui-li">
        var div1 = $('<div>').attr({
            class : "ui-btn-inner ui-li",
        });

        //<div class="ui-btn-text">
        var div2 = $('<div>').attr({
            class : "ui-btn-text",
        });

        //<a href="index.html" class="ui-link-inherit">
        var a = $('<a>').attr({
            href : "index.html",
            class : "ui-link-inherit"
        }).text('Buy ticket');
        a.appendTo(div2);
        div2.appendTo(div1);

        //<span class="ui-li-count ui-btn-up-c ui-btn-corner-all">2</span>
        var span = $('<span>').attr({
            id : 'buy-' + provider.id,
            class : "ui-icon ui-icon-arrow-r ui-icon-shadow"
        }).text(' ');
        span.appendTo(div1);
        div1.appendTo(li2);
        li2.appendTo('ul#tickets');
        /*
         * <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c">
         * <div class="ui-btn-inner ui-li">
         * <div class="ui-btn-text">
         * <a href="index.html" class="ui-link-inherit">Acura</a></div>
         * <span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
         */
    });
});
