import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import PermissionDenied from 'components/layout/PermissionDenied';

const Map = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [location, setLocation] = useState(null);

  const loadLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== 'granted')
      return alert('Permission to access location denied');

    setHasPermission(true);
    setLocation(await getCurrentPositionAsync({}));
  };

  useEffect(() => {
    loadLocation();
  }, []);

  return (
    <SafeAreaView style={{ display: 'flex' }}>
      {hasPermission ? (
        location && (
          <MapView
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          />
        )
      ) : (
        <PermissionDenied />
      )}
    </SafeAreaView>
  );
};

export default Map;
