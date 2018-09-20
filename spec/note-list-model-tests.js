// Test 1
nl = new NoteList();
nl.addNote("Note1");
nl.addNote("Note2");
assert.isIncluded(nl.showNotes()[0].text(), "Note1")

//Test 2
nl.addNote("Note3");

assert.isIncluded(nl.showNotes()[2].text(), "Note3")

assert.showLog()
