import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Intro from "../scenes/intro.scene";
import ChooseAgeRange from "../scenes/choose-age-range.scene";
import ChooseFavorites from "../scenes/choose-favorites.scene";
import Recommendation from "../scenes/recommendation.scene";
import FilmDetail from "../scenes/film-detail.scene";

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName="Intro">
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="ChooseAgeRange" component={ChooseAgeRange} />
      <Stack.Screen name="ChooseFavorites" component={ChooseFavorites} />
      <Stack.Screen name="Recommendation" component={Recommendation} />
      <Stack.Screen name="FilmDetail" component={FilmDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);
