import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const pontosColeta = [
  {
    id: '1',
    nome: 'Ponto Central',
    endereco: 'Av. Goiás, 1000, Setor Central, Goiânia - GO',
    horario: 'Segunda a sexta, das 08:00 às 18:00',
    recebe: 'Alimentos, roupas e produtos de higiene',
    distribui: 'Cestas básicas e roupas',
  },
  {
    id: '2',
    nome: 'Ponto Setor Oeste',
    endereco: 'Rua 10, 250, Setor Oeste, Goiânia - GO',
    horario: 'Segunda, quarta e sexta, das 09:00 às 17:00',
    recebe: 'Roupas, calçados e cobertores',
    distribui: 'Roupas e cobertores',
  },
  {
    id: '3',
    nome: 'Ponto Campinas',
    endereco: 'Av. 24 de Outubro, 500, Campinas, Goiânia - GO',
    horario: 'Terça a sábado, das 08:00 às 16:00',
    recebe: 'Alimentos não perecíveis',
    distribui: 'Cestas de alimentos',
  },
  {
    id: '4',
    nome: 'Ponto Jardim América',
    endereco: 'Av. T-63, 1500, Jardim América, Goiânia - GO',
    horario: 'Segunda a sexta, das 08:00 às 17:00',
    recebe: 'Produtos de higiene e limpeza',
    distribui: 'Kits de higiene',
  },
  {
    id: '5',
    nome: 'Ponto Setor Bueno',
    endereco: 'Av. T-4, 800, Setor Bueno, Goiânia - GO',
    horario: 'Terça e quinta, das 10:00 às 18:00',
    recebe: 'Roupas, calçados e alimentos',
    distribui: 'Roupas e alimentos',
  },
  {
    id: '6',
    nome: 'Ponto Setor Universitário',
    endereco: 'Rua 261, 1200, Setor Universitário, Goiânia - GO',
    horario: 'Segunda a sexta, das 09:00 às 17:00',
    recebe: 'Material escolar e livros',
    distribui: 'Material escolar',
  },
  {
    id: '7',
    nome: 'Ponto Jardim Novo Mundo',
    endereco: 'Av. New York, 900, Jardim Novo Mundo, Goiânia - GO',
    horario: 'Quarta a sábado, das 08:00 às 16:00',
    recebe: 'Alimentos e produtos de higiene',
    distribui: 'Cestas básicas e kits de higiene',
  },
  {
    id: '8',
    nome: 'Ponto Setor Pedro Ludovico',
    endereco: 'Av. Circular, 700, Setor Pedro Ludovico, Goiânia - GO',
    horario: 'Segunda, quarta e sexta, das 08:00 às 16:00',
    recebe: 'Roupas, cobertores e alimentos',
    distribui: 'Roupas e cestas básicas',
  },
];

function TelaPontos({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Instituto Mão Amiga
      </Text>

      <Text style={styles.subtitulo}>
        Pontos de coleta e distribuição
      </Text>

      <FlatList
        data={pontosColeta}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.ponto}
            onPress={() =>
              navigation.navigate('Detalhes', {
                pontoId: item.id,
              })
            }
          >
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.endereco}>
              {item.endereco}
            </Text>

            <Text style={styles.horario}>
              {item.horario}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

function TelaDetalhes({ route }: any) {

  const { pontoId } = route.params;

  const ponto = pontosColeta.find(
    (item) => item.id === pontoId
  );

  if (!ponto) {
    return (
      <View style={styles.container}>
        <Text>
          Ponto de coleta não encontrado.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.detalhes}>

      <Text style={styles.titulo}>
        {ponto.nome}
      </Text>

      <Text style={styles.label}>
        Endereço completo
      </Text>

      <Text style={styles.texto}>
        {ponto.endereco}
      </Text>

      <Text style={styles.label}>
        Dias e horários
      </Text>

      <Text style={styles.texto}>
        {ponto.horario}
      </Text>

      <Text style={styles.label}>
        O que recebe
      </Text>

      <Text style={styles.texto}>
        {ponto.recebe}
      </Text>

      <Text style={styles.label}>
        O que distribui
      </Text>

      <Text style={styles.texto}>
        {ponto.distribui}
      </Text>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Pontos">

        <Stack.Screen
          name="Pontos"
          component={TelaPontos}
          options={{
            title: 'Pontos de Coleta',
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{
            title: 'Detalhes do Ponto',
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1B3A5C',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 18,
    color: '#555555',
    marginBottom: 15,
  },

  ponto: {
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#F2F6F8',
    borderWidth: 1,
    borderColor: '#D9E1E5',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B3A5C',
    marginBottom: 8,
  },

  endereco: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 6,
  },

  horario: {
    fontSize: 14,
    color: '#2E7D32',
  },

  detalhes: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FFFFFF',
  },

  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1B3A5C',
    marginTop: 22,
    marginBottom: 6,
  },

  texto: {
    fontSize: 16,
    color: '#444444',
    lineHeight: 24,
  },

});