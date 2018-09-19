(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  function noteList() {
    return new NoteList();
  }

  NoteList.prototype.addNote = function(content) {
    this.notes.push(note(content));
  };

  NoteList.prototype.showNotes = function() {
    return this.notes;
    // maybe call text on iterated showNotes?
    // this would allow the text of all notes to be shown.
  };

  exports.noteList = noteList;
})(this);
