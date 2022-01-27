import { StyleSheet } from "react-native";

const estiloConsole= StyleSheet.create({

    barra:{
    flex: 1,
    backgroundColor: '#ffffff',
    },

    container:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    },

    img:{
    height: 200,
    width: 200,
    },

    titulo:{
    color: 'green',
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    textAlign: 'center'
    },

    subtitulo:{
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },

    texto:{
        textAlign: 'center',
        marginBottom: 10,
    },

});

    export default estiloConsole;