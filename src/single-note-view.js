(function(exports) {

  function SingleNoteView() {
  }

  // function singleNoteView() {
  //   return new singleNoteView();
  // }

  SingleNoteView.prototype.showHTML = function(note) {
    return "<ul><li><div>" + note.text() + "</div></li></ul>"
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
