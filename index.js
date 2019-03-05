$(document).ready(function(){
    $('.login').click(function(){
        username = $("#username").val(); 
        password = $("#password").val(); 
        response = username + " " + password
        Android.sendData(response)
    });

    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
});