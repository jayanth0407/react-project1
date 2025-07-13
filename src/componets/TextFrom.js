import React,{useState} from "react";
export default function TextFrom (props){
    const handleclick = ()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        settext(event.target.value)
        
    }
    const [text,settext]=useState("Enter Text Here fast")
    return(
        <div>
<h1>{props.heading}</h1>
<div className="mb-3"> 
  <label htmlFor="mybox" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleclick}>
Change into Uppercase
</button>
        </div>
    ) 
}