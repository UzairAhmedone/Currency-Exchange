const EXCHANGE_CURRENCY_KEY="a7beda527662413531f3d700"

export function GetChangeCurrencyUrl(currency){
    return `https://v6.exchangerate-api.com/v6/${EXCHANGE_CURRENCY_KEY}/latest/${currency}`
}

export class CurrencyDTO {
    constructor(fromAmount, toAmmount, fromCurrency, toCurrency) {
      this.fromAmount = fromAmount;
      this.toAmount= toAmmount;
      this.fromCurrency = fromCurrency;
      this.toCurrency = toCurrency;
    }
  }

export class Currency {
    constructor(code, name, country) {
        this.code = code;
        this.name = name;
        this.country = country;
    }
}

