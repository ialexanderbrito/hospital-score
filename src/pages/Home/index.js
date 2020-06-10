import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import {
  Container,
  Header,
  ImageContainer,
  Img,
  MapContainer,
  SearchHospital,
  SearchHospitalInput,
  SearchButton,
  MarkerContainer,
  MarkerContainerImg,
  MarkerContainerText,
} from './styles';

import logo from '../../assets/logo.png';
import img1 from '../../assets/teste.jpg';

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
        <Header>
          <ImageContainer>
            <Img source={logo} resizeMode="contain" />
          </ImageContainer>
        </Header>
        <MapContainer>
          <MapView
            style={styles.map}
            initialRegion={currentRegion}
            onRegionChangeComplete={handleRegionChanged}
            //*customMapStyle={mapStyle}*//
          >
            <Marker
              style={styles.mapMarker}
              coordinate={{
                latitude: -22.7649096,
                longitude: -43.3338987,
              }}
            >
              <MarkerContainer>
                <MarkerContainerImg source={img1} />
                <MarkerContainerText>SuperMarket</MarkerContainerText>
              </MarkerContainer>
            </Marker>
          </MapView>
        </MapContainer>

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
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
