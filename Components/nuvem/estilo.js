import { StyleSheet } from "react-native";

const estilo= StyleSheet.create({

    pagina:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
    },

    titulo:{
    marginTop: 10,
    color: 'green',
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
    },

    subtitulo:{
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#131313',
        fontSize: 19,

    },

    texto:{
        textAlign: 'justify',
        marginBottom: 10,
        color: '#131313',
        paddingVertical: 10,
        textAlign: 'center'
    },

    img:{
        height: 200,
        width: 320,
        marginBottom: 100,
        borderRadius: 10,
    }



});

    export default estilo;