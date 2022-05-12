document.addEventListener("DOMContentLoaded", function () {

  const elem = document.querySelector('.hero-section');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
      autoPlay: true,
      autoPlay: 2000
  });


  // tabs

  const tabLinks = document.querySelectorAll(".btn");
  const tabContent = document.querySelectorAll(".content-list");


  tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
  });


  function openTabs(el) {
    var btnTarget = el.currentTarget;
    var content = btnTarget.dataset.content;

    tabContent.forEach(function (el) {
      el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
      el.classList.remove("active");
    });

    document.querySelector("#" + content).classList.add("active");

    btnTarget.classList.add("active");
  }

});


// Mobile Menu

  const buttons = document.querySelectorAll('.js-toggle-mobile-header');
  const cover = document.querySelector('.js-header-cover');
  const loginToggle = document.querySelector('.js-user-click');
  const loginPage = document.querySelector('.user-login');
  const loginClose = document.querySelector('.login-close-btn');

  [...buttons].forEach(button => {
    button.addEventListener('click', e => {
      cover.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  });

  // Close mobile cover if click outside coverContainer
  cover.addEventListener('click', e => {
    if (!e.target.closest('.mobile-header, .user-login')) {
      cover.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
// login page open
  loginToggle.addEventListener('click', ()=>{
    loginPage.classList.toggle('active');
  });
// login page close
  loginClose.addEventListener('click', ()=>{
    loginPage.classList.remove('active')
  })