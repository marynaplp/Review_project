import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Unsuccess from "./Unsucess.js";
//import success from "./success.js";
import Home from "./Home.js";
import Email_success  from "./Email_success";


function App() {
  return (

      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unsuccess" element={ <Unsuccess />}/>
          <Route path="/email_success" element={ <Email_success />}/>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
