import React from 'react';
import { StyleSheet, View } from 'react-native';
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

export default function Home() {
  return (
    <>
      <Container>
        <ImageContainer>
          <Img source={logo} resizeMode="contain" />
        </ImageContainer>
        <MapContainer>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -22.7682542,
              longitude: -43.3360046,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
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
