const inputRemark = document.querySelector('input[type = "text"]');
let remarque = "";
let btn_ = document.getElementById('btn_');

inputRemark.addEventListener('input', (e) => {
    remarque = e.target.value;
    
});

const header = document.querySelector('#header');

window.addEventListener('scroll', (e) => {

    if (window.scrollY > 90) {
        header.style.top = 0;
    }
    else{
        header.style.top = '-500px';
    }
})

