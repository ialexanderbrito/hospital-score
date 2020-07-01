import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import api from '../../services/api';

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

//*import mapStyle from './mapStyle.json';*//

export default Home = () => {
  const [hospitais, setHospitais] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [typeHospital, setTypeHospital] = useState('');

  const navigation = useNavigation();

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

  async function loadHospital() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        type_hospital: typeHospital,
      },
    });

    setHospitais(response.data);
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  function handleNavigateToDetail(hospitais) {
    navigation.navigate('Detail', { hospitais });
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
            {hospitais.map((hospital) => (
              <Marker
                key={hospital._id}
                style={styles.mapMarker}
                onPress={() => handleNavigateToDetail()}
                coordinate={{
                  longitude: hospital.location.coordinates[0],
                  latitude: hospital.location.coordinates[1],
                }}
              >
                <MarkerContainer>
                  <MarkerContainerImg source={{ uri: hospital.image_uri }} />
                  <MarkerContainerText>{hospital.name}</MarkerContainerText>
                </MarkerContainer>
              </Marker>
            ))}
          </MapView>
        </MapContainer>

        <SearchHospital>
          <SearchHospitalInput
            placeholder="Buscar por estrutura... ex: UPA"
            placeholderTextColor="#999"
            autoCapitalize="words"
            value={typeHospital}
            onChangeText={setTypeHospital}
          />
          <SearchButton onPress={loadHospital}>
            <MaterialIcons name="search" size={24} color="#FFF" />
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
