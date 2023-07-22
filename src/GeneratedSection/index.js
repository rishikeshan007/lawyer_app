import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import HtmlToDocx from 'html-docx-js/dist/html-docx'
import { saveAs } from 'file-saver'
 
const GeneratedSection = ({ setGeneratedLetter, generatedLetter, fileName = 'GeneratedDoc' }) => {
    let quillRef
    const generateWordDocument = () => {
        let wrapper = document.createElement('div')
        wrapper.innerHTML = quillRef.getEditorContents()
        const fileContent = '<!DOCTYPE html><meta http-equiv="Content-type" content="text/html"; charset="UTF-8" />'
        + wrapper.outerHTML
        const blobContent = HtmlToDocx.asBlob(fileContent)
        saveAs(blobContent, fileName)

    }
    return generatedLetter && <div style={{ marginTop: 80, marginBottom: 100 }}>
        <div style={{ display: 'flex' }}>
            <h2 style={{ marginLeft: 10, color: 'rgb(0, 114, 229)' }} >Generated</h2>
            <img onClick={generateWordDocument} style={{ height: 40, cursor: 'pointer', marginLeft: 'auto', marginTop: 'auto', marginRight: 45 }} src='./word_icon.png'></img>
        </div>
        <ReactQuill ref={quill => quillRef = quill}theme="snow" value={generatedLetter} onChange={(letter) => setGeneratedLetter(letter)} />
    </div>
}

export default GeneratedSection