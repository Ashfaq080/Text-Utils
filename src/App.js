// import logo from './logo.svg';

import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm'; 
import React, { useState } from 'react';
import Alert from './component/Alert';

 
function App() {
  const [mode, setMode]=useState('light'); //Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';      
      showAlert("Light has been enabled","success");

    }
  }
  return (
    <>
      {/* this is come from componemt and Navbar.js using this props we can edit our navBar */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert= {alert}/> 
      {/* <Navbar/> */}
      <div className="container">
        <TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>
        {/* <About/>  */}

      </div>
    </>


  );
}

export default App;
