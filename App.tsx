import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee';
import { Cabin_400Regular, Cabin_700Bold } from '@expo-google-fonts/cabin';

import { AppNavigation } from "./src/navigations/app.navigation";

export default function App() {

  let [fontsLoaded] = useFonts({
    Bungee_400Regular,
    Cabin_400Regular,
    Cabin_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );

}
