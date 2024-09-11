import { styles } from "../styles/Styles";

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
    name: "Donuts",
    image: require("./images/burger.png"),
    items: [
      {
        name: "Donuts de Morango",
        weight: 120,
        rating: "5.0",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/dnt.png"),
        size: 'Large 8"',
        crust: "Thick Crust",
        delivery: 25,
        routeName: "DonutsMorango",
      },
      {
        name: "Donuts de Chocolate",
        weight: 150,
        rating: "4.5",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/dntchoc.png"),
        size: 'Large 12"',
        crust: "Thick Crust",
        delivery: 20,
        routeName: "DonutsChocolate",
      },
      {
        name: "Donuts de Paçoca",
        weight: 250,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/dntpacoca.png"),
        size: 'Large 10"',
        crust: "Thick Crust",
        delivery: 35,
        routeName: "DonutsPacoca",
      },
    ],
  },

  {
    name: "Sorvete",
    image: require("./images/pizza.png"),
    items: [
      {
        name: "Sorvete de cookies",
        weight: 250,
        rating: "5.8",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/svtcookie.png"),
        size: "Large 14",
        crust: "Thin Crust",
        delivery: 30,
        routeName: "SorveteCookies",
      },

      {
        name: "Sorvete de morango",
        weight: 300,
        rating: "4.5",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/svtmor.png"),
        size: "Large 16",
        crust: "Thin Cheese",
        delivery: 25,
        routeName: "SorveteMorango",
      },

      {
        name: "Sorvete de Pistache",
        weight: 350,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/svtpistache.png"),
        size: "Large 15",
        crust: "Thin Crust",
        delivery: 45,
        routeName: "SorvetePistache",
      },
    ],
  },

  {
    name: "CupCakes",
    image: require("./images/softdrinks.png"),
    items: [
      {
        name: "Cupcake de morango",
        weight: 200,
        rating: "5.0",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/cupcakemor.png"),
        size: "Medium Glass",
        crust: "Small Ice",
        delivery: 10,
        routeName: "CupcakeChocolate",
      },

      {
        name: "Cupcake de chocolate",
        weight: 500,
        rating: "4.0",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/cupcakechoc.png"),
        size: "Large Glass",
        crust: "Large Ice",
        delivery: 8,
        routeName: "CupcakeCookies",
      },

      {
        name: "Cupcake de Doce de Leite",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/cupcakedl.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        routeName: "CupcakeMorango",
      },
    ],
  },
];
