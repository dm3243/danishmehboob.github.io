<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
$(function () {
    $("#buttonClick").click(function() {
        $("#DivPopUp").dialog({
            title = "jquery modal",
            width:430,
            height:200,
            modal: true,
            buttons: {
                Close:
                function(){
                    $(this).dialog('close');
                }
            }
        });
    });s
})