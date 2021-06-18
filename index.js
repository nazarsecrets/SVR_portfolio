const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

//toggle section open-close.
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//click on the links to reach that section.
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});


//const subTitle = document.querySelector('.section_subtitle_intro');
//const strSubTitle = subTitle.textContent;
//const splitSubTitle = strSubTitle.split("");
//subTitle.textContent = "";

const text = document.querySelector('.section_title_intro strong');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

//adding JS animation for the name.
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = Null;
}

