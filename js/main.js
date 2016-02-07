$(".days")
   .countdown("2016/02/27", function(event) {
     $(this).text(
       event.strftime('%D')
    );
});

$(".hours")
   .countdown("2016/02/27", function(event) {
     $(this).text(
       event.strftime('%H')
    );
});

$(".minutes")
   .countdown("2016/02/27", function(event) {
     $(this).text(
       event.strftime('%M')
    );
});

$(".seconds")
   .countdown("2016/02/27", function(event) {
     $(this).text(
       event.strftime('%S')
    );
});   
