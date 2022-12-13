import {basicSetup, EditorView} from "codemirror"
import {EditorState, Compartment} from "@codemirror/state"
import {python} from "@codemirror/lang-python"

let language = new Compartment, tabSize = new Compartment

let view = new EditorView({
  doc: 'print("hello")',
  extensions: [
    basicSetup,
    language.of(python()),
    tabSize.of(EditorState.tabSize.of(8))
  ],
  parent: document.querySelector("#editor")
})

function setTabSize(view, size) {
  view.dispatch({
    effects: tabSize.reconfigure(EditorState.tabSize.of(size))
  })
}
