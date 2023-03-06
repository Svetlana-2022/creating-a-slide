// для слайдера
let offset = 46; //смещение от левого края
let dotIndex = 1; // слайд
const sliderLine = document.querySelector('.lead__slider-line');
const btnPrev = document.querySelector('.lead__slider-btn_prev');
const btnNext = document.querySelector('.lead__slider-btn_next');
const dotPrev = document.querySelector('.lead__slider-btn_prev-dot');
const dotCenter = document.querySelector('.lead__slider-btn_center-dot');
const dotNext = document.querySelector('.lead__slider-btn_next-dot');
// для попапа
const burgerHeader = document.querySelector('.header__burger');
const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.header__button');

// для слайдера
btnPrev.addEventListener('click', () => {
    offset = offset - 352; // offset -= 352
    dotIndex --;
    if(offset < 46) {
        offset = 750;
        dotIndex = 3;
    }
    sliderLine.style.left = - offset + 'px';
    currentSlide(dotIndex);
});
btnNext.addEventListener('click', () => {
    offset = offset + 352; // offset += 352
    dotIndex ++;
    if(offset > 750) {
        offset = 46;
        dotIndex = 1;
    }
    sliderLine.style.left = - offset + 'px';
    currentSlide(dotIndex);
});

function currentSlide(n) {
    if(n === 1) {
        dotPrev.classList.add('lead__slider-dot_active');
        dotCenter.classList.remove('lead__slider-dot_active');
        dotNext.classList.remove('lead__slider-dot_active');
    } else if(n === 2) {
        dotCenter.classList.add('lead__slider-dot_active');
        dotPrev.classList.remove('lead__slider-dot_active');
        dotNext.classList.remove('lead__slider-dot_active');
    } else if(n === 3) {
        dotNext.classList.add('lead__slider-dot_active');
        dotPrev.classList.remove('lead__slider-dot_active');
        dotCenter.classList.remove('lead__slider-dot_active');
    }
}
currentSlide(dotIndex);

// для попапа
burgerHeader.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});
buttonClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
});