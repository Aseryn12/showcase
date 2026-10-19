var circles = document.querySelector('.circles');
var amount = 70;

let fragmentForCircles = document.createDocumentFragment();

for(let i = 0; i < amount; i++){
    let forCircle = document.createElement('div')
    forCircle.classList.add('forCircle')
    let circle = document.createElement('div');
    circle.classList.add('circle');
    forCircle.appendChild(circle);
    fragmentForCircles.appendChild(forCircle); 

    console.log(i)
}

circles.appendChild(fragmentForCircles);

let circAfterAppend = document.querySelectorAll('.circle')

circAfterAppend.forEach(circle => {
    circle.onclick = function(){

        let indexOfCirc = 0;
        for(let i = 0; i < amount; i++){
            if(circAfterAppend[i] === circle)
                indexOfCirc = i;
        }

        let time1 = 100, time2 = 300;

        var j = 1;
        for(i = indexOfCirc; i < amount; i++){
            setTimeout((i) => {
                circAfterAppend[i].classList.add('circleActive');
                setTimeout((i) =>{
                    circAfterAppend[i].classList.remove('circleActive');
                }, time2, i)
            }, j * time1, i); 
            j++;      
        }

        var k = 1;
        for(i = indexOfCirc-1; i >= 0; i--){
            setTimeout((i) => {
                circAfterAppend[i].classList.add('circleActive');
                setTimeout((i) =>{
                    circAfterAppend[i].classList.remove('circleActive');
                }, time2, i)
            }, k * time1, i); 
            k++;         
        }
    }
});

