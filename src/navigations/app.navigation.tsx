import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Intro from "../scenes/intro.scene";
import ChooseFilms from "../scenes/choose-films.scene";

export const AppNavigation = () => (

    <NavigationContainer>

        <Stack.Navigator headerMode="none" initialRouteName="Intro">
            <Stack.Screen
                name="Intro"
                component={Intro} />
            <Stack.Screen
                name="ChooseFilms"
                component={ChooseFilms} />
        </Stack.Navigator>

    </NavigationContainer>

)
