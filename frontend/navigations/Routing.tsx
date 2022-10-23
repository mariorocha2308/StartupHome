import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import AuthAdmin from '../pages/AuthAdmin';

const Stack = createNativeStackNavigator()

const Routing = () => {

  return ( 
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
				headerStyle: {
          backgroundColor: 'black',
        },
				statusBarStyle: 'inverted',
				statusBarColor: 'black',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'Poppins_600SemiBold',
        }
			}}>
        <Stack.Screen name='Home' component={Home} options={{title: 'Catálogo'}}/>
        <Stack.Screen name='Auth' component={AuthAdmin} options={{title: 'Modo administrador'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
