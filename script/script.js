$(document).ready(function () {
    $('#next_Project').click(function () {
        $('#Jolliekod').hide(1000);
        $('#Jolliekod_Description').hide(1000);
        $('#Gene_Description').fadeIn(1000);
        $('#Gene').fadeIn(1000);
        
    });
    $('#previous_Project').click(function () {
        $('#Jolliekod').fadeIn(1000);
        $('#Jolliekod_Description').fadeIn(1000);
        $('#Gene_Description').hide(1000);
        $('#Gene').hide(1000);
       
    });

    


});