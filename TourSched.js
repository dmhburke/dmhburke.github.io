
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

  $('#plusButtonThree').on('click', () => {
    $('#contentChildThree').slideToggle();
    $('#plusButtonOne').fadeToggle();
    $('#plusButtonTwo').fadeToggle();
    });

    $('#plusButtonFour').on('click', () => {
       $('#contentChildFour').slideToggle();
       $('#plusButtonFive').fadeToggle();
       $('#plusButtonSix').fadeToggle();
       $('.TourScheduleMain').toggleClass("mainExtendTwo");
     });

    $('#plusButtonFive').on('click', () => {
      $('#contentChildFive').slideToggle();
      $('#plusButtonFour').fadeToggle();
      $('#plusButtonSix').fadeToggle();
      });

    $('#plusButtonSix').on('click', () => {
      $('#contentChildSix').slideToggle();
      $('#plusButtonFour').fadeToggle();
      $('#plusButtonFive').fadeToggle();
      });

    $('#plusButtonSeven').on('click', () => {
         $('#contentChildSeven').slideToggle();
         $('#plusButtonEight').fadeToggle();
         $('#plusButtonNine').fadeToggle();
         $('.TourScheduleMain').toggleClass("mainExtendThree");
       });

    $('#plusButtonEight').on('click', () => {
        $('#contentChildEight').slideToggle();
        $('#plusButtonSeven').fadeToggle();
        $('#plusButtonNine').fadeToggle();
        });

    $('#plusButtonNine').on('click', () => {
        $('#contentChildNine').slideToggle();
        $('#plusButtonSeven').fadeToggle();
        $('#plusButtonEight').fadeToggle();
        });


/*[New Jquery here]*/





})
