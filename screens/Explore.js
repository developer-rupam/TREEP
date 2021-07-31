import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button,Dimensions } from "react-native";
import { icons, maps } from "../constants";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const Explore = (props) => {

  /* Managing state for component */
  const [currentLatitude, setCurrentLatitude] = useState(37.78825);
  const [currentLongitude, setCurrentLongitude] = useState(-122.4324);
  const [lastLatitude, setLastLatitude] = useState(null);
  const [lastLongitude, setLastLongitude] = useState(null);

  useEffect(() => {
    //const locationConfig = { skipPermissionRequests: false, authorizationLevel: "whenInUse" }
    //Geolocation.setRNConfiguration(locationConfig);
    Geolocation.getCurrentPosition(
      position => {

        console.log(position)
        setCurrentLatitude(position.coords.latitude)
        setCurrentLongitude(position.coords.longitude)
      },
      error => {
        alert('here')
        console.log(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );



  }, [])

  _renderMap = () => {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: currentLatitude, longitude: currentLongitude }}
            title="You are here"
            style={styles.marker}
          >
            <Image source={icons.MAPMARKER} style={styles.marker} />
          </Marker>

        </MapView>
      </View>
    )
  }



  return (
    <View style={{ flex: 1 }}>
      {/* Rendering Back & SOS button */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 45,
          justifyContent: "space-between",
          position: 'absolute',
          zIndex: -10000000000,
          marginLeft: 10
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Image source={icons.BACK} style={styles.backBtn} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sosBtn}>
          <Image source={icons.SOS} style={styles.sosIcon} />
        </TouchableOpacity>
      </View>

      {/* Method call  to render map */}
      {_renderMap()}

    
    </View>
  )
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 28,
    height: 28,

  },
  backBtn: {
    width: 30,
    height: 30,
  },
  sosBtn: {
    top : Dimensions.get('window').height - 100,
    left: Dimensions.get('window').width - 250,
    width :  100,
    height : 100
  },
  sosIcon: {
    width: 60,
    height: 60,
  }
});