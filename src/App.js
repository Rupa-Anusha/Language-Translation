// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Textarea1 from './components/Textarea1';
import Translator from './components/Translator';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from 'react-router-dom';
function App() {
  const [txt,setInptxt]=useState('');
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },900)
  }
  const toggle=()=>{
    if(mode==='light'){
      document.body.style.backgroundColor='#0a4157';
      setMode('dark');
      showAlert('You have changed to dark theme','success')
    }
    else{
      document.body.style.backgroundColor='white';
      setMode('light');
      showAlert('You have changed to light theme','success')
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <Textarea1 heading1="Enter text to analyse"  txt={txt} setInptxt={setInptxt} mode={mode} showAlert={showAlert}/>
    <Translator txt={txt} mode={mode} showAlert={showAlert}/>
    {/* <Routes>
      <Route exact path='/' element={<Textarea1 heading1="Enter text to analyse"  txt={txt} setInptxt={setInptxt} mode={mode} showAlert={showAlert}/>}/>
      <Route exact path='/translation' element={<Translator txt={txt} mode={mode} showAlert={showAlert}/>}/>
      <Route exact path='/about' element={<About mode={mode}/>}/>
    </Routes> */}

    
    
    {/* </Router> */}
</>
  );
}

export default App;
