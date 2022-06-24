
console.log("Welcome to notes app ")
showNotes();

//if user adds a note.. add it to local storage 
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click",function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();

})
//function to show elements from local storage 
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = " ";
    notesObj.forEach(function(element,index) {
        html +=`<div class="card my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text"> ${element} </p>
          <button  id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>  ` 
        
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html; 

    }
    else {
        notesObj.innerHTML = `nothing to show use "add a note section"`
    }
}



//function to delete notes
function deleteNote(index){
    console.log("I am deleting , index");
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}




 let search = document.getElementById("searchTxt");
 search.addEventListener("input", function(){
    inputVal = search.value.toLowerCase(); 
    console.log("input event fired",inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array,from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsbyTagname("p")[0].innerText;
        console.log(cardTxt)
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })

 })