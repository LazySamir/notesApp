//Test 1:

nl = new NoteList;
nl.addNote("note1");
nl.addNote("note2");
nlv = new NoteListView;

assert.isEqual(nlv.showHTML(nl), "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>")

assert.showLog()
