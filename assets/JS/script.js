

const open = document.querySelector('.fa-bars');
const close =document.querySelector('.fa-xmark');
const menu =document.querySelector('.menu-btns');
const listItems = document.querySelectorAll('#menu-button');
const cover = document.querySelector('.cover');
const threeIcons = document.querySelector('.three-icons');



/*This is the logic to open the menu*/
open.addEventListener('click', ()=>{
    menu.classList.add('openMenu');
    threeIcons.classList.add('dissapear');
    cover.classList.add('overlay')
    /*Disables scrolling when the menu is opened*/
scrollTop =
window.pageYOffset || document.documentElement.scrollTop;
scrollLeft =
window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
})



/*This is the logic to close the menu*/
close.addEventListener('click',()=>{
    menu.classList.remove('openMenu');
    threeIcons.classList.remove('dissapear');
    cover.classList.remove('overlay');
     /*Enables scrolling when menu is closed*/
     window.onscroll = function() {};
})


/*This closes the menu when any item on the menu is clicked*/
listItems.forEach(listItem=>{
    listItem.addEventListener('click', ()=>{
        menu.classList.remove('openMenu');
    cover.classList.remove('overlay');

    })
});


/*This is to keep the header fixed on scroll*/

const header = document.querySelector('.header')

window.addEventListener('scroll', ()=>{
    header.classList.toggle('fixed-item', window.scrollY >45);
   
    /* 😂 😂 😂 */
 
});