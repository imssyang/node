import {basicSetup, EditorView} from "codemirror"
import {EditorState, Compartment} from "@codemirror/state"
import {language} from "@codemirror/language"
import {htmlLanguage, html} from "@codemirror/lang-html"
import {javascript} from "@codemirror/lang-javascript"

const languageConf = new Compartment

const autoLanguage = EditorState.transactionExtender.of(tr => {
  if (!tr.docChanged) return null
  let docIsHTML = /^\s*</.test(tr.newDoc.sliceString(0, 100))
  let stateIsHTML = tr.startState.facet(language) == htmlLanguage
  if (docIsHTML == stateIsHTML) return null
  return {
    effects: languageConf.reconfigure(docIsHTML ? html() : javascript())
  }
})

new EditorView({
  doc: 'console.log("hello")',
  extensions: [
    basicSetup,
    languageConf.of(javascript()),
    autoLanguage
  ],
  parent: document.querySelector("#editor")
})
