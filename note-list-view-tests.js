//Test 1:

nl = notesList();
nl.addNote("note1");
nl.addNote("note2");
nlv = notesListView(nl);

assert.isEqual(nlv.viewNotesList(), "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>")
