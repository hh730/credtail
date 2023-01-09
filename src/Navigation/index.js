import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Invoices from '../Container/Invoices';
import CollectPayment from '../Container/CollectPayment';
import SuccessScreen from '../Container/SuccessScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Invoices" component={Invoices} />
      <Stack.Screen name="CollectPayment" component={CollectPayment} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
