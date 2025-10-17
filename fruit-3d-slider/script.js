const imgSlider = document.querySelector('.img-slider');
const imgFruits = document.querySelectorAll('.img-item.fruit');
const infoBox = document.querySelector('.info-box');
const infoSlider = document.querySelector('.info-slider');
const bgs = document.querySelectorAll('.bg');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let indexSlider = 0;
let index = 0;
let direction;

function updateSlider() {
    imgSlider.style.transition = 'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;

    document.querySelector('.fruit.active').classList.remove('active');
    imgFruits[index].classList.add('active');

    document.querySelector('.bg.active').classList.remove('active');
    bgs[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    direction = 1; // arah ke depan
    indexSlider++;
    index = (index + 1) % imgFruits.length;
    updateSlider();

    // animasi info box
    infoSlider.style.transition = 'transform 0.5s ease-in-out';
    infoSlider.style.transform = 'translateY(-25%)';

    setTimeout(() => {
        infoSlider.style.transition = 'none';
        infoSlider.style.transform = 'translateY(0)';
        infoSlider.appendChild(infoSlider.firstElementChild);
        setTimeout(() => {
            infoSlider.style.transition = 'transform 0.5s ease-in-out';
        }, 20);
    }, 500);
});

prevBtn.addEventListener('click', () => {
    direction = -1; // arah ke belakang
    indexSlider--;
    if (index < 0) index = imgFruits.length - 1;
    updateSlider();

    // animasi info box
    infoSlider.style.transition = 'transform 0.5s ease-in-out';
    infoSlider.style.transform = 'translateY(25%)'; // kebalikan arah

    setTimeout(() => {
        infoSlider.style.transition = 'none';
        infoSlider.style.transform = 'translateY(0)';
        infoSlider.prepend(infoSlider.lastElementChild); // pindahkan item terakhir ke depan
        setTimeout(() => {
            infoSlider.style.transition = 'transform 0.5s ease-in-out';
        }, 20);
    }, 500);
});
