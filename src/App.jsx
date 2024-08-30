import { useState, useRef, useCallback, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputBox from "./Components/CurrencyInputBox";
import useCurrencyConverter from "./hooks/useCurrencyConverter";
import { CurrencyDTO } from "./Common/constants";
import "./App.css";

function App() {
  //  var defaultCurrencyValues=new CurrencyDTO(0,0,"USD","USD")
  let [currencyInfo, setConversion] = useCurrencyConverter(null);

  //let fromAmount = currencyInfo.fromAmount;
  // let toAmount = currencyInfo.toAmount;
  // let fromCurrency = currencyInfo.fromCurrency;
  // let toCurrency = currencyInfo.toCurrency;

  // let setFromCurrency = useCallback((currentCurrency) => {
  //   fromCurrency = currentCurrency;
  // }, []);
  // let setToCurrency = useCallback((currentCurrency) => {
  //   toCurrency = currentCurrency;
  // }, []);

  // let setFromAmount = useCallback((currentAmount) => {
  //   fromAmount = currentAmount;
  // }, []);

  // let setToAmount = useCallback((currentAmount) => {
  //   toAmount = currentAmount;
  // }, []);

  //let fromInputBox =useRef(null);
  let [fromAmount, setFromAmount] = useState(0);
  let [fromCurrency, setFromCurrency] = useState(0);
  let [toCurrency, setToCurrency] = useState(0);
  let toAmount = currencyInfo?.toAmount ?? 0;

  let fromInputBox = useMemo(() => {
    return (
      <InputBox
        label={"From"}
        setCurrency={setFromCurrency}
        setAmountChange={setFromAmount}
        currentAmount={fromAmount}
        inputStatus={false}
      />
    );
  }, [fromAmount, fromCurrency]);
  let toInputBox = useMemo(() => {
    return (
      <InputBox
        label={"To"}
        setCurrency={setToCurrency}
        setAmountChange={null}
        currentAmount={toAmount}
        inputStatus={true}
      />
    );
  }, [toAmount, toCurrency]);
  return (
    <div className="bg-slate-100 rounded p-6">
      <h1 className="text-5xl text-gray-500 font-medium m-5">
        {" "}
        Currency Calculator
      </h1>
      <div className="wrapper w-full">
        {fromInputBox}
        {toInputBox}
        <button
          onClick={() =>
            setConversion(
              new CurrencyDTO(fromAmount, null, fromCurrency, toCurrency),
            )
          }
          className="bg-gray-500 rounded text-white text-2xl w-full p-2">
          Convert To{" "}
        </button>
      </div>
    </div>
  );
}
export default App;
