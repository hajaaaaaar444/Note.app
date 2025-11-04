// Select elements
const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");

// Load stored notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Display notes
function displayNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${note}
            <button class="delete-btn" onclick="deleteNote(${index})">X</button>
        `;
        notesList.appendChild(li);
    });
}

function addNote() {
    const value = input.value.trim();
    if (value === "") return;

    notes.push(value);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    input.value = "";
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

addBtn.addEventListener("click", addNote);

displayNotes();
