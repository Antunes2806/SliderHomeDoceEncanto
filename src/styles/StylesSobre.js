import { StyleSheet } from "react-native";

export const stylesSobre = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Viewtexto: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "82%",
    height: "78%",
    borderColor: "black",
    borderWidth: 3,
    padding: 9,
    
  },
  linha: {
    top: 18,
    backgroundColor: "black",
    width: 150,
    height: 2,
  },
  linha2: {
    top:40,
    backgroundColor: "black",
    width: 150,
    height: 2,
  },
  txt: {
    top: 30,
    fontSize: 23,
    fontFamily: "Nunito",
    margin:10,
    textAlign:"center",
  },
  txtsobre: {
    top:10,
    fontSize: 30,
    fontFamily: "League_Spartan",
  },
  txtsubtitulo: {
    top:12,
    fontSize: 17,
    fontFamily: "League_Spartan",
  },

  ImgFundo: {
    width: "100%",
    height: "100%",
  },

  Viewcontato:{
    width:"100%",
    height:"20%",
    justifyContent:"flex-end",
  },

  Viewinsta:{
    bottom:9,
    left:5,
    flexDirection: "row",
  },
  Viewlocalizacao:{
    flexDirection: "row",
    alignItems:"center",
  },
  txtendereco:{
    left:5,
    fontFamily: "Nunito",
  },
});
