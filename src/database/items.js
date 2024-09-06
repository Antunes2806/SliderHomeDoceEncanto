export const COLOURS = {
  white: "#ffffff",
  black: "#00000",
  ligthGray: "B384B6",
  accent: "#ffc231",
  accentRed: "#f85d2e",
  accentPink: "f96165",
};

export const Categorias = [
  {
    name: "Burger",
    image: require("./images/burger.png"),
    items: [
      {
        name: "Pepperoni Pizza",
        weight: 250,
        rating: "5.8",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../database/images/pizza/pepperonipizza.png"),
        size: "Large 14",
        crust: "Thin Crust",
        delivery: 30,
      },

      {
        name: "Plain cheese Pizza",
        weight: 300,
        rating: "4.5",
        price: 299,
        isTopOfTheWeek: false,
        image: require("../database/images/pizza/plaincheesepizza.png"),
        size: "Large 16",
        crust: "Thin Cheese",
        delivery: 25,
      },

      {
        name: "Mexican Green Wave",
        weight: 350,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../database/images/pizza/mexicangreenwave.png"),
        size: "Large 15",
        crust: "Thin Crust",
        delivery: 45,
      },
    ],
  },

  {
    name: "Pizza",
    image: require("./images/pizza.png"),
    items: [
      {
        name: "Pepperoni Pizza",
        weight: 250,
        rating: "5.8",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../database/images/pizza/pepperonipizza.png"),
        size: "Large 14",
        crust: "Thin Crust",
        delivery: 30,
      },

      {
        name: "Plain cheese Pizza",
        weight: 300,
        rating: "4.5",
        price: 299,
        isTopOfTheWeek: false,
        image: require("../database/images/pizza/plaincheesepizza.png"),
        size: "Large 16",
        crust: "Thin Cheese",
        delivery: 25,
      },

      {
        name: "Mexican Green Wave",
        weight: 350,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../database/images/pizza/mexicangreenwave.png"),
        size: "Large 15",
        crust: "Thin Crust",
        delivery: 45,
      },
    ],
  },

  {
    name: "Soft Drinks",
    image: require("./images/softdrinks.png"),
    items: [
      {
        name: " Coca Cola",
        weight: 200,
        rating: "5.0",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../database/images/softdrinks/cocacola.png"),
        size: "Medium Glass",
        crust: "Small Ice",
        delivery: 10,
      },

      {
        name: "Orange Juice",
        weight: 500,
        rating: "4.0",
        price: 199,
        isTopOfTheWeek: false,
        image: require("../database/images/softdrinks/orange.png"),
        size: "Large Glass",
        crust: "Large Ice",
        delivery: 8,
      },

      {
        name: "Mango Juice",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: false,
        image: require("../database/images/softdrinks/cocacola.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
      },
    ],
  },
];
