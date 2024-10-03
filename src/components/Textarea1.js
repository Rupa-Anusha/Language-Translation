import React from 'react';

export default function Textarea1({heading1,txt,setInptxt,mode,showAlert}) {
  
    const handleOnChange=(event)=>{
        setInptxt(event.target.value);
   }
   const handleUp=()=>{
    let newtxt=txt.toUpperCase();
    setInptxt(newtxt);
    showAlert('Text has been changed to upper case','success');
   }
   const handleLo=()=>{
    let newtxt=txt.toLowerCase();
    setInptxt(newtxt);
    showAlert('Text has been changed to lower case','success');
   }
   const handleclear=()=>{
    setInptxt('');
    showAlert('Text has been cleared','primary');
   }
   const noofWords=(txt)=>{
       return txt.trim().split(/\S+/).length - 1;
   }
  
  return (
    <>
      <div className="container pt-5">
        <h2 style={{color:mode==='light'?'black':'white'}}>{heading1}</h2>
        <div className='col'>
           <textarea className="form-control" value={txt} onChange={handleOnChange} style={{backgroundColor:mode==='light'?'white':'#eaf0ee'}} id="txt1" rows='8' ></textarea>
        </div>
        <button type="button" className="btn btn-info mt-3 mx-1 " onClick={handleUp}>Change to Uppercase</button>
        <button type="button" className="btn btn-info mt-3 mx-1"onClick={handleLo}>Change to Lowercase</button>
        <button type="button" className="btn btn-info mt-3 mx-1"onClick={handleclear}>Clear Text</button>
        <p className='text pt-2' style={{color:mode==='light'?'black':'white'}}>{noofWords(txt)} words and {txt.length} characters </p>
        </div>
        {/* <h5>{props.heading2}</h5> */}
        
    </>
  )
}