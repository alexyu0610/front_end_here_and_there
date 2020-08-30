const logo = document.querySelectorAll("#logo path");
let logo_text = document.getElementById('logo');

// console.log(logo.length)

/*
Loop through the each of the letter, read the length from console output
Apply this value to stroke dasharray and offset
*/
for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}



window.addEventListener('scroll', function() {
    let value = window.scrollY;
    logo_text.style.marginBottom = value * 2 + 'px';
})