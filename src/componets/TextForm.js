import React, {useState} from "react";


export default function TextForm(props) {
  const [text , settext] = useState('');
  const handleUpclick=(event)=>{
    console.log('Upper case is clicked');
    let newtext= text.toUpperCase();
    event.preventDefault()
    settext(newtext)
  }
  const handleClearclick=(event)=>{
    console.log('Clear is clicked');
    let newtext= text.Clear();
    event.preventDefault()
    settext(newtext)
  }
  const handleLowclick=(event)=>{
    console.log('Lower case is clicked');
    let newtext= text.toLowerCase();
    event.preventDefault()
    settext(newtext)
  }
  const handleOnChange=(event)=>{
    console.log('On change');
    
    settext(event.target.value)    
  }
  return (
    <>
    <div>
      <form>
      
        <div className="container">
            <h1 style={{color: "black"}}>{props.heading}</h1>
    
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert UPPER CASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert Lower Case</button>
        <button className="btn btn-primary mx-3 " onClick={handleClearclick}>Clear</button>
      </form>
    </div>
    <div className="container my-5">
      <h2 style={{color: "black"}}>Your Text Summary</h2>
      <p style={{color: "black"}}>{text.split(" ").length} words, {text.length} characters </p>
      <p style={{color: "black"}}>{0.008*text.split(" ").length} Minutes to Read</p>
      <h3 style={{color: "black"}}>Preview</h3>
      <p style={{color: "black"}}>{text}</p>
    </div>
    </>
  );
}
