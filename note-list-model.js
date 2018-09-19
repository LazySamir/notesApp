(function(exports) {
  function NotesList() {
    this.notes = [];
  }

  function notesList() {
    return new NotesList();
  }

  NotesList.prototype.addNote = function(content) {
    this.notes.push(note(content));
  };

  NotesList.prototype.showNotes = function() {
    return this.notes;
  };

  exports.notesList = notesList;
})(this);
