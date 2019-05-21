


$(document).ready(function(){

anime.timeline({loop: false})
  .add({
    targets: [
      '.paesaggio1','.animali5','.animali10','.danza15','.danza20','.animali13','.danza30',
      '.boudoir1','.paesaggio5','.boudoir10','.boudoir15','.femminile20','.boudoir13','.femminile30',
      '.danza1','.danza5','.danza10','.femminile15','.danza25','.paesaggio12','.danza35',
      '.animali1','.paesaggio6','.paesaggio10','.pittogrammi5','.femminile25','.danza13','.femminile35',
            ],



    scale: [14,1],
    opacity: [0,0.7],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 600 * i;
    }
  })

    .add({
      targets:

        '.ml15',

      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: function(el, i) {
        return 600 * i;
      }

    });
  });

    $(document).click(function(){

       $('.colore').css( 'filter', 'saturate(100%)' ).fadeOut(4000);
     $('h1.ml15').animate({'fontSize':'100%','marginLeft':'-=85%','marginTop':'-100px'},2000);
      $('div#content').removeAttr('hidden');
      $('.text-wrap').attr('display','none');
      //  $('.wrapper').removeAttr('hidden');
      // $('.immagini').removeAttr('hidden');

// $(document).on("pagecontainerload",function(event,data){
//   alert("pagecontainerload event fired!\nURL: " + data.url);
// });
setInterval(function(){ window.location.href="index.html"; }, 5000);
    });




    $(window).scroll(function () {
        clearTimeout($.data(this, 'scrollTimer'));
        $("#sidebar").removeClass('active');
    });

    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

   $(window).scroll(function () {
       clearTimeout($.data(this, 'scrollTimer'));
       $("#sidebar").removeClass('active');
     });



//     $("img").css( 'filter', 'saturate(100%)' ).hover(function() {
//   $(this).animate({ opacity: 1 });
// }, function() {
//   $(this).animate({ opacity: 0.5 });
// });
