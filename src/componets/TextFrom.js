import React,{useState} from "react";
export default function TextFrom (props){
    const handleclick = ()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showAlert('Convert into Uppercase','success')
    }
    const handlelower= ()=>{
        let low=text.toLocaleLowerCase();
        settext(low)
        props.showAlert('Convert into Lowercase','success')
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        settext(event.target.value)

        
    }
    const Clear =()=>{
        let clear=''
        settext(clear)
        props.showAlert('Convert into clear','success')
    }
    const [text,settext]=useState("")
    return(
    <>
        <div className="container" style={{color: props.mode==="dark"?"white":"#232745"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <label htmlFor="mybox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white" ,color: props.mode==="dark"?"white":"#232745"}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length==0} className="btn btn-danger mx-2 my-3" onClick={handleclick}>
            Change into Uppercase
            </button>
            <button disabled={text.length==0} className="btn btn-danger mx-2 my-3" onClick={handlelower}>
            Change into LowerCase
            </button>
            <button disabled={text.length==0} className="btn btn-danger mx-2 my-3 " onClick={Clear}> Clear Text</button>
                    </div>
            <div className="container2 my-3" style={{color: props.mode==="dark"?"white":"#232745"}}>
                <h1>Your Summmer</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} charaters </p>
                <p>{0.08 * text.split(" ").filter((element)=>{return element.length!=0}).length}Mintues To Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something else'}</p>

        </div>
    </>
    ) 
}