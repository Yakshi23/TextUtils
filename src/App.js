import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert(" Dark Mode enable", "Success:")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" Light Mode enable", "Success:")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/home"
             element= {<TextForm heading="Enter text to analyze" mode={mode} />}>
            </Route>
            <Route exact path="/about" 
              element={<About mode={mode}/>}></Route>
          </Routes>
        </div>
      </Router>
      </>
  );
}

export default App;
