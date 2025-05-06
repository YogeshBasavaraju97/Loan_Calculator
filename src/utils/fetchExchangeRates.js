


export async function fetchExchangeRates(base = "USD") {
  const url = import.meta.env.VITE_EXCHANGE_URL + base;
  const response = await fetch(url);
  const data = await response.json();
  return data?.conversion_rates;
}
