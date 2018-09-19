(function(exports) {

  function NoteListView() {
  }

  function noteListView() {
    return new NoteListView();
  }

  NoteListView.prototype.showHTML = function(noteList) {
    var listEnd = "</ul>";
    var allNotes = noteList.showNotes();
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
