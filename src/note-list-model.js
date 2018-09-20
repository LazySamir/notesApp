(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function(content) {
    this.notes.push(new Note(content));
  };

  NoteList.prototype.showNotes = function() {
    return this.notes;
    // maybe call text on iterated showNotes?
    // this would allow the text of all notes to be shown.
  };

  exports.NoteList = NoteList;
})(this);
