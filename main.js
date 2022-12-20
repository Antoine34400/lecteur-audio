let value = document.querySelector('#remarque_user');
let btn_ = document.getElementById('btn_');

btn_.addEventListener('input', (e) => {
    value = e.target.value;
    document.querySelector('#admin').innerHTML('Remarque : '+`$value`)
})

const header = document.querySelector('#header');



window.addEventListener('scroll', (e) => {
    console.log(e);
    if (window.scrollY > 90) {
        header.style.top = 0;
    }
    else{
        header.style.top = '-500px';
    }
})

