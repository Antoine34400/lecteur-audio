
const inputRemark = document.querySelector('input[type = "text"]');
let remarque = "";
let btn_ = document.getElementById('btn_');
let form = document.querySelector('form');

btn_.addEventListener('click', (e) => {
    remarque = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (remarque === true) {
        document.querySelector('#admin').innerHTML(`<h3>${remarque}</h3>`)
    }
})

const header = document.querySelector('#header');

window.addEventListener('scroll', (e) => {

    if (window.scrollY < 120) {
        header.style.top = 0;
    }
    else{
        header.style.top = '-500px';
    }
})

