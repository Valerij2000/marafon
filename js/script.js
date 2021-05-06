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

/**
 * btn_modal_partners.addEventListener('click', () => {
state__partn__modal.hide()
thanks.show()
})
 */

// const selectTag = document.querySelector('#city_1')


// function select () {

//   const test = selectTag[0]
//   console.log(test)

//   //  if(test.innerText === 'Сначала выберите город') {
//   //   test.innerText.style.color = 'red'
//   //  }
//   }


//   selectTag.addEventListener('click', select)