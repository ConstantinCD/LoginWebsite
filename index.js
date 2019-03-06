$(document).ready(function(){
    $('.login').click(function(e){
        e.preventDefault();

        response = ["3958","61","28836261"]
        console.log(response)
        Android.sendData(response)
    });

    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
});