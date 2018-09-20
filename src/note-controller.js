(function (exports) {

  function NoteController() {
    this.list1 = new NoteList
    this.list1View = new NoteListView
  }

  NoteController.prototype.addNote = function(content) {
    this.list1.addNote(content)
  };

  NoteController.prototype.displayNotes = function() {
    document.getElementById("app").innerHTML = this.list1View.showHTML(this.list1)
  };

 exports.NoteController = NoteController;

})(this)
