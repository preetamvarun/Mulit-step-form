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
    socialLinks.classList.add('sMoveRight');
    personalInfo.classList.add('pMoveMiddle');
});

sBack.addEventListener('click',function(){
    socialLinks.className = "";
    socialLinks.classList.add("mainDiv__socialLinks");
    createAccount.classList.remove('cMoveRight');
});

pBack.addEventListener('click',function(){
    personalInfo.classList.remove('pMoveMiddle');
    socialLinks.classList.remove('sMoveRight');
    socialLinks.classList.add('sMoveMiddle');
    socialLinks.classList.add('sMoveMiddleFromRight');
});