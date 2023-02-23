let login = document.getElementById('login');
let password = document.getElementById('password');
let button = document.querySelector('.mybutton');
let showhides = document.querySelector('.showhide');


function showhide () {
    if (password.type == 'text') {
    password.type = 'password';
    showhides.classList.remove('bi-eye-slash');
    showhides.classList.add('bi-eye');
    } else {
        password.type = 'text';
        showhides.classList.remove('bi-eye');
    showhides.classList.add('bi-eye-slash');
    }

}




button.addEventListener('click', () => {
    if(login.value == 'admin' && password.value == 'admin'){
        window.location = 'in.html'
    }
    else {
       alert('Qayta urunib koring');
    }
});