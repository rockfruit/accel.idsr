(function($) {
    $(document).ready(function() {

        // This contains our configuration of nested step wizard
        // Read documentation at https://github.com/rstaib/jquery-steps/wiki/Settings
        $("#application").steps({
            headerTag: "h1",
            bodyTag: "section",
            cssClass: "wizard",
            transitionEffect: "slideLeft",
            enableAllSteps: true
        });
        $("#A").steps({
            headerTag: "h2",
            bodyTag: "subsection",
            cssClass: "wizard",
            transitionEffect: "slideLeft",
            enableAllSteps: true
        });
        $("#B").steps({
            headerTag: "h2",
            bodyTag: "subsection",
            cssClass: "wizard",
            transitionEffect: "slideLeft",
            enableAllSteps: true
        });
        $("#C").steps({
            headerTag: "h2",
            bodyTag: "subsection",
            cssClass: "wizard",
            transitionEffect: "slideLeft",
            enableAllSteps: true
        });

        // Prevent .number inputs from accepting non-numerical input
        // This is brittle and dumb, but really it's the only way because
        // browsers are shits.
        $(".numeric").keydown(function(event) {
            var allowedKeys = [
                8,   // backspace
                9,   // tab
                13,  // enter
                35,  // end
                36,  // home
                37,  // left arrow
                39,  // right arrow
                46  // delete - We don't support the del key in Opera because del == . == 46.
            ];
            var isAllowedKey = allowedKeys.join(",").match(new RegExp(event.which)); // IE doesn't support indexOf
            console.log(event);
            // Some browsers just don't raise events for control keys. Easy. e.g. Safari backspace.
            if (!event.which || // Control keys in most browsers. e.g. Firefox tab is 0
                (48 <= event.which && event.which <= 57) || // Always 0 through 9
                isAllowedKey) { // Opera assigns values for control keys.
            } else {
                event.preventDefault();
            }
        });

        // Section A1
        $("#reporting_date").datepicker({ minDate: "-120D", maxDate: "+120D" });

        // Section A1
        // Section A1
        // Section A1


    })
})(jQuery);


/* read https://github.com/rstaib/jquery-steps/issues/23

$("#application").steps({
  headerTag: "heading",
  bodyTag: "section",
  transitionEffect: "slideLeft"
  cssClass: "wizard",
  saveState: true,
  onStepChanging: function (event, cur_index, next_index) {
    if (cur_index==0) {
      $("#display_primary").html(primary_name);
    }
    if (next_index==1) {
      personal_info_wizard();
    }
    current_step = cur_index;
    return true;
  },
  onStepChanged: function (e, c, p) {
    $("#application-p-"+p).hide();
    $("#application-p-"+c).fadeIn();
    current_step = true;
  }
});


function personal_info_wizard() {
  $("action.actions").hide();
  if (!$("subaction").hasClass("actions")){
    $("#personal_information").steps({
      headerTag: "subheader",
      bodyTag: "section",
      transitionEffect: 1,
      actionContainerTag: "subaction",
      cssClass: "subwizard",
      enablePagination: true,
      enableKeyNavigation: true,
      saveState: true,
      stepsOrientation: "horizontal",
      enableContentCache: true,
      startIndex: 0,
      onStepChanging: function (e,c,p) {
        if (p==0){
          current_sub_step = false;
        }
        return true;
      },
      onStepChanged: function (event, currentIndex, otherIndex) {
        if (currentIndex==0){
          current_step = true;
        }
        if ($("#personal_information-p-"+currentIndex).hasClass("skip")) {
          if (otherIndex<currentIndex) {
            $("#personal_information").steps("next");
          } else {
            $("#personal_information").steps("previous");
          }
        }
        if ($("#personal_information-p-"+currentIndex).html().trim()==""){
          if (otherIndex<currentIndex) {
            $("#personal_information").steps("next");
          } else {
            $("#personal_information").steps("previous");
          }
        }
        add_helpers();
      },
      onFinished: function() {
        $("#application").steps("next");
        $("action.actions").show();
      }
    });
  }
  add_helpers();
}
*/
