import { StyleSheet } from "react-native";

const estilo= StyleSheet.create({

    pagina:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#121212',
    },

    img:{
    height: 200,
    width: 300,

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
        marginVertical: 15,
        color: '#afaeb0',

    },

    texto:{
        textAlign: 'justify',
        marginBottom: 10,
        color: '#afaeb0',
        paddingVertical: 10,
        
        
    },

    Boxtexto:{
        textAlign: 'justify',
        color: '#afaeb0',
        paddingVertical: 1,
        paddingLeft: 5,
        backgroundColor: 'black',
        fontWeight: 'bold',
        opacity: 0.8,
    },

});

    export default estilo;