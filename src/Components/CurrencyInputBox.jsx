export default function InputBox({ label,amount ,currencyList }) {
  return (
    <div className="flex w-full justify-between">
      <div className="w-fit">
        <label className="text-gray-300" htmlFor="label">
          {label}
        </label>
        <span class="input outline-none my-5 block" onKeyUp={(event)=>{amount=event.target.value}} role="textbox" contentEditable>0</span>
        {/* <input className="block currency-input outline-none my-5" type="Number" onChange={(event)=> amount=event.target.value} defaultValue={Number(amount)} /> */}
      </div>

      <div className="">
        <label className="text-gray-300" htmlFor="">
          Currency Type
        </label>
        <select className="block my-5" name="" id="">
          {currencyList.forEach((currency) => {
            <option value={currency.value}>{currency.Name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
