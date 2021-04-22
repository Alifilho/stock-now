import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { lockAsync, OrientationLock } from 'expo-screen-orientation';

import Routes from './src/routes.js';

// import Login from './src/Screens/Login';

const App = () => {
  const lockScreen = async () => {
    await lockAsync(OrientationLock.PORTRAIT_UP);
  };

  useEffect(() => {
    lockScreen();
  }, []);

  return (
    <SafeAreaProvider>
      <Routes />
      {/* <Login /> */}
    </SafeAreaProvider>
  );
};

export default App;
