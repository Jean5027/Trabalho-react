import { Button, View, Text } from "react-native";
import GlobalStyles from "../styles/global";



function HomeScreen({ navigation }) {
    return (
      <View style={GlobalStyles.telas}>
        <Text>Cadastrar consulta</Text>
        <Button style={GlobalStyles.botao}
          title="Cadastro"
          onPress={() => navigation.navigate('Cadastro')}
        />
        <Text>{'\n'}</Text>
        <Text>Pesquisar consulta</Text>
        <Button style={GlobalStyles.botao}
          title="Pesquisa"
          onPress={() => navigation.navigate('Pesquisa')}
        />
        
      </View>
    );
  }

export default HomeScreen
  