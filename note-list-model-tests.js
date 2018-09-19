// Test 1
nl = notesList();
nl.addNote("Note1");
nl.addNote("Note2");

assert.isIncluded(nl.showNotes().text(), "Note1")

//Test 2
nl.addNote("Note3");

assert.isIncluded(nl.showNotes().text(), "Note3")
