$(document).ready(function (){
    var minDate = new Date();
    $("#depart").datepicker({
        showAnim: "drop",
        numberOfMonth: 1,
        minDate: minDate,
        dateFormat: 'dd/mm/yyyy',
        onClose: function(selectedDate){
            $('#return').datepicker("option", "minDate", selectedDate);
        }
    });

    $("#return").datepicker({
        showAnim: "drop",
        numberOfMonth: 1,
        minDate: minDate,
        dateFormat: 'dd/mm/yyyy',
        onClose: function(selectedDate){
            $('#depart').datepicker("option", "minDate", selectedDate);
        }
    });
});

function disPul(){
    document.getElementById("plg1").style.visibility="hidden"; 
} 

function pul(){
    document.getElementById("plg1").style.visibility="visible";
}

function check()
{
    $('#return').prop('disabled', false);   
}

function unCheck()
{
    document.getElementById("check-pul").checked = false;
}
