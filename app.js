let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 2;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${80*stt}px) scale(${1 - 0.2*stt}) perspective(14px) rotateY(0deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 1;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-80*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(0deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 1;
    }
}
loadShow();
next.onclick = function(){
    active = active - 1 < items.length ? active - 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active + 1 >= 0 ? active + 1 : active;
    loadShow();
}

const burgerMenuButton = document.querySelector(".burgerMenuButton")
const burgerMenu = document.querySelector(".burgerMenu")

burgerMenuButton.addEventListener("click", () => {
    burgerMenuButton.classList.toggle(active);
    burgerMenu.classList.toggle(active);
})