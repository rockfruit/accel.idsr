
(function($) {
    $(document).ready(function() {

        $("input#other_disease").hide();
        $("input#other").click(function () {
            $("input#other_disease").show();
        });

    })
})(jQuery);
