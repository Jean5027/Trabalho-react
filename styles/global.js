import { StyleSheet } from "react-native";
import CadastroScreen from "../screen/CadastroScreen";
import ListarConsultaScreen from "../screen/ListarConsultaScreen";


const GlobalStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#255',
        flex: 1,
        backgroundColor: 'black'

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    textoInput: {
        justifyContent: 'space-around',
        height: '5%',
        width: '50%',
        backgroundColor: '#D6EAF8',

    },
    telas: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


});


export default GlobalStyles