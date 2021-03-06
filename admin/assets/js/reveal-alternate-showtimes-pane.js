/**
 * The only thing this file exists to do is reveal or hide a pane in the USC_Screening_MetaBox depending on a prior value that
 * was selected.
 *
 * If the 'if_weekend_showtimes' checkboxs is selected, reveal the 'weekend_showtimes_repeatable' pane which
 * allows the administrator to enter alternative weekend showtimes for films different than regular showtimes during the week
 */
jQuery(function ($) {
    /* You can safely use $ in this code block to reference jQuery */

    var $if_weekend_showtimes_row           = $('#fieldrow-if_weekend_showtimes');
    var $if_weekend_showtimes_checkboxes    = $if_weekend_showtimes_row.find('input:checkbox');
    var $weekend_showtimes_repeatable_row   = $if_weekend_showtimes_row.next();

    $(document).ready(function() {

        check_checked();
    });

    /**
     * OnClick function that calls 'check_paid' every time a radio button in the 'remuneration section is clicked'
     */
    $if_weekend_showtimes_checkboxes.on('click', function() {

        check_checked();
    });


    /**
     * Pretty straightforward function.
     * If, at the time the method runs, any of the 'if_weekend_showtimes' checkboxes are clicked,
     * then reveal the following pane full of repeatable fields.
     * If 'paid' is not clicked, hide the pane AND @TODO CLEAR EVERYTHING
     */
    function check_checked() {

        var paid_is_checked = $if_weekend_showtimes_checkboxes.is(":checked");

        if(paid_is_checked) {

            $weekend_showtimes_repeatable_row.removeClass('hidden');
        }
        else {

            $weekend_showtimes_repeatable_row.addClass('hidden');

            $first_showtime = $weekend_showtimes_repeatable_row.find('#field-weekend_showtimes_repeatable__0');
            $first_showtime.siblings().remove();
            $first_showtime.find('input').val('');

        }
    }

});