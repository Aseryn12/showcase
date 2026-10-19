let form = document.querySelector('.formDnd');
let fieldForTask = document.querySelector('.forNewTask');
let fieldForProgress = document.querySelector('.forTaskInProgress');

let fragmentForTasks = document.createDocumentFragment();


//let addedTaskId = 0;

function getApplications(param) {
    fetch('http://showcaseapi/APIs/select.php', {
        method: "POST",
        body: JSON.stringify({
            status: param
        })
    })
        .then((response)=>{
            console.log(response.ok)
            return response.json();
        })
        .then((applications) => {
                
                applications.forEach(app => {
                let newTaskState = document.createElement('p');
                let newTaskDate = document.createElement('p');
                let newTaskText = document.createElement('p');
                let newTaskTech = document.createElement('span');
                let newTask = document.createElement('div');

                newTaskText.textContent = app['text'];
                newTaskState.textContent = app['status'];
                newTaskDate.textContent = app['timestamp']; 

                newTaskTech.appendChild(newTaskState);
                newTaskTech.appendChild(newTaskDate);

                newTaskTech.classList.add('newTaskTech');
                newTaskText.classList.add('newTaskText');

                newTask.appendChild(newTaskText);
                newTask.appendChild(newTaskTech);

                newTask.classList.add('newTask');
                newTask.dataset.id = app['id'];

                fragmentForTasks.appendChild(newTask);

            });
            switch (param) {
                case 'Ожидает обработки':
                    fieldForTask.prepend(fragmentForTasks);
                    break;
            
                case 'Обрабатывается':
                    fieldForProgress.prepend(fragmentForTasks);
                    break;
            }

        });
}


getApplications('Ожидает обработки');
getApplications('Обрабатывается');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
        
    let taskText = document.querySelector('.inFormDnd');

    let newTaskState = document.createElement('p');
    let newTaskDate = document.createElement('p');
    let newTaskText = document.createElement('p');
    let newTaskTech = document.createElement('span');
    let newTask = document.createElement('div');

    newTaskText.textContent = taskText.value;
    newTaskState.textContent = `Ожидает обработки`;
    let date = new Date();
    newTaskDate.textContent = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} | ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
        
    newTaskTech.appendChild(newTaskState);
    newTaskTech.appendChild(newTaskDate);

    newTaskTech.classList.add('newTaskTech');
    newTaskText.classList.add('newTaskText');

    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskTech);

    newTask.classList.add('newTask');
    newTask.classList.add('adding');

    fetch('http://showcaseapi/APIs/include.php', {
        method: "POST",
        body: JSON.stringify({
            text: newTaskText.textContent,
            status: newTaskState.textContent,
            timestamp: newTaskDate.textContent
        })
    }).then((response)=>{
        return response.text();
    }).then((text)=>{
        console.log('text:', text);

        newTask.dataset.id = text;
        fieldForTask.prepend(newTask);

        setTimeout(() => {
            newTask.classList.remove('adding')
        }, 100);
    })
});

fieldForTask.addEventListener('click', (event)=>{
    if(event.target.closest('div').classList.contains('newTask')){

        let movingTask = event.target.closest('div');

        movingTask.classList.add('adding')

        fetch('http://showcaseapi/APIs/update.php', {
            method: "POST",
            body: JSON.stringify({
                id: movingTask.dataset.id
            })
        })
        
        setTimeout(() => {
            movingTask.parentNode.removeChild(movingTask);
            movingTask.lastChild.firstChild.textContent = 'Обрабатывается';

            fieldForProgress.prepend(movingTask);
            setTimeout(() => {
                movingTask.classList.remove('adding')

            }, 100);
        }, 300);
    }
})

fieldForProgress.addEventListener('click', (event)=>{
    if(event.target.closest('div').classList.contains('newTask')){

        let complitedTask = event.target.closest('div');
        complitedTask.lastChild.firstChild.textContent = 'Обработано';

        fetch('http://showcaseapi/APIs/delete.php', {
            method: "POST",
            body: JSON.stringify({
                id: complitedTask.dataset.id
            })
        })

        setTimeout(() => {
            complitedTask.classList.add('adding');

            setTimeout(()=>{
                complitedTask.parentNode.removeChild(complitedTask);
            }, 300);
        }, 500)
    }
});