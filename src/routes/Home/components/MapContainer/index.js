//functioneaza
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from "native-base";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AubergineMapStyle from "./AubergineMapStyle.json";

export const MapContainer = ({region}) => {
    return(
      <View
        style={ styles.container }
      >
        <MapView 
          provider={ PROVIDER_GOOGLE }
          style={ styles.map }
          customMapStyle={ AubergineMapStyle }
          initialRegion={{
            latitude: 45.796928,
            longitude: 24.149990,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default MapContainer;