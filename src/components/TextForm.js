import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const clearAll = () => {
        setText("")
    }

    const copyText = () => {
        let copy=document.getElementById("myBox");
        copy.select();
        navigator.clipboard.writeText(copy.value)
    }
    //we have used regular expression(regex)
    const removeExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    //to able to wright on textarea we use event.target.value
    //onchange is used to track the changes done on textarea
    const handleOnChage = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" >
                <h1 style={{color:props.mode===`light`?`black`:`white`}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode===`light`?`white`:`#3b3333`, color:props.mode===`light`?`black`:`white`}} onChange={handleOnChage} id="myBox" rows="8"></textarea>
                </div>
                <button  disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={clearAll}>clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove extra spaces</button>

            </div>
            <div className="container my-3"  style={{color:props.mode===`light`?`black`:`white`}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes is required to read this text</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
