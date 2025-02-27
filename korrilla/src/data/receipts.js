const receipt1 = {
    person: "Ben",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Korchata",
      cost: 22
    },
    paid: false
  };

  const receipt2 = {
    person: "Michael",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19
    },
    paid: false
  };

  const receipt3 = {
    person: "John",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20
    },
    paid: true
  };

  const receiptsData = [receipt1, receipt2, receipt3];

  export default receiptsData;