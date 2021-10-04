
var oppenModal = document.querySelector('.js-modal-oppen');

var modal = document.querySelector('.header__oppen--modal');

var iconModal = document.querySelector('.js-click-modal');

oppenModal.addEventListener('click', function () {
    modal.classList.add('show-modal')
})


iconModal.addEventListener('click', function () {
    modal.classList.remove('show-modal')
})


var showSupport = document.querySelector('.support');

var support = document.querySelector('.support-all');

var iconSupport = document.querySelector('.close-support-icon');

showSupport.addEventListener('click', function () {
    support.classList.add('show-support')
})

iconSupport.addEventListener('click', function () {
    support.classList.remove('show-support')
})


// click menu


var oppenMenu = document.querySelector('.header__menu--click')

var headerMenu = document.querySelector('.header-menu-app')

var removeHeaderMenu = document.querySelector('.remove-menu-header')


oppenMenu.addEventListener('click', function () {
    headerMenu.classList.add('show-header-menu')
});


removeHeaderMenu.addEventListener('click', function () {
    headerMenu.classList.remove('show-header-menu')
})