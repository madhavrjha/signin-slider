const signUpBtn = document.querySelector('#signUp');
const signInBtn = document.querySelector('#signIn');
const container = document.querySelector('#container');

signUpBtn.addEventListener('click', e => container.classList.add('right-panel-active'));
signInBtn.addEventListener('click', e => container.classList.remove('right-panel-active'));
