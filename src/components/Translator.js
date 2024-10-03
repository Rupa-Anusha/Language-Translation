import React, { useEffect, useState} from 'react'
import axios from 'axios';
//import {text} from './Textarea1'


export default function Translator({txt,mode,showAlert}) {
  const [country_code,setCode]=useState([])
  const [to,setTo]=useState();
  const [translatedtxt,setTranslated]=useState();
  const HandleTranslate=async () => {
    const id = {
      method: 'POST',
      url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'accept':'application/json',
        'x-rapidapi-key': '22f50e7030msh28246cbf8a0b1d2p18494ajsnf523d8424a46',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        q:`${txt}`,
        source: 'en',
        target: `${to}`
      }
    };
    const response = await axios.request(id);
    console.log(response.data.data.translations.translatedText);
    setTranslated(response.data.data.translations.translatedText);
    // catch (error) {
    //   console.error(error);
    // }
    showAlert('Language is translated','success')
  };
  useEffect(() => {
    axios.get(' https://deep-translate1.p.rapidapi.com/language/translate/v2/languages',{
     headers:{'x-rapidapi-host': 'deep-translate1.p.rapidapi.com','x-rapidapi-key': '22f50e7030msh28246cbf8a0b1d2p18494ajsnf523d8424a46'}
    }).then(res=>{
     //console.log(res.data.languages);
     setCode(res.data.languages);
    })
   }, []);
    //  curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  //   curl -X 'GET' \
  // 'https://libretranslate.com/languages' \
  // -H 'accept: application/json'
  return (
    <>
    <div className='container'>
      <h2 for="inputState" className="form-label" style={{color:mode==='light'?'black':'white'}}>Language</h2>
      <select id="inputState" className="form-select my-3" style={{backgroundColor:mode==='light'?'white':'#eaf0ee', width:250}} onChange={(e)=>setTo(e.target.value)}>
          {country_code.map(opt=><option value={opt.language}>{opt.name}</option>)} 
      </select>
      <button className='btn btn-info mt-2' onClick={HandleTranslate}>Translate</button>
      <h4 className='pt-2 my-3' style={{color:mode==='light'?'black':'white'}}>{translatedtxt}</h4>
    </div> 
    </>
  )
}
