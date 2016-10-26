<!-- This contains our configuration of nested step wizard -->
<!-- Read documentation at https://github.com/rstaib/jquery-steps/wiki/Settings -->
(function($) {
    $(document).ready(function() {
        $("#main-step-form").steps({
            headerTag: "h1",
            bodyTag: "main_section",
            cssClass: "wizard",
            transitionEffect: "slideLeft",
            autoFocus: true,
            enableAllSteps: true
        });
        $("#A").steps({
            headerTag: "h2",
            bodyTag: "a_section",
            cssClass: "wizard",
            transitionEffect: "slideLeft",
            autoFocus: true,
            enableAllSteps: true
        });
        $("#B").steps({
            headerTag: "h2",
            bodyTag: "div",
            cssClass: "wizard",
            transitionEffect: "slideLeft",
            autoFocus: true,
            enableAllSteps: true
        });
    })
})(jQuery);
