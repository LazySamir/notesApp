(function (exports) {

  function NoteController() {
    this.list1 = noteList()
    this.list1View = noteListView()
  }

  NoteController.prototype.addNote = function(content) {
    this.list1.addNote(content)
  };

  NoteController.prototype.displayNotes = function() {
    document.getElementById("app").innerHTML = this.list1View.showHTML(this.list1)
  };

 exports.NoteController = NoteController;

})(this)
