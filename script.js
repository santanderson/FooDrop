const mobileButton = document.getElementById('mobile-button');
const mobileMenu = document.getElementById('mobile-menu');
const navBar = document.getElementById('navbar');
const logo = navBar.children[0].children[0];
const navLists = navBar.children[2].children;
let isOpen = false;

mobileButton.addEventListener('click', showMenu);
window.addEventListener('scroll', changeNavColor);

function showMenu(){
    if(!isOpen){
        mobileMenu.style.display = 'flex';
        mobileButton.style.color = 'white'
        logo.style.color = 'white';
        isOpen = true;
    }else if(isOpen){
        mobileMenu.style.display = 'none';
        mobileButton.style.color = 'rgb(243, 138, 0)';
        logo.style.color = 'rgb(243, 138, 0)'
        isOpen = false;
    }
}

function changeNavColor(){
    let posy = window.pageYOffset;
    let buttonColor = posy >=550? 'rgb(243, 138, 0)': 'white';
    let color = posy >= 630? 'black': 'white';

    mobileButton.style.color = buttonColor;
    navLists[0].children[0].style.color = color;
    navLists[1].children[0].style.color = color;
    navLists[2].children[0].style.color = color;
    navLists[3].children[0].style.color = color;
}