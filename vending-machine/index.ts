const prompts = require("prompts");
type Prod = {
  title: string;
  price: number;
};

console.log("Vending Machine");

const products: Prod[] = [
  {
    title: "Coffe(L)",
    price: 190,
  },
  {
    title: "Coffe(XL)",
    price: 280,
  },
  {
    title: "Hot Chocolate",
    price: 175,
  },
  {
    title: "Tea",
    price: 145,
  },
];

const coins: number[] = [200, 100, 50, 20, 10, 5, 2, 1];

(async () => {
  const response = await prompts({
    type: "select",
    name: "product",
    message: "Please select your product:",
    choices: products,
  });

  const selectedProduct = products[response.product];
  let wallet: number = 0;

  let reminder: number = wallet - selectedProduct.price;
  console.log("Product price: " + selectedProduct.price + "$");
  while (reminder < 0) {
    const coin = await prompts({
      type: "number",
      name: "value",
      message: "Insert Coin",
      validate: (value: number) =>
        coins.includes(value) ? (reminder += value) : `Incorrect Coin`,
    });
  }
  console.log("Vending Machine Needs To Give Back " + reminder + "$");
  coins.forEach((coin) => {
    if (reminder <= 0) {
      return;
    }
    const times = Math.floor(reminder / coin);
    reminder -= coin * times;
    if (times > 0) {
      console.log("Give back " + coin + " $ " + times + " Time");
    }
  });
})();
