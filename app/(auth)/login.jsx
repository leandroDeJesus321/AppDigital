import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {React, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../../constants';
import Formulario from '../../components/Formulario';
import CustomButton from '../../components/CustomButton';

const login = () => {

  const [form, setform] = useState({
    email: '',
    senha: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () =>{

  }


  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={images.logo}
            resizeMode='contain'
            style={styles.img}
          />
          <Text style={styles.txtLogin}>
            Login na Aora
          </Text>

          <Formulario
            title="Email"
            value={form.email}
            handleChangeText={(e)=> setform({...form, email: e})}
            otherStyles="marginTop: 10"
            keyboardType="email-address"
          />

          <Formulario
            title="Senha"
            value={form.senha}
            handleChangeText={(e)=> setform({...form, senha: e})}
            otherStyles="marginTop: 10"
          />

          <CustomButton
            title="Login"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View style={styles.block}>
            <Text style={styles.font}>
              Não está registrado?
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'black',
    flex: 1
  },
  container:{
    width: '100%',
    height: '85%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  img:{
    width: 115,
    height:35,
  },
  txtLogin:{
    fontFamily: 'ShareTechMono-Regular',
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'semibold'
  },
  font:{
    fontSize: 14,
    color: 'gray',
    fontFamily: ''
  },
  block:{
    justifyContent: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    gap: 20,
  }

})