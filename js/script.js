// Scroll Yakor
function scrollDownUp(id) {
  var offset = 0;
  $('html, body').animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    500
  );
  return false;
}
// Burger Menu
$(document).ready(function () {
  console.log(document.documentElement.clientWidth);

  // yt player plugin

  var player;
  let video_width = '700px';
  if (document.documentElement.clientWidth < 700) {
    video_width = '350px';
  }

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video_player_box', {
      height: video_width,
      width: '100%',
      videoId: 'LkxvQTSIzUs',
      playerVars: { autoplay: 0 },
      events: {
        // 'onReady': onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
  /*
  function onPlayerReady(event) {
    event.target.playVideo();
  }
*/

  var done = false;
  function onPlayerStateChange(event) {}
  function stopVideo() {
    player.stopVideo();
  }

  setTimeout(onYouTubeIframeAPIReady, 3000);
  console.log(player);

  $('#close_modal_video_btn').on('click', function (e) {
    stopVideo();
  });

  // end yt player plugin

  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
  });

  /**Modal state partners */
  var state__partn__modal = new bootstrap.Modal(document.getElementById('state__partn__modal'), {
    keyboard: false,
  });

  var thanks = new bootstrap.Modal(document.getElementById('thanks'), {
    keyboard: false,
  });

  const state_partners_open_modal = document.querySelector('#state_partners_open_modal');
  if (state_partners_open_modal) {
    state_partners_open_modal.addEventListener('click', function (event) {
      state__partn__modal.show();
    });
  }

  const state_partners_open_modal_footer = document.querySelector('#state_partners_open_modal_footer');
  state_partners_open_modal_footer.addEventListener('click', function (event) {
    state__partn__modal.show();
  });

  const btn_modal_partners = document.querySelector('#btn_modal_partners');

  btn_modal_partners.addEventListener('click', () => {
    state__partn__modal.hide();
    thanks.show();
  });
});

let hammer = new Hammer(document.querySelector('.carousel'));

let $carousel = $('.carousel');
hammer.get('swipe');
hammer.on('swipeleft', function () {
  $carousel.carousel('next');
});
hammer.on('swiperight', function () {
  $carousel.carousel('prev');
});
