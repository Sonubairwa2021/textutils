import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        //    console.log("uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClclick = () => {
        setText('');
    }
    function firstCap(){
        let newText = text.toLowerCase() 
        let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(newText2)
    }
    const handleOnChange = (event) => {
        //    console.log("handle on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('')
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert Into UpperCase</button>
            <button className="btn btn-primary mz-2" onClick={handleLoclick}>Convert Into lowerCase</button>
            <button className="btn btn-primary mz-2" onClick={firstCap}>Convert First Cap</button>

            <button className="btn btn-primary mz-2" onClick={handleClclick}>Clear</button>
        </div>
        <div className="container my-2">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
    <p>{text}</p>
        </div>
        </>
    )
}
