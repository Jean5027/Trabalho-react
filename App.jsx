import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from "react-native";
import CadastroScreen from "./screen/CadastroScreen";
import HomeScreen from "./screen/HomeScreen"
import ListarConsultaScreen from "./screen/ListarConsultaScreen"
import GlobalStyles from "./styles/global";



function App() {
    return (
        <View style={GlobalStyles.container}>



            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Cadastro" component={CadastroScreen} />
                    <Stack.Screen name="Pesquisa" component={ListarConsultaScreen} />
                    {/* <Stack.Screen name="Delete" component={DeleteScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>



        </View>


    )
}

const Stack = createNativeStackNavigator();

export default App

