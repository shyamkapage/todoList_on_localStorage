let addNotes = document.getElementById("addTxt");
let addButton = document.getElementById("addBtn");

addButton.addEventListener("click", function () {
    addNotesval = addNotes.value;

    let old_notes = localStorage.getItem("notes");
    if (old_notes == null) {
        task = [];
    }
    else {
        task = JSON.parse(old_notes);
    }
    task.push(addNotesval);
    localStorage.setItem("notes", JSON.stringify(task));
    location.reload(true);
})




if (localStorage.getItem("notes") == `[]` || localStorage.getItem("notes") == null) {
    document.getElementById("blank-notes").innerHTML = `<b>Hurray !</b> <i>You Don't have Any Work Today</i> ;)`;
}

else {
    let no_Of_notes = JSON.parse(localStorage.getItem("notes")).length;
    console.log(no_Of_notes);


    for (var i = 0; i < no_Of_notes; i++) {
        let item = JSON.parse(localStorage.getItem("notes"))[i];


        var node = document.createElement("div");
        node.setAttribute("class", "my-2 mx-2 card noteCard")
        node.style = "width: 18rem";



        // var txt = document.createTextNode("Shyam");
        node.innerHTML = `<div class="card-body">
                          <h5 class="card-title">Your Notes</h5>
                          <p id="date"></p>
                          <p class="card-text" id="notesDisplay${i}"></p>
                          <a href="#" onclick = "return deleteNotes(${i});" class="btn btn-info delete-button" id="deleteNote${i}">Delete Notes</a>
                          </div>`;
        document.getElementById("notes").appendChild(node);
        let notes = document.getElementById(`notesDisplay${i}`);
        notes.innerText = item;


    }

    //*********This is for deleting all notes at once***************
    let dlt_all_notes = document.getElementById("dlt-all");
    dlt_all_notes.disabled = false;
    dlt_all_notes.classList.remove("btn-light");
    dlt_all_notes.classList.add("btn-danger");

    dlt_all_notes.addEventListener("click", function () {
        localStorage.clear();
        location.reload(true);
    })
}

// ******************This is for deleting the notes*********************

// let dlt_btn = document.getElementsByClassName("delete-button")[0];
// dlt_btn.addEventListener("click", function(){
//     let dlt_notes_id =dlt_btn.id;

// })
// let deleteNote = document.getElementById(`deleteNote${i}`);
// deleteNote.addEventListener("click", function () {
function deleteNotes(i) {
    var toDLt = JSON.parse(localStorage.getItem("notes"))[i];
    console.log(toDLt);
    var notes = JSON.parse(localStorage.getItem("notes"));
    console.log(notes);
    var index = notes.indexOf(toDLt);
    notes.splice(index, 1);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
    location.reload(true);
}



//***** How its work Page Content */

function how_it_works() {
    let body = document.body;
    body.removeChild(body.children[1]);

    let home_menu = document.getElementsByClassName("nav-link")[0];
    home_menu.classList.remove("active");


    let how_it_work = document.getElementById("how-it-work");
    how_it_work.classList.add("active");

    let textNode = document.createElement("div");
    textNode.innerHTML = `  <br><br>
                            <h2 style="text-align: center;"> Thank You 4 Using To-Do Lists</h2>
                            <div class="card">
                            <div class="card-body">
                            <p style="font-family:'Rancho', cursive;font-size: 1.3rem;">
                            <b>## This website(To-Do Lists) works on very simple/easy cocept that is :-
                            </b><br><br>
                            <b style="color:dodgerblue;font-size: large;">1st | </b> Its take an input enter by the user(you) using
                            <b><code>textarea</code> </b>tag.
                            <br>
                            <br>
                            <b style="color:dodgerblue;font-size: large;">2nd | </b> before storing user notes its chceks if User's
                            Browser localStorage is empty or not and
                            <br>
                            <br>
                            <span style="margin-left: 15%;display: block;"> a) if its empty then its create an array in User's
                                Browser LocalStorage and </span>
                            <br>
                            <span style="margin-left: 15%;display: block;"> b) if its not empty then its just retrive the old array
                                and append new-value(entered by user) in old array </span>
                            <br>
                            <br>
                            <b style="color:dodgerblue;font-size: large;">3rd | </b> While above process one
                            <code>eventListner function()</code> also running for displaying your written notes.
                            </p>
                            </div>
                            </div>
                            <div class="card">
                            <div class="card-body">
                            <p style="color:red;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">One Very
                                Important Things is that <b>To-do List do not send your notes to any server.</b> users notes only stored
                                in user's browser and it will only visible by you in same browser where you have written your notes</p>
                            </div>
                            </div>`;
    document.body.appendChild(textNode);
}



//***** To Improve Page Content */

function to_improve() {
    let body = document.body;
    body.removeChild(body.children[1]);
    let home_menu = document.getElementsByClassName("nav-link")[0];
    home_menu.classList.remove("active");


    let to_improve = document.getElementById("to-improve");
    to_improve.classList.add("active");

    let textNode = document.createElement("div");
    textNode.innerHTML = `  <br><br>
                            <h2 style="text-align: center;"> Future Improvement</h2>
                            <div class="card">
                            <div class="card-body">
                            <p style="font-family:'Rancho', cursive;font-size: 1.3rem;">
                            <b>## Lists of Improvement :-
                            </b><br><br>
                            <b style="color:dodgerblue;font-size: large;">1st | </b> Adding date to each notes.(like when its added and with proper timestamp also)
                            <br>
                            <br>
                            <b style="color:dodgerblue;font-size: large;">2nd | </b> Adding Filter Button ! So that We can easily know our previous task by directly going to SHOW Notes BY DATE,DAY, YEAR etc
                    
                            <br>
                            <br>
                            <b style="color:dodgerblue;font-size: large;">3rd | </b> Adding Remainder Option For Upcoming Notes.

                            <br>
                            <br>
                            <b style="color:dodgerblue;font-size: large;">4th | </b> Adding Total Number of Notes Counter.

                            <br>
                            <br>
                            <b style="color:dodgerblue;font-size: large;">5th | </b> UI Improving ;)  

                            <br>
                            <br>
                            <b style="color:dodgerblue;font-size: large;">6th | </b> I would glad If You Suggest Me more improvements/features;)

                            </p>
                            </div>
                            </div>
                            <div class="card">
                            <div class="card-body">
                            <p style="color:red;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">One Very
                                Important Things is that <b>To-do List do not send your notes to any server.</b> users notes only stored
                                in user's browser and it will only visible by you in same browser where you have written your notes</p>
                            </div>
                            </div>`;
    document.body.appendChild(textNode);
}