
import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import GlobalStyles from "../styles/global"
import AsyncStorage from '@react-native-async-storage/async-storage';


function CadastroScreen() {

    const [nome, setNome] = useState("")

    const [medico, setMedico] = useState("")

    const [especialidade, setEspecialidade] = useState("")

    const [dataHora, setDataHora] = useState("")

    const Cadastro = async () => {
        const dadosConsulta = {
            nome,
            medico,
            especialidade,
            dataHora
        }

        const ConsultasStr = await AsyncStorage.getItem('Consultas')
        const Consultas = ConsultasStr ? JSON.parse(ConsultasStr) : []
        Consultas.push(dadosConsulta)
        await AsyncStorage.setItem('Consultas', JSON.stringify(Consultas))
        alert("Consulta cadastrada")

    }


    return (
        <View style={GlobalStyles.telas}>
            <Text>Nome</Text>
            <TextInput value={nome} onChange={(e) => setNome(e.target.value)} style={GlobalStyles.textoInput}></TextInput>


            <Text>Nome do médico</Text>
            <TextInput value={medico} onChange={(e) => setMedico(e.target.value)} style={GlobalStyles.textoInput}></TextInput>


            <Text>Especialidade</Text>
            <TextInput value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} style={GlobalStyles.textoInput}></TextInput>

            <Text>Data e hora</Text>
            <TextInput value={dataHora} onChange={(e) => setDataHora(e.target.value)} style={GlobalStyles.textoInput}></TextInput>

            <Button style={GlobalStyles.botao} title="Cadastrar" onPress={() => Cadastro()} />



        </View>
    )

}

export default CadastroScreen