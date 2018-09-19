(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  function noteListView(noteList) {
    return new NoteListView(noteList);
  }

  NoteListView.prototype.showNoteList = function() {
    return this.noteList;
  };

  NoteListView.prototype.showHTML = function() {
    var listEnd = "</ul>";
    var allNotes = this.noteList.showNotes();
    var n = "<ul>"

    allNotes.forEach(function(element) {
      n = n + '<li><div>' + element.text() + '</div></li>'
    });

    var fullHTML = n + listEnd;

    return fullHTML

// start + notelist.join(</div></li><li><div>) + </div></li></ul>
  }

  exports.noteListView = noteListView;
})(this);
