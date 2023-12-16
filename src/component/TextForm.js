import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }


    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    
    const handleExtraClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces!", "success");
    }


    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared all text!", "success");
    }
    
    
    const handleCopyClick = () => {
        let Text = document.getElementById('myBox');
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Copied text!", "success");
    }


    const handleSenClick = () => {
        let newText = text.split('. ');
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        const newSen = newText.join('. ');
        setText(newSen);
        props.showAlert("Sentenced text!", "success");
    }


    const handleCapClick = () => {
        let newText = text.split(' ');
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        const capText = newText.join(' ')
        setText(capText);
        props.showAlert("Capitalized Text!", "success");
    }


    const handleOnChange = (e) => {
        // console.log('on change');
        setText(e.target.value)
    }


    const [text, setText] = useState('');
    // text= "new text";   wrong way to change the state
    // setText("new text"); correct way to change state;
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?"white":"#042743"}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text}
                        onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?"#042743":"white" , color:props.mode==='dark'?"white":"#042743"}} id="myBox" rows="8"></textarea>

                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleSenClick}>Sentance Case</button>
                <button className='btn btn-primary mx-1' onClick={handleCapClick}>Capitalized Case</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraClick}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container" style={{color:props.mode==='dark'?"white":"#042743"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above box to preview it here"}</p>
            </div>
        </>
    )
}
