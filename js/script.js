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

/**Modal state partners */
  
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


btn_modal_partners.addEventListener('click', () => {
state__partn__modal.hide()
thanks.show()
})
 

let selectOne = document.querySelector('#city_1');
let selectSecond = document.querySelector('#city_2');

const selectFunc = (select) => {
  let sel = select.selectedIndex;
  sel === 0 ? select.style.borderColor = 'red' : select.style.borderColor = 'green'
}
selectOne.addEventListener('change', () => {
  selectFunc(selectOne)
});
selectSecond.addEventListener('change', () => {
  selectFunc(selectSecond)
});