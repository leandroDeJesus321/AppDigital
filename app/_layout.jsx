import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import GlobalProvider from '../context/GlobalProvider'
SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
    "ShareTechMono-Regular" : require("../assets/fonts/ShareTechMono-Regular.ttf"),
  })

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        {/* <Stack.Screen name='/pesquisa/[query]' options={{headerShown: false}}/> */}
        {/* <Stack.Screen name='home' /> */}
      </Stack>
    </GlobalProvider>
    
  )
}

export default _layout

const styles = StyleSheet.create({})