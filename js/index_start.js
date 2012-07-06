$('document').ready(function() {
    $.each(ticketCategories, function(key, value) {
        $('<div>').attr({
            id : 'div-' + key,
            class : 'span4'
        }).appendTo('#div-row-fluid').append('<h2>' + value.name + '</h2><p>' + value.text + '</p>');
    });
});

/*$('<a>').attr({
 href : value.page + '.html',
 id : 'a' + key
 }).text(value.name).appendTo('#div' + key);

 $('#a' + key).click(function() {
 setSessionValue('mainCategory', JSON.stringify(value));
 });

 <div class="span4">
 <h2>What can we do?</h2>
 <p>
 Twitter provides this bootstrap for everyone to use. It is an interesting tool with a lot of possibilities. Easy to use, and flexible enough for your testing. Get to know about the features <a href="http://twitter.github.com/bootstrap/" target="blank">over here</a>.
 </p>
 <p>
 <a class="btn" href="http://irail.be">iRail &raquo;</a>
 </p>
 </div>*/