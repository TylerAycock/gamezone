import { useState, useEffect, useCallback } from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Text, StyleSheet, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'nunito-reg': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
          'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf')
        })
      } catch (e) {
        console.warn(`failed to load fonts ${e}`);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Home />
    </View>
  )


}

const styles = StyleSheet.create({

})