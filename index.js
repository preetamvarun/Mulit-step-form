const cNext = document.getElementById('cNext');
const sBack = document.getElementById('sBack');
const sNext = document.getElementById('sNext');
const pBack = document.getElementById('pBack');

const createAccount = document.getElementById('createAccount');
const socialLinks = document.getElementById('socialLinks');
const personalInfo = document.getElementById('personalInfo');

cNext.addEventListener('click', function(){
    createAccount.classList.add('cMoveRight');
    socialLinks.classList.add('sMoveMiddle');
});

sNext.addEventListener('click', function(){
    socialLinks.classList.add('sMoveDoubleRight');
    personalInfo.classList.add('pMoveMiddle');
});

sBack.addEventListener('click',function(){

});

pBack.addEventListener('click',function(){

});