import React, { useCallback } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Bungee_400Regular } from "@expo-google-fonts/bungee";
import { Cabin_400Regular, Cabin_700Bold } from "@expo-google-fonts/cabin";
import { AppNavigation } from "./src/navigations/app.navigation";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Bungee_400Regular,
    Cabin_400Regular,
    Cabin_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
}
