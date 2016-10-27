
(function($) {
    $(document).ready(function() {

        $("#other_disease").hide();
        $("#other").click(function () {
            $("#other_disease").show();
        });

        $( "#B1 input" ).checkboxradio();

    })
})(jQuery);
