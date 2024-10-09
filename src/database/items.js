import { styles } from "../styles/Styles";

export const COLOURS = {
  white: "#ffffff",
  rosa: "#ed8e8e",
  black: "#00000",
  ligthGray: "B384B6",
  accent: "#ffc231",
  accentRed: "#f85d2e",
  accentPink: "f96165",
};

export const Categorias = [
  {
    name: "Donuts",
    image: require("./images/pgdntcat.png"),
    items: [
      {
        id: "0",
        name: "DONUTS DE MORANGO",
        weight: 120,
        rating: "5.0",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/dnt.png"),
        size: 'Large 8"',
        crust: "Thick Crust",
        delivery: 25,
        routeName: "DonutsMorango",
        valor: "14,50",
      },
      {
        id: "1",
        name: "DONUTS DE CHOCOLATE",
        weight: 150,
        rating: "4.5",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/dntchoc.png"),
        size: 'Large 12"',
        crust: "Thick Crust",
        delivery: 20,
        routeName: "DonutsChocolate",
        valor: "14,50",
      },
      {
        id: "2",
        name: "DONUTS DE PAÇOCA",
        weight: 250,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/dntpacoca.png"),
        size: 'Large 10"',
        crust: "Thick Crust",
        delivery: 35,
        routeName: "DonutsPacoca",
        valor: "14,50",
      },
      {
        id: "3",
        name: "DONUTS DE COOKIES",
        weight: 250,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/dntck.png"),
        size: 'Large 10"',
        crust: "Thick Crust",
        delivery: 35,
        routeName: "DonutsCookies",
        valor: "14,50",
      },
    ],
  },

  {
    name: "Sorvete",
    image: require("./images/svtcat.png"),
    items: [
      {
        id: "4",
        name: "SORVETE DE COOKIE",
        weight: 250,
        rating: "5.8",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/svtcookie.png"),
        size: "Large 14",
        crust: "Thin Crust",
        delivery: 30,
        routeName: "SorveteCookies",
        valor: "9,99",
      },

      {
        id: "5",
        name: "SORVETE DE MORANGO",
        weight: 300,
        rating: "4.5",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/svtmor.png"),
        size: "Large 16",
        crust: "Thin Cheese",
        delivery: 25,
        routeName: "SorveteMorango",
        valor: "9,99",
      },

      {
        id: "6",
        name: "SORVETE DE PISTACHE",
        weight: 350,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/svtpistache.png"),
        size: "Large 15",
        crust: "Thin Crust",
        delivery: 45,
        routeName: "SorvetePistache",
        valor: "9,99",
      },

      {
        id: "7",
        name: "SORVETE DE FLOCOS",
        weight: 350,
        rating: "4.2",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/svtflocos.png"),
        size: "Large 15",
        crust: "Thin Crust",
        delivery: 45,
        routeName: "SorveteFlocos",
        valor: "9,99",
      },
    ],
  },

  {
    name: "CupCake",
    image: require("./images/cccat.png"),
    items: [
      {
        id: "8",
        name: "CUPCAKE DE MORANGO",
        weight: 200,
        rating: "5.0",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/cupcakemor.png"),
        size: "Medium Glass",
        crust: "Small Ice",
        delivery: 10,
        routeName: "CupcakeMorango",
        valor: "8,50",
      },

      {
        id: "9",
        name: "CUPCAKE DE CHOCOLATE",
        weight: 500,
        rating: "4.0",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/cupcakechoc.png"),
        size: "Large Glass",
        crust: "Large Ice",
        delivery: 8,
        routeName: "CupcakeChocolate",
        valor: "8,50",
      },

      {
        id: "10",
        name: "CUPCAKE DE DOCE DE LEITE",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/cupcakedl.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        routeName: "CupcakeDocedeLeite",
        valor: "8,50",
      },

      {
        id: "11",
        name: "CUPCAKE DE FRUTAS VERMELHAS",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/cccereja.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        routeName: "CupcakeFV",
        valor: "8,50",
      },
    ],
  },

  {
    name: "Brigadeiro",
    image: require("./images/brigadeiro.png"),
    items: [
      {
        id: "12",
        name: "BRIGADEIRO GOURMET",
        weight: 200,
        rating: "5.0",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/brigtrad.png"),
        size: "Medium Glass",
        crust: "Small Ice",
        delivery: 10,
        routeName: "Brigtrad",
        valor: "4,99",
      },

      {
        id: "13",
        name: "BRIGADEIRO NINHO COM NUTELA",
        weight: 500,
        rating: "4.0",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/brigNN.png"),
        size: "Large Glass",
        crust: "Large Ice",
        delivery: 8,
        routeName: "BrigNN",
        valor: "4,99",
      },

      {
        id: "14",
        name: "BRIGADEIRO SURPRESA DE UVA",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/briguva.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        routeName: "Briguva",
        valor: "4,99",
      },

      {
        id: "15",
        name: "BRIGADEIRO DE CHURROS",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/brigchurros.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        routeName: "Brigchurros",
        valor: "4,99",
      },
    ],
  },

  {
    name: "Cookie",
    image: require("./images/ckcat.png"),
    items: [
      {
        id: "16",
        name: "COOKIE TRADICIONAL",
        weight: 200,
        rating: "5.0",
        price: 299,
        isTopOfTheWeek: true,
        image: require("../assets/image/cktrad.png"),
        size: "Medium Glass",
        crust: "Small Ice",
        delivery: 10,
        routeName: "CookiesTrad",
        valor: "18,00",
      },

      {
        id: "17",
        name: "COOKIE CHOCOLATE BRANCO",
        weight: 500,
        rating: "4.0",
        price: 199,
        isTopOfTheWeek: true,
        image: require("../assets/image/ckbranco.png"),
        size: "Large Glass",
        crust: "Large Ice",
        delivery: 8,
        routeName: "CookiesBranco",
        valor: "18,00",
      },

      {
        id: "17",
        name: "COOKIE CHOCOLATE",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/ckchoc.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        routeName: "CookiesChoc",
        valor: "18,00",
      },

      {
        id: "18",
        name: "COOKIE DUO",
        weight: 150,
        rating: "4.2",
        price: 99,
        isTopOfTheWeek: true,
        image: require("../assets/image/ckduo.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        routeName: "Cookiesduo",
        valor: "18,00",
      },
    ],
  },
];
