const cNext = document.getElementById('cNext');
const sBack = document.getElementById('sBack');
const sNext = document.getElementById('sNext');
const pBack = document.getElementById('pBack');

const trails = document.getElementById('trail');

const createAccount = document.getElementById('createAccount');
const socialLinks = document.getElementById('socialLinks');
const personalInfo = document.getElementById('personalInfo');

cNext.addEventListener('click', function(){
    createAccount.classList.add('cMoveRight');
    socialLinks.classList.add('sMoveMiddle');
    trails.classList.remove('trail2');
    trails.classList.remove('trail3');
    trails.classList.remove('trail4');
    trails.classList.add('trail1');
});

sNext.addEventListener('click', function(){
    socialLinks.classList.add('sMoveRight');
    personalInfo.classList.add('pMoveMiddle');
    trails.classList.add('trail2');
});

sBack.addEventListener('click',function(){
    socialLinks.className = "";
    socialLinks.classList.add("mainDiv__socialLinks");
    createAccount.classList.remove('cMoveRight');
    trails.classList.add('trail4');
});

pBack.addEventListener('click',function(){
    personalInfo.classList.remove('pMoveMiddle');
    socialLinks.classList.remove('sMoveRight');
    socialLinks.classList.remove('sMoveMiddle');
    socialLinks.classList.add('sMoveMiddleFromRight');
    trails.classList.add('trail3');
});