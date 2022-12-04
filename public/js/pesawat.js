$(document).ready(function (){
    var minDate = new Date();
    minDate.setDate(minDate.getDate() - 1);
    $("#depart").datepicker({
        showAnim: "drop",
        numberOfMonth: 1,
        minDate: minDate,
        format: 'dd-mmm-yyyy',
        onClose: function(selectedDate){
            $('#return').datepicker("option", "minDate", selectedDate);
        }
    });
})


$(document).ready(function(){
    $("#tujuanP").bind('keyup change', function(){
        check_Provinsi( $("#asalP").val(), $("#tujuanP").val() )
        
        $("#searchButton").click(function(){
            check_Provinsi( $("#asalP").val(), $("#tujuanP").val() )
        })
    });
    function check_Provinsi (asal, tujuan){
    
        if( asal === tujuan){
            $("#searchButton").attr("disabled", "disabled")
            $("#message").html('<div class="text-danger">Provinsi asal dan tujuan tidak boleh sama!</div>')
        } else {
            $("#searchButton").removeAttr("disabled")
            $("#message").html('<div> </div>')
        }
    }
});

// function removeDisabled() {
//     $('#tujuanP').removeAttr('disabled')
// }