import '../scss/main.scss';


console.log('HELLO 🚀')

const media = window.matchMedia("(min-width: 768px)");

if (media.matches) {
    const mq = document.querySelector(".contact__mail");
    mq.innerHTML = `bartoszmalecki90@gmail.com`;
} else {    
}

