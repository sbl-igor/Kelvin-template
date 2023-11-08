const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/cross.svg"
    } else {
        navBtnImg.src = "./img/icons/burger-open.svg"
    }
}

AOS.init({
    once: true,
    // disable: 'mobile',
});