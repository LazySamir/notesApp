nc = new NoteController
nc.addNote("note1")
nc.addNote("note2")
nc.displayNotes()

assert.isIncluded(document.getElementById("app").innerHTML, "note1")

assert.showLog()
