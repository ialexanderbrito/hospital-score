import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import {
  Container,
  ImageContainer,
  Img,
  MapContainer,
  SearchHospital,
  SearchHospitalInput,
  SearchButton,
} from './styles';
import logo from '../../assets/logo.png';

//*import mapStyle from './mapStyle.json';*//

export default function Home() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await Location.requestPermissionsAsync();

      if (granted) {
        const { coords } = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014,
        });
      }
    }
    loadInitialPosition();
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <Container>
        <ImageContainer>
          <Img source={logo} resizeMode="contain" />
        </ImageContainer>
        <MapContainer>
          <MapView
            style={styles.map}
            initialRegion={currentRegion}
            onRegionChangeComplete={handleRegionChanged}
            //*customMapStyle={mapStyle}*//
          />
        </MapContainer>
      </Container>
      <SearchHospital>
        <SearchHospitalInput
          placeholder="Buscar hospital por nome..."
          placeholderTextColor="#999"
          autoCapitalize="words"
        />
        <SearchButton>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </SearchButton>
      </SearchHospital>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
