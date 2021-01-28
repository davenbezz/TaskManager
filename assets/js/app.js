const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadBtn = document.querySelector('.fa'); // the reload button

const query = document.querySelectorAll('.collection'); //      I've used querySelectorAll for .collection

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// remove task event
taskList.addEventListener('click', removeTask);
// reload the page from the reload button
reloadBtn.addEventListener('click', reloadPage);




function addNewTask(e){
    e.preventDefault();
    if(taskInput.value === ''){
        taskInput.style.borderColor = 'red';
        return;
    }
    // alert("Add new task");
        // Create an li element when the user adds a task 
        const li = document.createElement('li');
        // Adding a class
        li.className = 'collection-item';
        // Create text node and append it 
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new element for the link 
        const link = document.createElement('a');
        // Add class and the x marker for a 
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to li
        li.appendChild(link);
        // Append to ul 
        taskList.appendChild(li);
        taskInput.value = '';
    
}



function clearAllTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
function filterTasks() {
    let key = document.getElementById('filter').value;
    for(let i = 0; i < query.length; i++){
        console.log((new RegExp(key)).test(query[i].textContent));
        if((new RegExp(key)).test(query[i].textContent)){
            console.log(query[i]);
    }else{
        query[i].textContent.big();
    }
    }
}
// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }
    }
}
function reloadPage(d){
    d.preventDefault();
    location.reload();
}