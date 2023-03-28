import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Text, TextInput, View, Button, FlatList } from "react-native"
import GlobalStyles from "../styles/global"

function ListarConsultaScreen() {

    const [consultas,setConsultas] = useState([])
    const [consultasFiltro,setConsultasFiltro] = useState([])
    const Listar = async () => {

        const ConsultasStr = await AsyncStorage.getItem('Consultas')
        const Consultas = ConsultasStr? JSON.parse(ConsultasStr):[]
        setConsultas(Consultas)
        setConsultasFiltro(Consultas)
        
    }
    
    useEffect(() => {Listar()},[])

    const DeletarConsulta = async (idx) =>{
        const Consultas = consultas
        consultas.splice(idx,1)
        await AsyncStorage.setItem('Consultas', JSON.stringify(Consultas))
        alert('Consulta deletada')
        setConsultas([])
        setConsultasFiltro([])
        await Listar()

    }

    const ConteinerConsulta = (data) => {
        const Consulta = data.item
        return(<>
        
            <Text>{JSON.stringify(Consulta)}</Text>
            <Button style={GlobalStyles.botao} title="Deletar" onPress={() => DeletarConsulta(data.index)}></Button>
            </>)
        
    }

    const [filtro,setFiltro] = useState('')

    const Filtrar = () => {
        setConsultasFiltro(consultas.filter(
            (Consulta) => Consulta.nome.toLowerCase().includes(filtro.toLocaleLowerCase()) ||
            Consulta.medico.toLowerCase().includes(filtro.toLocaleLowerCase())
        ))
    }


    return (
        <View style={GlobalStyles.telas}>
            <Text>Pesquisar por meidico ou paciente</Text>
            <TextInput value={filtro} onChange={(e) => setFiltro(e.target.value)} style={GlobalStyles.textoInput}></TextInput>
            <Button onPress={() => setConsultasFiltro(consultas)} style={GlobalStyles.botao} title="Limpar"></Button>
            <Button style={GlobalStyles.botao} title="Buscar" onPress={() => Filtrar()} />
            <FlatList data={consultasFiltro} renderItem={ConteinerConsulta}></FlatList>

        </View>
    )

}

export default ListarConsultaScreen

