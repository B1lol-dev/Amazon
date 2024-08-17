const modal_bg = document.getElementById('modal_bg');

const nav_search_input = document.getElementById('nav_search_input');
const nav_form = document.getElementById('nav_form');

nav_search_input.addEventListener('focusin' , () =>{
    modal_bg.style.display='flex'
    nav_form.classList.add('orange_outline')
})

nav_search_input.addEventListener('focusout' , () =>{
    modal_bg.style.display=''
    nav_form.classList.remove('orange_outline')
})

const nav_deliver = document.getElementById('nav_deliver');
const nav_deliver_modal = document.getElementById('nav_deliver_modal');
const deliver_modal_close = document.getElementById('deliver_modal_close');
const deliver_modal_bg = document.getElementById('deliver_modal_bg');

nav_deliver.addEventListener('click' , () =>{
    deliver_modal_bg.style.display='flex'
})

deliver_modal_close.addEventListener('click' , () =>{
    deliver_modal_bg.style.display=''
})


const nav_bottom_modal_close = document.getElementById('nav_bottom_modal_close');
const nav_bottom_bg = document.getElementById('nav_bottom_bg');
const nav_bottom_all = document.getElementById('nav_bottom_all');
const nav_bottom_modal = document.getElementById('nav_bottom_modal');

nav_bottom_all.addEventListener('click' , () =>{
    nav_bottom_bg.style.display='flex'
        
    setTimeout(() => {
        nav_bottom_modal.style.transform='translateX(0%)'

        setTimeout(() => {
            nav_bottom_bg.style.background='#000000ad'
        }, 10);
    }, 50);
})

nav_bottom_modal_close.addEventListener('click' , () =>{
    nav_bottom_modal.style.transform=''
    
    setTimeout(() => {
        nav_bottom_bg.style.background=''

        setTimeout(() => {
            nav_bottom_bg.style.display=''
        }, 220);
    }, 330);
})



const nav_lang = document.getElementById('nav_lang')
const nav_lang_hover = document.getElementById('nav_lang_hover')

nav_lang.addEventListener('mouseenter' , () =>{
    nav_lang_hover.style.display='block'
    modal_bg.style.display='flex'
})

nav_lang.addEventListener('mouseleave' , () =>{
    nav_lang_hover.style.display=''
    modal_bg.style.display=''
})

// carousel

const carousel_next = document.getElementById('carousel_next');
const carousel_prev = document.getElementById('carousel_prev');

const carousel_item1 = document.getElementById('carousel_item1');
const carousel_item2 = document.getElementById('carousel_item2');
const carousel_item3 = document.getElementById('carousel_item3');
const carousel_item4 = document.getElementById('carousel_item4');

let carousel_count_right = 0;
let carousel_count_left = 0;

carousel_next.addEventListener('click' , () =>{
    if (carousel_count_right == 0) {
        carousel_item1.style.marginLeft='-100%'
        carousel_count_right = 1;
        carousel_count_left = 1;

    } else if (carousel_count_right == 1) {
        carousel_item2.style.marginLeft='-100%'
        carousel_count_right = 2;
        carousel_count_left = 2;

    } else if (carousel_count_right == 2) {
        carousel_item3.style.marginLeft='-100%'
        carousel_count_right = 3;
        carousel_count_left = 3;

    } else{
        console.log('error')
    }
})

carousel_prev.addEventListener('click', () => {
    if (carousel_count_left == 0) {
        carousel_item1.style.marginLeft = '';
        carousel_item4.style.marginLeft = '';
        carousel_count_right = 3;
        carousel_count_left = 3;
    } else if (carousel_count_left == 1) {
        carousel_item2.style.marginLeft = '';
        carousel_item1.style.marginLeft = '0%';
        carousel_count_right = 0;
        carousel_count_left = 0;
    } else if (carousel_count_left == 2) {
        carousel_item3.style.marginLeft = '';
        carousel_item2.style.marginLeft = '0%';
        carousel_count_right = 1;
        carousel_count_left = 1;
    } else if (carousel_count_left == 3) {
        carousel_item4.style.marginLeft = '';
        carousel_item3.style.marginLeft = '0%';
        carousel_count_right = 2;
        carousel_count_left = 2;
    } else {
        console.log('error');
    }
});






