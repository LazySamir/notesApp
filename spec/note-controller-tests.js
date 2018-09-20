nc = new NoteController
nc.addNote("note1")
nc.addNote("note2")
nc.displayNotes()

assert.isIncluded(document.getElementById("app").innerHTML, "note1")

assert.showLog()

// mocking

function testNotesAreDisplayedOnHTML() {

  function NoteListDouble() {};

  var noteListDouble = new NoteListDouble

  NoteListDouble.prototype.addNote = function() {

  };
}
