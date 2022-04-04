const mobileMenu = document.getElementById('mobile-menu')
const mobileButton = document.getElementById('mobile-button');
let isOpen = false;

mobileButton.addEventListener('click', showMenu);

function showMenu(){

    if (window.matchMedia("(min-width: 1100px)").matches){
        const isOpen = false;
    }else if(!isOpen){
        mobileMenu.style.display = 'flex';
        isOpen = true;
    }else if(isOpen){
        mobileMenu.style.display = 'none';
        isOpen = false;
    }
}