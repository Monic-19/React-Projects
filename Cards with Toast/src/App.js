import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import data from "./data";
import Toast from "./Components/Toast";


function App() {

  const [text,setData] = useState(data);

  return (
    <div>
      <Navbar></Navbar>
      <Cards text={text}></Cards>
    </div>
  );
}

export default App;
