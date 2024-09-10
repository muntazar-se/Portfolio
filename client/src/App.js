import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";


function App() {
  const [showLoading, SetShowLoading] = useState(false)
  return (
   <BrowserRouter>
  {showLoading? <Loader/> : null}
   <Routes>
    
    <Route path="/" element={<Home/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
