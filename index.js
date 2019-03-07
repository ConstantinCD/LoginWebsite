$(document).ready(function(){
    $('.login').click(function(e){
        e.preventDefault();
        var accountId = $('#accountId').val();
        console.log(accountId)
        Android.sendData(accountId)
    });
});