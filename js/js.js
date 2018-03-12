var counter = 6;
var ulList = document.querySelector('.ulList');
var addButton = document.querySelector('.addButton'); 
var deleteButton = document.querySelector('.deleteButton'); 
var ourHeadline = document.querySelector('.headline');
var listToDo = document.querySelector('.listToDo');
var listToDone = document.querySelector('.listToDone');
 
var checkedTwo = document.querySelectorAll('input');  
   /*     
function checked(e) {
    listToDo.innerHTML = '';
    var checkedOne = document.querySelectorAll('.one'); 
for (let j = 0; j < checkedOne.length; j++)
    { 
        if (checkedOne[j].checked = true)
            {console.log(checkedOne[j].parentElement);
                listToDo.innerHTML += `<li> ${checkedOne[j].parentElement.textContent}  </li>`;
            }     
    }
}
*/
ulList.addEventListener("click", nono)
function nono(e) {
console.log(e.path[0].childNodes[1].checked);
//if (checkedTwo[e].checked == true)
//{
  //  listToDo.innerHTML += `<li> ${checkedTwo[0].parentElement.textContent}  </li>`;
//}
}




function activateItem(e){
if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.textContent; 
 
        for (let i = 0; i < e.target.parentNode.children.length; i++)
        {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}


function addItem() {
    let textLi = prompt("Enter name new item") || "undefinited";
    ulList.innerHTML += `<li> ${textLi}<input class="one" checked name="${counter}" type="radio"><input class="two" name="${counter}" type="radio"></li>`;
    counter++;
}


function deleteItem(e) {
    let del = document.querySelector(".active");
    ulList.removeChild(del);
    ourHeadline.innerHTML = `Click a list item.`;
    
}




ulList.addEventListener("click", activateItem);
addButton.addEventListener("click", addItem);
deleteButton.addEventListener("click", deleteItem);

