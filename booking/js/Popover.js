var options = {
//     content: function() {
//         return $(this).parent().find('.popover-content').html();
//     },
//     html: true,
//     placement: 'bottom',
// };
// var $popover = $('.trigger').popover(options);
//
// // Open Popover
// var pax = [1,0];
// $('.trigger').click(function(e) {
//     e.stopPropagation();
//     $('.popover-body input').each(function(i) {
//         $(this).val(pax[i]);
//     });
// });
//
// // Close Popover
// $(document).click(function(e) {
//     if($(e.target).hasClass('dismiss')) {
//         $('.trigger').popover('hide');
//     }
// });
//
// // On Close Store Values
// $popover.on('hide.bs.popover', function(e) {
//     $('.popover-body input').each(function(i) {
//         pax[i] = $(this).val();
//     });
// });
//
// // Change Values on + & - Button Clicks
// $(document).on('click', '.number-spinner a', function() {
//     var btn = $(this),
//         input = btn.closest('.number-spinner').find('input'),
//         oldValue = input.val().trim(),
//         inputPax = $('#pax'),
//         dataTotal = parseInt(inputPax.attr('data-total')),
//         dataAdults = parseInt(inputPax.attr('data-adults')),
//         dataChildren = parseInt(inputPax.attr('data-children'));
//
//     if(btn.attr('data-dir') == 'up') {
//         if(oldValue < input.attr('max')) {
//             oldValue++;
//
//             if(input.attr('id') === 'adult') {
//                 dataAdults++
//                 inputPax.attr('data-adults', dataAdults);
//                 console.log('Adult added! The new adult total is: ' + dataAdults);
//             } else if(input.attr('id') === 'child') {
//                 dataChildren++
//                 inputPax.attr('data-children', dataChildren);
//                 console.log('Child added! The new child total is: ' + dataChildren);
//             }
//         }
//     } else {
//         if(oldValue > input.attr('min')) {
//             oldValue--;
//
//             if(input.attr('id') === 'adult') {
//                 dataAdults--
//                 inputPax.attr('data-adults', dataAdults);
//                 console.log('Adult added! The new adult total is: ' + dataAdults);
//             } else if(input.attr('id') === 'child') {
//                 dataChildren--
//                 inputPax.attr('data-children', dataChildren);
//                 console.log('Child added! The new child total is: ' + dataChildren);
//             }
//         }
//     }
//     dataTotal = dataAdults + dataChildren;
//     inputPax.attr('data-total', dataTotal);
//     inputPax.attr('placeholder', 'Total: ' + dataTotal + ' • Adults: ' + dataAdults + ' • Children: ' + dataChildren);
//
//     input.val(oldValue);
// });
//
// // Show Popover On Startup
// // $('.trigger').popover('show')