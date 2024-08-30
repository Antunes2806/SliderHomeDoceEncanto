import { StyleSheet } from "react-native";

export const stylesSobre = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    backgroundColor: "lightpink",
    width: "100%",
    height: 125,
    justifyContent: "flex-end",
  },

  logo: {
    width: "100%",
    height: "80%",
  },

  cards: {
    flex: 1,
    marginBottom: 60,
  },

  card: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    alignItems: "center",
  },

  imgcupcake: {
    width: "70%",
    height: 150,
  },

  imgdonuts: {
    width: "65%",
    height: 150,
  },

  imgcookie: {
    width: "40%",
    height: 100,
  },

  imgsorvete: {
    width: "40%",
    height: 120,
  },

  imgbrownie: {
    width: "50%",
    height: 150,
  },

  imgbolo: {
    width: "50%",
    height: 150,
  },

  textsCard: {
    flex: 1,
    textAlign: "justify",
    justifyContent: "center",
    width: "100%",
  },

  footer: {
    width: "100%",
    height: 50,
    backgroundColor: "lightpink",
  },

  titulo: {
    fontFamily: "Montserrat",
  },

  sobre: {
    fontFamily: "Rokkitt",
  },
});
