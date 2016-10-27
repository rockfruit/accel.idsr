(function($) {
    $(document).ready(function() {

        // When a county option is selected
        $("#A2 option.county").click(function(){
            // remove --select-- option from ounty
            $("#A2 option.county_default").remove()
            // hide all districts
            $("#A2 option.district:visible").hide();
            // show the --select- option for district
            $("#A2 option.district_default").show()
            // select the --select-- option for district
            $("#A2 select.district").val('none');
            // show districts from the selected county
            $("#A2 ."+$(this).attr('name')).show();

            // remove all facility options
            $("#A2 select.facility").children().remove()
            // re-insert the --select-- item
            $("#A2 select.facility").append($('<option>', {
                value: "none",
                text: "--Select--"
            }));
            // select the --select-- item
            $("#A2 select.facility").val('none');
        })

        // When a district option is selected
        $("#A2 option.district").click(function(){
            // Hide the default 'none' district option
            $("#A2 option.district_default").hide();
            // Clear the facility list, and add the default 'none' option
            $("#A2 select.facility").children().remove()
            $("#A2 select.facility").append($('<option>', {
                value: "none",
                text: "--Select--"
            }));
            // TODO: Reach out to the LIMS for a list of facilities
            // Right now, I'll just insert a dummy item.
            $("#A2 select.facility").append($('<option>', {
                value: "Facility in " + $(this).val(),
                text: "Facility in " + $(this).val()
            }));
        })

    })
})(jQuery);
