import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import About from './componets/About';
import { useState } from 'react';
import TextFrom from './componets/TextFrom';
import Aleart from './componets/Aleart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom"
// import { useFormState } from 'react-dom';


function App() {
  const[mode,setmode]=useState('light')
  
  const[alert,setAlert]=useState(false)
  

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(false)
        
      },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#232745'
      showAlert("Dark mode is enable","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enable","success")
    }
  }
// this is new

// stop

  return (
   <> 
    <Router>
<Navbar titile="Texutils" Home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
<Aleart alert={alert}/>
<div className='container my-3 ' >

  <Switch>
    <Route path='/About'>
    <About/>
    </Route>
    <Route path='/'>
    <TextFrom showAlert={showAlert} heading="Enter a Word" mode={mode} />
    </Route>
  </Switch>
  
  <About/>

</div>
</Router>

   </>
  );
}

export default App;
