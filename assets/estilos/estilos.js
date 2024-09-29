import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  containerScroll: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 25,
  },
  titulo: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 60,
  },
  img: {
    width: '100%',
    height: 250,
    marginTop: 15,
    marginBottom: 30,
    resizeMode: 'cover',
  },
  conteudo: {
    lineHeight: 25
  },
  boxDados: {
    
    marginTop: 25,
  },
  boxCard: {
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginVertical: 15,
  },
  card: {
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    boxSizing: 'border-box',
    borderRadius: 5,
  },
  icone: {
    marginBottom: 5,
    tintColor: 'white',
  },
  cardTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  corXbox: {
    backgroundColor: "green",
},
corPlaystation: {
    backgroundColor: "blue",
},
corNintendo: {
    backgroundColor: "red",
},
});


export default estilos;