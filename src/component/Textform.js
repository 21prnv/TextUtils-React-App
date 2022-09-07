import React, {useState} from 'react'
// import PropTypes from 'prop-types'0


export default function Textform(props) {
 const handleUpClick = ()=>{
  // console.log("uppercase was clicked");
  let newText = text.toUpperCase();
  setText(newText)
  props.showalert("Text is now uppercase", "success");
 }
 const handleLoClick = ()=>{
  // console.log("uppercase was clicked");
  let newText = text.toLowerCase();
  setText(newText)
  props.showalert("Text is now lowercase", "success");
 }
 const handleClearClick = ()=>{
  // console.log("uppercase was clicked");
  let newText = '';
  setText(newText)
  props.showalert("Text is now clered", "success");
 }
 const handleCopy = ()=> {
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(text.value);
  props.showalert("Text is now copied", "success");
 }

 const handleOnChange = (event) =>{
  // console.log("on change");
  setText(event.target.value)
 }
 const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:  props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert To Lowerercase</button>
        <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-4"  onClick={handleCopy}>Copy to Clipboard</button>

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words And {text.length} Charcters</p>
      <p>{0.008 * text.split(" ").length} Minutes For Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:""}</p>
      

    </div>
    </>
  )
  
}
