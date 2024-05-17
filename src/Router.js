import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Stack = createStackNavigator();
const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='LoginPage' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='ProductsPage' component={Products} options={{headerStyle:{backgroundColor:'transparent'},title:'Products Page'}}/>
            <Stack.Screen name='DetailPage'component={Detail} options={{title:'Detail Page'}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Router;