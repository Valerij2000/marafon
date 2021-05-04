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


/**Modal thanks state partners */
const btn_modal_partners = document.querySelector('#btn_modal_partners');

btn_modal_partners.addEventListener('click', () => {
  btn_modal_partners.setAttribute('data-toggle', 'modal');
  btn_modal_partners.setAttribute('data-dismiss', 'modal');
})

/**Modal thanks one */
const btn_modal_one = document.querySelector('#btn_modal_one');

btn_modal_one.addEventListener('click', () => {
  btn_modal_one.setAttribute('data-toggle', 'modal');
  btn_modal_one.setAttribute('data-dismiss', 'modal');
})

/**Modal thanks two */
const btn_modal_two = document.querySelector('#btn_modal_two');

btn_modal_two.addEventListener('click', () => {
  btn_modal_two.setAttribute('data-toggle', 'modal');
  btn_modal_two.setAttribute('data-dismiss', 'modal');
})

