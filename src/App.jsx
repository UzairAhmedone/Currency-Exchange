import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputBox from "./Components/CurrencyInputBox";
import useCurrencyConverter from "./hooks/useCurrencyConverter";
import "./App.css";

function App() {
  var data=useCurrencyConverter()
  return (
    <div className="bg-slate-100 rounded p-6">
      <h1 className="text-5xl text-gray-500 font-medium m-5"> Currency Calculator</h1>
      <div className="wrapper w-full">
        <InputBox label={"From"} amount={0} currencyList={[]} />
        <InputBox label={"To"} amount={0} currencyList={[]} />
        <button onClick={()=> setcurr} className="bg-gray-500 rounded text-white text-2xl w-full p-2">Convert To </button>
      </div>
    </div>
  );
}

export default App;
