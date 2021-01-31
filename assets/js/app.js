const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadBtn = document.querySelector('.fa'); // the reload button

const query = document.querySelector('.collection'); //      I've used querySelector for the .collection

const allLi = query.getElementsByTagName('li'); //I've used by TagName method to identify every collection-item

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
    const dateID = Date.now();
    if(taskInput.value === ''){
        taskInput.style.borderColor = 'red';
        return;
    }
    // alert("Add new task");
        // Create an li element when the user adds a task 
        const li = document.createElement('li');
        // Adding a class
        li.className = 'collection-item';
        // // Adding a date
        // li. = new Date();
        // Create text node and append it 
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new element for the link 
        const link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        const dateDiv = document.createElement("div");
        dateDiv.className = "dateDiv";
        dateDiv.style.display = "none";
        dateDiv.textContent = dateID;
        li.appendChild(dateDiv);
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
    if(confirm('Are you sure about clearing all tasks?')){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }
}

//making the filter function
function filterTasks() {
    let key = document.getElementById('filter').value; //key now has the filtered value
    for(let i = 0; i<allLi.length; i++){
        if((new RegExp(key)).test(allLi[i].textContent)){
            allLi[i].style.display = "";
        }else{
            allLi[i].style.display = "none";
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
//sorting function
$(".dropdown-trigger").dropdown();
const ascendingBtn = document.querySelector(".ascending-btn");
const descendingBtn = document.querySelector(".descending-btn");
const collectionSorted = document.querySelector(".collection-sorted");
//ascending Sort function
function ascendSort() {
    const unorderedList = document.querySelectorAll(".collection-item");
    var orderingArray = new Array();
    const currentTime = Date.now();
    for (let i = 0; i < unorderedList.length; i++) {
      listItem = unorderedList[i].querySelector(".dateDiv");
      taskListTime = listItem.textContent;
      let differenceTime = currentTime - taskListTime;
      orderingArray[i] = [differenceTime, i];
    }
    orderingArray.sort();
    for (let i = 0; i < unorderedList.length; i++) {
      collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
    }
    for (let i = 0; i < unorderedList.length; i++) {
      taskList.appendChild(unorderedList[orderingArray[i][1]]);
    }
  }
// descending sort function
function descendSort() {
    const unorderedList = document.querySelectorAll(".collection-item");
    var orderingArray = new Array();
    const currentTime = Date.now();
    for (let i = 0; i < unorderedList.length; i++) {
      listItem = unorderedList[i].querySelector(".dateDiv");
      taskListTime = listItem.textContent;
      let differenceTime = currentTime - taskListTime;
      orderingArray[i] = [differenceTime, i];
    }
    orderingArray.sort();
    orderingArray.reverse();
    for (let i = 0; i < unorderedList.length; i++) {
      collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
    }
    for (let i = 0; i < unorderedList.length; i++) {
      taskList.appendChild(unorderedList[orderingArray[i][1]]);
    }
  }
  
ascendingBtn.addEventListener("click", ascendSort);
descendingBtn.addEventListener("click", descendSort);
