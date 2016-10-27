(function ($) {
    $(document).ready(function () {

        $("#other_disease").hide();

        $("#other").click(function () {
            $("#other_disease").show();
        });
        $(".idsr_disease").click(function () {
            $("#other_disease").hide();
        });

        $("#B1 input").checkboxradio();
    })
})(jQuery);
