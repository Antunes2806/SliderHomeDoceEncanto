import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Details from "../Components/Details";
import Produtos from "../pages/Produtos";
import DonutsMorango from "../Produtos/DonutsMorango";
import DonutsChocolate from "../Produtos/DonutsChocolate";
import DonutsPacoca from "../Produtos/DonutsPacoca";
import SorveteCookies from "../Produtos/SorveteCookies";
import SorveteMorango from "../Produtos/SorveteMorango";
import SorvetePistache from "../Produtos/SorvetePistache";
import CupcakeDocedeLeite from "../Produtos/CupcakeDocedeLeite";
import CupcakeMorango from "../Produtos/CupcakeMorango";
import CupcakeChocolate from "../Produtos/CupcakeChocolate";
import CupcakeFV from "../Produtos/CupcakeFV";
import SorveteFlocos from "../Produtos/SorveteFlocos";
import DonutsCookies from "../Produtos/DonutsCookies";
import CookiesTrad from "../Produtos/CookiesTrad";
import CookiesBranco from "../Produtos/CookiesBranco";
import CookiesChoc from "../Produtos/CookiesChoc";
import Cookiesduo from "../Produtos/Cookiesduo";
import Carrinho from "../pages/Carrinho";
import Favoritos from "../pages/Favoritos";
import BrigNN from "../Produtos/BrigNN";
import Brigtrad from "../Produtos/BrigTrad";
import Briguva from "../Produtos/Briguva";
import Brigchurros from "../Produtos/Brigchurros";

const Stack = createNativeStackNavigator();

export default function RoutesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DonutsMorango"
        component={DonutsMorango}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DonutsChocolate"
        component={DonutsChocolate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DonutsPacoca"
        component={DonutsPacoca}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DonutsCookies"
        component={DonutsCookies}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SorveteCookies"
        component={SorveteCookies}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SorveteMorango"
        component={SorveteMorango}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SorvetePistache"
        component={SorvetePistache}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SorveteFlocos"
        component={SorveteFlocos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CupcakeMorango"
        component={CupcakeMorango}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CupcakeChocolate"
        component={CupcakeChocolate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CupcakeDocedeLeite"
        component={CupcakeDocedeLeite}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CupcakeFV"
        component={CupcakeFV}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Briguva"
        component={Briguva}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BrigNN"
        component={BrigNN}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Brigtrad"
        component={Brigtrad}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Brigchurros"
        component={Brigchurros}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CookiesTrad"
        component={CookiesTrad}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CookiesBranco"
        component={CookiesBranco}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CookiesChoc"
        component={CookiesChoc}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cookiesduo"
        component={Cookiesduo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
