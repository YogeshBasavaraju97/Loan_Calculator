



export async function fetchExchangeRates(base = "USD") {
  const url = process.env.ExchangeURL + base;
  const response = await fetch(url);
  const data = await response.json();
  return data.rates;
}
