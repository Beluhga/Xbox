import { StyleSheet } from "react-native";

const estilo= StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },

    texto:{
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    paragrafo:{
        color: 'rgba(72,73,78,255)',
        textAlign: 'center',
    },

    btn:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#007e00',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    imgbox:{
        height: 70,
        width: 70,
        borderRadius: 5,
        marginHorizontal: 5,
        
    },

    box:{
        color: 'white',
        textAlign: 'justify',
    },

    img:{
        marginVertical: 5,
        width: 300,
        height: 100,

    },

    divCard:{
        padding: 10,
    }
})

export default estilo;