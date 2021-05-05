// Scroll Yakor
function scrollDownUp(id){
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset ().top - offset
  }, 500);
  return false;
};
// Burger Menu
$(document).ready(function(){
  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
  })
})

/**
 * const btn_modal_partners = document.querySelector('#btn_modal_partners');

btn_modal_partners.addEventListener('click', () => {
  btn_modal_partners.setAttribute('data-toggle', 'modal');
  btn_modal_partners.setAttribute('data-dismiss', 'modal');
})


const btn_modal_one = document.querySelector('#btn_modal_one');

btn_modal_one.addEventListener('click', () => {
  btn_modal_one.setAttribute('data-toggle', 'modal');
  btn_modal_one.setAttribute('data-dismiss', 'modal');
})


const btn_modal_two = document.querySelector('#btn_modal_two');

btn_modal_two.addEventListener('click', () => {
  btn_modal_two.setAttribute('data-toggle', 'modal');
  btn_modal_two.setAttribute('data-dismiss', 'modal');
})

 * document.querySelector('#btn_modal_partners').setAttribute('data-toggle', 'modal');
 * 
 */

/**
 * const btn_modal_partners = document.querySelector('#btn_modal_partners');
btn_modal_partners.addEventListener('click', () => {
  document.querySelector('#state__partn__modal').style.display = 'none';
})

 */

/**Modal state partners */

$( document ).ready(function() {

  
  var state__partn__modal = new bootstrap.Modal(document.getElementById('state__partn__modal'), {
    keyboard: false
  })
  
  var thanks = new bootstrap.Modal(document.getElementById('thanks'), {
    keyboard: false
  })
  
  const state_partners_open_modal = document.querySelector('#state_partners_open_modal');
  state_partners_open_modal.addEventListener('click', function (event) {
    state__partn__modal.show()
  })  
  
  const btn_modal_partners = document.querySelector('#btn_modal_partners');
});

/**
 * btn_modal_partners.addEventListener('click', () => {
  state__partn__modal.hide()
  thanks.show()
})
 */




