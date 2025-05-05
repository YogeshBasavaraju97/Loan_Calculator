

export async function fetchExchangeRates(base = "USD") {
  const response = await fetch(process.env.ExchangeURL + `${base}`);
  const data = await response.json();
  return data.rates;
}