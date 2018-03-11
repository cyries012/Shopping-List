var ulList = document.querySelector('.ulList');
var addButton = document.querySelector('.addButton'); 
var deleteButton = document.querySelector('.deleteButton'); 
var ourHeadline = document.querySelector('.headline');
    
        
function activateItem(e){
if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerHTML; 
 
        for (let i = 0; i < e.target.parentNode.children.length; i++)
        {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}


function addItem() {
    let textLi = prompt("Enter name new item") || "undefinited";
    ulList.innerHTML += `<li> ${textLi}</li>`;
}


function deleteItem(e) {
    let del = document.querySelector(".active");
    ulList.removeChild(del);
    ourHeadline.innerHTML = `Click a list item.`;
    
}




ulList.addEventListener("click", activateItem);
addButton.addEventListener("click", addItem);
deleteButton.addEventListener("click", deleteItem);
