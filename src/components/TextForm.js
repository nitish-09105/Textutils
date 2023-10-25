import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase() 
        setText(newText)
        props.showAlert('Converted to UpperCase','success')
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase() 
        setText(newText)
        props.showAlert('Converted to LowerCase','success')
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert('Text Cleared','success')
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert('Text Copied','success')
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Removed Extra Spaces','success')
    }

    const [text,setText]=useState("Enter text here")
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows='8' value={text} onChange={handleOnChange}>   </textarea>
            </div>
            <button disabled={text.length===0} onClick={handleUpClick} className='btn btn-primary mx-1 my-1'>Convert to Uppercase</button>
            <button disabled={text.length===0} onClick={handleLoClick} className='btn btn-primary mx-1 my-1'>Convert to Lowercase</button>
            <button disabled={text.length===0} onClick={handleClearClick} className='btn btn-primary mx-1 my-1'>Clear</button>
            <button disabled={text.length===0} onClick={handleCopy} className='btn btn-primary mx-1' my-1>Copy Text</button>
            <button disabled={text.length===0} onClick={handleExtraSpaces} className='btn btn-primary mx-1' my-1>Remove Spaces</button>
        </div>
        <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length}- Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview your text"}</p>
        </div>
        </>
    )
}
