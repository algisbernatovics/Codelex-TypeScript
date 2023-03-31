import fetch from "node-fetch";
import prompts from "prompts";

type ExchangeRate = {
  name: string;
  symbol: string;
  value: number;
};

type ExchangeRateResponse = {
  rates: ExchangeRate[];
};

const fetchExchangeRates = async (): Promise<ExchangeRate[]> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/exchange_rates"
  );
  const data = (await response.json()) as ExchangeRateResponse;

  const exchangeRates: ExchangeRate[] = [];

  Object.entries(data.rates).forEach((exchangeRate) => {
    exchangeRates.push({
      symbol: exchangeRate[0],
      name: exchangeRate[1].name,
      value: exchangeRate[1].value,
    });
  });
  return exchangeRates;
};

const app = async () => {
  const exchangeRates: ExchangeRate[] = await fetchExchangeRates();

  const response = await prompts([
    {
      type: "select",
      name: "fromCurrency",
      message: `Select Currency to convert From : `,
      choices: exchangeRates.map((exchangeRate: ExchangeRate) => {
        return {
          title: exchangeRate.name,
          value: exchangeRate,
        };
      }),
    },
    {
      type: "number",
      name: "amount",
      message: `How much : `,
    },
    {
      type: "select",
      name: "toCurrency",
      message: `Select Currency to Convert To": `,
      choices: exchangeRates.map((exchangeRate: ExchangeRate) => {
        return {
          title: exchangeRate.name,
          value: exchangeRate,
        };
      }),
    },
  ]);

  const btcValue = response.amount / response.fromCurrency.value;
  const endCurrencyValue = response.toCurrency.value * btcValue;
  console.log(
    `FROM (${response.fromCurrency.symbol}) with amount of ${response.amount} we got ${btcValue} BTC that is equal to ${response.toCurrency.symbol} with amount ${endCurrencyValue}.`
  );
};
app();
