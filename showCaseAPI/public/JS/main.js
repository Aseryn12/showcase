//for article appirance

let mainBoard = document.querySelector('#main')


//for resume

let resumeTextContainer = document.querySelector('.resumeText');
let resumeText = Array.from(document.querySelectorAll('.inResumeText'));



for (let i = 0; i < resumeText.length; i++) {
    setTimeout(() => {
        resumeText[i].classList.remove('none')
    }, 90*(i+1));
}

/*setInterval(() => {
    resumeTextContainer.classList.toggle('pulse')
}, 600);*/

resumeTextContainer.addEventListener("click", function(event){

    resumeText.forEach(elem => {
        elem.classList.add('none')
    })

    setTimeout(() => {
        for (let i = 0; i < resumeText.length; i++) {
            setTimeout(() => {
                resumeText[i].classList.remove('none')
            }, 90*(i+1));
        }        
    }, 200);

})


//for slider

let sliderContainer = document.querySelector('.caseArticle')
let cases = Array.from(document.querySelectorAll('.case'))
let buttons = Array.from(document.querySelectorAll('.sliderButton'));

function getActiveCase(cases){

    for(let i = 0; i < cases.length; i++){
        if(!cases[i].classList.contains('disabled'))
            return i;
    }
}

buttons.forEach(button => {
    let time = 200;

    button.onclick = function() {

        let indexAC = getActiveCase(cases);

        if(button.id == 'right'){
            cases[indexAC].classList.add('fade');
            if(indexAC + 1 < cases.length){
                setTimeout(() => {
                    cases[indexAC].classList.add('disabled');
                    cases[indexAC + 1].classList.remove('disabled');
                    setTimeout(() =>{
                        cases[indexAC + 1].classList.remove('fade');
                    }, time);
                }, time);
            }else{
                setTimeout(() => {
                    cases[indexAC].classList.add('disabled');
                    cases[0].classList.remove('disabled');
                    setTimeout(() =>{
                        cases[0].classList.remove('fade');
                    }, time);
                }, time);
            }
        }

        if(button.id == 'left'){
            cases[indexAC].classList.add('fade');
            if(indexAC - 1 >= 0){
                setTimeout(() => {
                    cases[indexAC].classList.add('disabled');
                    cases[indexAC - 1].classList.remove('disabled');
                    setTimeout(() =>{
                        cases[indexAC - 1].classList.remove('fade');
                    }, time);
                }, time);
            }else{
                setTimeout(() => {
                    cases[indexAC].classList.add('disabled');
                    cases[cases.length - 1].classList.remove('disabled');
                    setTimeout(() =>{
                        cases[cases.length - 1].classList.remove('fade');
                    }, time);
                }, time);
            }
        }
    }
});