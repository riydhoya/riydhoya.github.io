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
    indexSlider++;
    index++;
    if (index >= imgFruits.length) {
        index = 0;
    }
    updateSlider();

    // Menangani perubahan infoSlider secara lebih halus
    if (direction === 1) {
        infoSlider.appendChild(infoSlider.firstElementChild);
    }
    direction = -1;

    // Transisi info item dengan lebih halus
    infoSlider.style.transition = 'transform 0.5s ease-in-out';
    infoSlider.style.transform = 'translateY(-25%)';

    // Setelah animasi selesai, reset posisi info item
    setTimeout(() => {
        infoSlider.style.transition = 'none'; // Nonaktifkan transisi sementara
        infoSlider.style.transform = 'translateY(0)';
        infoSlider.appendChild(infoSlider.firstElementChild); // Pindahkan item info ke depan
        setTimeout(() => {
            infoSlider.style.transition = 'transform 0.5s ease-in-out'; // Menghidupkan transisi kembali
        }, 20); // Jeda kecil untuk transisi yang mulus
    }, 500); // Waktu yang cukup untuk menyelesaikan transisi
});

prevBtn.addEventListener('click', () => {
    indexSlider--;
    index--;
    if (index >= imgFruits.length) {
        index = 0;
    }
    updateSlider();

    // Menangani perubahan infoSlider secara lebih halus
    if (direction === -1) {
        infoSlider.appendChild(infoSlider.firstElementChild);
    }
    direction = 1;

    // Transisi info item dengan lebih halus
    infoSlider.style.transition = 'transform 0.5s ease-in-out';
    infoSlider.style.transform = 'translateY(-25%)';

    // Setelah animasi selesai, reset posisi info item
    setTimeout(() => {
        infoSlider.style.transition = 'none'; // Nonaktifkan transisi sementara
        infoSlider.style.transform = 'translateY(0)';
        infoSlider.appendChild(infoSlider.firstElementChild); // Pindahkan item info ke depan
        setTimeout(() => {
            infoSlider.style.transition = 'transform 0.5s ease-in-out'; // Menghidupkan transisi kembali
        }, 20); // Jeda kecil untuk transisi yang mulus
    }, 500); // Waktu yang cukup untuk menyelesaikan transisi
});
