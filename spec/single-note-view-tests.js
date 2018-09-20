n = new Note("note1")
snv = new SingleNoteView

assert.isEqual(snv.showHTML(n), "<ul><li><div>note1</div></li></ul>")

assert.showLog()
