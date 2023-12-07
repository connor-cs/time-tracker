import { useState } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
import Sidebar from "./components/Sidebar";


function App() {
  const [time, setTime] = useState('Weekly')
  return (
    <>
      <div className="main">
        <Sidebar />
        <CardsContainer time={time}/>
      </div>
    </>
  );
}

export default App;
