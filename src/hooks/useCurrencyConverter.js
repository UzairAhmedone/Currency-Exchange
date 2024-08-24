import { GetChangeCurrencyUrl } from "../Common/constants";
import { useEffect } from "react";
export default function useCurrencyConverter(event) {
  let currency = "USD";
    useEffect(() => {
        var url = GetChangeCurrencyUrl(currency);
        fetch(url).then((r) => console.log(r));
    }, []);
  return null;
}
