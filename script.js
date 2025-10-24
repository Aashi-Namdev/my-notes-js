let createBtn = document.querySelector('#main button');
let main = document.querySelector('#main');
let notesContainer = document.querySelector(".notes-container");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
    console.log("updated");
}


createBtn.addEventListener( "click",()=>{

    let textArea = document.createElement('div');
    textArea.classList.add("text-area");
    textArea.setAttribute("contenteditable","true");
    textArea.setAttribute("spellcheck","false");

    let dltBtn = document.createElement('img');
    dltBtn.src = "assets/file.png";

    notesContainer.appendChild(textArea);
    textArea.appendChild(dltBtn);

    dltBtn.addEventListener( "click" , ()=>{
        dltBtn.parentElement.remove();
        updateStorage();
    });
    
    document.addEventListener( "keydown" , event =>{
        if(event.key == "Enter"){
            document.execCommand("insertLineBreak");
            event.preventDefault(); 
        }
    })
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName == "IMG"){
        updateStorage();
    }else if(e.target.tagName == "DIV"){
        let notes = document.querySelectorAll(".text-area");
        notes.forEach( nt =>{
            nt.onkeyup =function(){
                updateStorage();
            } 
        })
    }
})


