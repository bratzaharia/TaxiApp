import React from "react";
// import { View, Text } from "react-native";

import {Container} from "native-base";

import MapContainer from "./MapContainer";

class Home extends React.Component {

    componentDidMount() {
        this.props.setName();
    }

    render() {
        const region = {
            latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.01,
         longitudeDelta: 0.01
        }
        return(
        <Container style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            {/* <Text>Hi {this.props.name}</Text> */}
            <MapContainer region={region}/>
        </Container>
        );
    }
}
export default Home;