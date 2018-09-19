//Test 1:

nl = noteList();
nl.addNote("note1");
nl.addNote("note2");
nlv = noteListView();

assert.isEqual(nlv.showHTML(nl), "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>")

assert.showLog()
