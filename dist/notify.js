// To Dismiss the notification:
$(document).ready(function(){

})

$(document).on('click', '#notif', function(e) {
        $("#notif").fadeOut('fast');
    });

function notify(message)
{
        $("div#notif").remove(); // Removing the division, if exists.
        $("body").append("<div id='notif'></div>");
        $("#notif").html(message).hide();
        $("#notif").slideDown('fast');
}