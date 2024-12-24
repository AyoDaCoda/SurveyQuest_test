// Variables
const login = document.querySelector('.login-container');
const signup = document.querySelector('.signup-container');
const survey = document.querySelector('.survey-page');
const confirm = document.querySelector('.confirm-page');
const deny = document.querySelector('.denied-page');
const next = Array.from(document.querySelectorAll('.next'));
const back = document.getElementById('back');
const login_btn = document.getElementById('login');
const signup_btn = document.getElementById('signup');
const haveAccnt = document.querySelector('.have-account');
const noAccnt = document.querySelector('.no-account');
const link = document.getElementById('link');

console.log(login_btn);
// Log In clickables
login_btn.addEventListener('click', ()=> {
    login.classList.add('hide');
    survey.classList.remove('hide');
    console.log('did it');
})

noAccnt.addEventListener('click', ()=>{
    login.classList.add('hide');
    signup.classList.remove('hide');
})


// Sign Up clickables
signup_btn.addEventListener('click', ()=>{
    signup.classList.add('hide');
    survey.classList.remove('hide');
})

haveAccnt.addEventListener('click', ()=>{
    signup.classList.add('hide');
    login.classList.remove('hide');
})


// Survey link page clickables
link.addEventListener('click', ()=>{
    survey.classList.add('hide');
    confirm.classList.remove('hide');
})

back.addEventListener('click', ()=>{
    survey.classList.add('hide');
    login.classList.remove('hide');
})


// Confirm page clickables
next.forEach(n =>{
    n.addEventListener('click', ()=>{
        confirm.classList.add('hide');
        survey.classList.remove('hide');
    })
})
