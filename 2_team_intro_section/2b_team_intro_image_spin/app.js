let images = [
    'url(img/img1.png)',
    'url(img/img2.png)',
    'url(img/img3.png)',
    'url(img/img4.png)',
    'url(img/img5.png)',
    'url(img/img6.png)',
    'url(img/img7.png)',
    'url(img/img8.png)'
];

function spin_image() {
    let section = document.querySelector('section')
    let spin = document.createElement('span');
    spin.style.top = Math.random() * innerHeight + 'px';

    let bg = images[Math.floor(Math.random() * images.length)];

    let size = Math.random() * 200;
    spin.style.width = 50 + size + 'px';
    spin.style.height = 50 + size + 'px';
    spin.style.backgroundImage = bg;

    section.appendChild(spin);

    setTimeout(() => {
        spin.remove()
    }, 6000)

}
setInterval(spin_image, 50);