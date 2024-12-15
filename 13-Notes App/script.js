const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');


function createNoteEl(id, content){
    const element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do you really want to delete this Note?")
        if(warning){
            deleteNote(id, content)
        }
    })

    element.addEventListener("input", ()=>{
        updateNotes(id, element.value);
    })

}
   function deleteNote(id, content){
        const notes = getNotes().filter((note)=> note.id != id)[0]
        saveNotes(notes);
        appEl.removeChild(element);
    }

function updateNote(id, content){
    const notes = getNotes()
    const target = notes.filter((note)=>note.id == id)[0]
    target.content = content
    saveNotes(notes)
}




function addNote(){

    const notes = getNotes();

    const noteObj = {
        id : Math.floor(Math.random()*100000),
        content: "",
    }

    const noteEl = createNoteEl(noteObj.id, noteObj.content)
    appEl.insertBefore(noteEl, btnEl)

    notes.push(noteObj);

    saveNotes(notes)
}

function saveNotes(notes){
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes(notes){
   return JSON.parse(localStorage.getItem("note-app") || "[]");
}



btnEl.addEventListener("click", addNote);