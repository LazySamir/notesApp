(function(exports) {

  function NotesListView(notesList) {
    this.notesList = notesList;
  }

  function notesListView(notesList) {
    return new NotesListView(notesList);
  }

  NotesListView.prototype.showNotesList = function() {
    return this.notesList;
  };

  NotesListView.prototype.viewNotesList = function() {
    // "<ul>"
    // return this.showNotesList().showNotes().forEach(function(element) {
    //   "<li><div>${element.content}</div></li>"
    // });
    // "</ul>"
  };

  exports.notesListView = notesListView;
})(this);
