import { useMemo } from "react";
import { currencies } from "../Common/SupportedCurrencies";
export default function InputBox({
  label,
  currentAmount,
  setAmountChange,
  setCurrency,
  inputStatus,
}) {
  return (
    <div className="flex w-full justify-between">
      <div className="w-fit">
        <label className="text-gray-300" htmlFor="label">
          {label}
        </label>

        <input
          type="number"
          className="input outline-none my-5 block"
          min={0}
          value={currentAmount}
          disabled={inputStatus}
          onChange={(event) => {
            setAmountChange(Number(event.target.value));
          }}
        />
      </div>

      <div className="">
        <label className="text-gray-300" htmlFor="">
          Currency Type
        </label>
        <select
          onChange={(event) => {
            setCurrency(event.target.value);
          }}
          className="block my-5"
          name=""
          id="">
          <option value="">Select Currency</option>
          {currencies.map((currency) => {
            return <option value={currency.code}>{currency.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
