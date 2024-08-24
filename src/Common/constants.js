const EXCHANGE_CURRENCY_KEY="a7beda527662413531f3d700"

export function GetChangeCurrencyUrl(currency){
    return `https://v6.exchangerate-api.com/v6/${EXCHANGE_CURRENCY_KEY}/latest/${currency}`
}
