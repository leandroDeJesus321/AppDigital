import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from '../constants';
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";


export default function RootLayout() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={styles.bloco}>
          <Image
            source={images.logo}
            style={styles.icone}
          />
          <Image
            source={images.cards}
            style={styles.img}
          />
          <View>
            <Text style={styles.textoForte}>
              Descubra possibilidades incríveis com
              <Text style={styles.textoFraco}>AORA</Text>
              </Text>
            
            <Image
              source={images.path}
              style={styles.icone2}
            />
          </View>
          <Text style={styles.fonte2}>
            Encontros criativos e inovadores: Embarque em uma jornada ilimitada de exploração com Aora.
          </Text>
          <CustomButton
            title="login com email"      
            handlePress ={()=>{router.push('/login')}}
          />
        </View>
      </ScrollView>

      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  bloco:{
    flex: 1,
    alignItems: 'center',
    padding: 4,
  },
  icone:{
    width: 84,
    height: 130,
    resizeMode: 'contain'
  },
  icone2:{
    width: 136,
    height: 15,
    position: 'absolute',
    top: 20,
    right: -50,
    resizeMode: 'contain'
    
  },
  img:{
    width:380,
    height:300,
    resizeMode: 'contain'
  },
  fonte:{
    fontFamily: 'ShareTechMono-Regular',
    color: 'white',
  },
  fonte2:{
    fontFamily: 'ShareTechMono-Regular',
    color: 'white',
    margin: 20,
    
  },
  textoForte:{
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    position: 'relative'
  },
  textoFraco:{
    color: 'orange',
    fontWeight: '200',
    textAlign: 'center'
  },

})

