import "./App.css";
// import About from './component/About';
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import React, { useState } from "react";
import Alert from "./component/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggelmode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("light Mode has been enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Dark Mode has been enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };
  return (
    <>
      <Navbar title="Textutil" mode={mode} toggelmode={toggelmode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          showAlert={showalert}
          heading="Enter the text to analyze"
          mode={mode}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
