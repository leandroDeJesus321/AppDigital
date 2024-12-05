import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function RootLayout() {

  return (
    <View style={styles.container}>
      <Text style={styles.texto} >Bem-vindo!</Text>
      <Text>Este APP é movido a dor, ódio, caos e loucura</Text>
      <StatusBar style="auto"/>
      <Link href="/profile"  style={{color: 'blue'}}>Ir para o perfil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily: 'ShareTechMono-Regular',
    fontSize: 20,
  },
})

