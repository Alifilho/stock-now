import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from 'screens/Home';
import Map from 'screens/Map';
import Profile from 'screens/Profile';
// import CreateAccount from 'screens/CreateAccount';
// import CreateProviderAccount from 'screens/CreateAccount/screens/CreateProvider';
// import CreateCustomerAccount from 'screens/CreateAccount/screens/CreateCustomer';
// import AddressForm from 'screens/CreateAccount/screens/CreateProvider/screens/AddressForm';

const Routes = () => {
  const Tab = createBottomTabNavigator();
  // const Stack = createStackNavigator();

  const setIcons = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Map') {
        iconName = focused ? 'map' : 'map-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'people' : 'people-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={setIcons}
        tabBarOptions={{
          activeTintColor: '#666666',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      {/* <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen
          name="CreateCustomerAccount"
          component={CreateCustomerAccount}
          options={{ title: 'Create Customer' }}
        />
        <Stack.Screen
          name="CreateProviderAccount"
          component={CreateProviderAccount}
          options={{ title: 'Create Provider' }}
        />
        <Stack.Screen
          name="AddressForm"
          component={AddressForm}
          options={{ title: 'Create Provider - Address' }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Routes;
