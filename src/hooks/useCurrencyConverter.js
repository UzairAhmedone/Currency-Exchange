import { stringify } from "postcss";
import { GetChangeCurrencyUrl, CurrencyDTO } from "../Common/constants";
import { useEffect, useState, useMemo } from "react";

export default function useCurrencyConverter(currencyRequest) {
  var [currencyInfo, setCurrencyInfo] = useState(currencyRequest);
  if (
    currencyRequest?.fromCurrency ||
    currencyRequest?.toCurrency ||
    currencyRequest?.fromAmount == 0
  ) {
    return [null, setCurrency];
  }
  let fromCurrency = currencyRequest?.fromCurrency ?? "";
  let toCurrency = currencyRequest?.toCurrency ?? "";
  async function setCurrency(currencyRequest) {
    if (currencyRequest != null) {
      let fromAmount = currencyRequest.fromAmount;
      let fromCurrency = currencyRequest.fromCurrency;
      let toCurrency = currencyRequest.toCurrency;
      var url = GetChangeCurrencyUrl(fromCurrency);
      let conversion = await convert(url, toCurrency);
      let toAmount = conversion * fromAmount;
      let newCurrencyInfo = new CurrencyDTO(
        fromAmount,
        toAmount,
        fromCurrency,
        toCurrency,
      );
      setCurrencyInfo(newCurrencyInfo);
    }
  }

  useEffect(() => {
    setCurrency(currencyInfo);
  }, [currencyInfo?.fromCurrency, currencyInfo?.toCurrency]);

  const convert = async (url, toCurrency) => {
    try {
      let currencyConverterApiResponse = "";
      await fetch(url)
        .then(async (r) => {
          let re = await r.json();
          console.log(re);
          currencyConverterApiResponse = re;
        })
        .catch((err) => {
          console.log(err);
          throw "some thing while fetching the reponse";
        });
      //JSON.parse(currencyConverterApiResponse.body);
      if (currencyConverterApiResponse.result) {
        return currencyConverterApiResponse.conversion_rates[toCurrency];
      }
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  return [currencyInfo, setCurrency];
}
