// import React from "react";
// import { View } from "native-base";
// import MapView from "react-native-maps";

// import styles from "./MapContainerStyle";

// export const MapContainer = ({region}) => {
//     return(
//         <View style={styles.container}>
//             <MapView
//                 provider={MapView.PROVIDER_GOOGLE}
//                 style={styles.map}
//                 region={region}
//             >
//             </MapView>
//         </View>
//     )
// }
// export default MapContainer;

//functioneaza
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const MapContainer = ({region}) => {
    return(
        <MapView 
          provider={ PROVIDER_GOOGLE }
          style={ stylesx.container }
          initialRegion={{
            latitude: 45.796928,
            longitude: 24.149990,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
    )
}

const stylesx = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});

export default MapContainer;