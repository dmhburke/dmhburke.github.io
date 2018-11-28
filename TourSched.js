
$(document).ready(()=> {

/*CONTENT SLIDE DOWN */

  $('#plusButtonOne').on('click', () => {
     $('#contentChildOne').slideToggle();
     $('#plusButtonTwo').fadeToggle();
     $('#plusButtonThree').fadeToggle();
   });

  $('#plusButtonTwo').on('click', () => {
    $('#contentChildTwo').slideToggle();
    $('#plusButtonOne').fadeToggle();
    $('#plusButtonThree').fadeToggle();
    });

  $('#plusButtonThree').on('click', event => {
    $('#contentChildThree').slideToggle();
    $('#plusButtonOne').fadeToggle();
    $('#plusButtonTwo').fadeToggle();
    });


/*[New Jquery here]*/





})
