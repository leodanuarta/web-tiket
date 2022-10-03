// $('#depart').datepicker();
// $('#return').datepicker();

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
})


// var input = document.querySelector("#check-pul");
// var date = document.querySelector('#return');
// var icondate = document.querySelector(".gj-icon");

// date.disabled = true;
// icondate.disabled = true;

// input.addEventListener("change", stateHandle);

// function stateHandle(){
//     if (document.querySelector("#check-pul").value === "") {
//         date.disabled = true; //button remains disabled
//     } else {
//         date.disabled = false; //button is enabled
//     }
// }

// var date = document.querySelector('#return');

// function untuk checkbox disable dan enable date
$(document).ready(function() {
    $('#check-pul').on('input change', function(){
        if($(this).val() == "pulang"){
            $('#return').prop('disabled', false);
        }
        else{
            $('#return').prop('disabled', false).empty();
        }
    });
});


// .disabled = true;

// var disPul = $('#datepicker').disabled();


function disPul(){
    document.getElementById("plg1").style.visibility="hidden"; 
} 

function pul(){
    document.getElementById("plg1").style.visibility="visible";
}
