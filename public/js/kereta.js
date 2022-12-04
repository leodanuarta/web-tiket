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
    $("#tujuanK").bind('keyup change', function(){
        check_Provinsi( $("#asalK").val(), $("#tujuanK").val() )
        
        $("#searchButton").click(function(){
            check_Provinsi( $("#asalK").val(), $("#tujuanK").val() )
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