import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import Home from './Screens/Home';
// import Map from './Screens/Map';
// import Profile from './Screens/Profile';
import CreateAccount from './Screens/CreateAccount';
import CreateProviderAccount from './Screens/CreateAccount/Screens/CreateProvider';
import CreateCustomerAccount from './Screens/CreateAccount/Screens/CreateCustomer';

const Routes = () => {
  // const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  // const setIcons = ({ route }) => ({
  //   tabBarIcon: ({ focused, color, size }) => {
  //     let iconName;

  //     if (route.name === 'Home') {
  //       iconName = focused ? 'home' : 'home-outline';
  //     } else if (route.name === 'Map') {
  //       iconName = focused ? 'map' : 'map-outline';
  //     } else if (route.name === 'Profile') {
  //       iconName = focused ? 'people' : 'people-outline';
  //     }

  //     return <Ionicons name={iconName} size={size} color={color} />;
  //   },
  // });

  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        screenOptions={setIcons}
        tabBarOptions={{
          activeTintColor: '#666666',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator> */}
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen
          name="CreateProviderAccount"
          component={CreateProviderAccount}
          options={{ title: 'Create Provider' }}
        />
        <Stack.Screen
          name="CreateCustomerAccount"
          component={CreateCustomerAccount}
          options={{ title: 'Create Customer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
