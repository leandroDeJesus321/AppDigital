import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {React, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../../constants';
import Formulario from '../../components/Formulario';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

import { router } from 'expo-router';

import { createUser } from '../../libs/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const cadastro = () => {

  const [form, setform] = useState({
    username: '',
    email: '',
    senha: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsLogged} = useGlobalContext();
  const submit = async () =>{
    if(!form.username || !form.email || !form.senha){
      
      alert('Error, preencha todos os campos.')
    }

    setIsSubmitting(true);

    try {
      console.log("Envio de login: ",form);
      const result = await createUser(form.email, form.senha, form.username);
      console.log("Resultado da sessão logada:",result)
      setUser(result);
      setIsLogged(true);
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally{
      setIsSubmitting(false)
    }

    createUser();
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
            Cadastre na Aora
          </Text>

          <Formulario
            title="Nome de usuário"
            value={form.username}
            handleChangeText={(e)=> setform({...form, username: e})}
            otherStyles="marginTop: 10"
          />

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
            title="Cadastrar"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View style={styles.block}>
            <Text style={styles.font}>
              Já está registrado?
            </Text>
            <Link style={styles.link} href={'/login'} >login</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default cadastro

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center'
  },
  container:{
    width: '100%',
    height: '100%',
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
  },
  link:{
    color: 'orange',
    fontSize: 14,
    fontWeight: 'semibold'
  }

})