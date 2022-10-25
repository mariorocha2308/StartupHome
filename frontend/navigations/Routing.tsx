import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from '../pages/Home';
import AuthAdmin from '../pages/AuthAdmin';

const Stack = createNativeStackNavigator()
const queryClient = new QueryClient();

const Routing = () => {

  return ( 
    <NavigationContainer>
			<QueryClientProvider client={queryClient}>
				<Stack.Navigator  screenOptions={{
					headerStyle: {
						backgroundColor: 'black',
					},
					headerTintColor: 'white',
					headerTitleStyle: {
						fontFamily: 'Poppins_600SemiBold',
					}
				}}>
					<Stack.Screen name='Home' component={Home} options={{title: 'Catálogo'}}/>
					<Stack.Screen name='Auth' component={AuthAdmin} options={{title: 'Ingresa token OTP'}}/>
				</Stack.Navigator>
			</QueryClientProvider>
    </NavigationContainer>
  );
}

export default Routing;
