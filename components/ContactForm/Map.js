import React from "react";
import { Map, GoogleApiWrapper, Marker, } from "google-maps-react";

const ContactMap = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: `${"/assets/images/map.png"}`
        }}
        animation={props.google.maps.Animation.BOUNCE}
      />
    </Map>
  );
};

 
export default GoogleApiWrapper({
  apiKey: "AIzaSyDbOU5JUmNH8BTiOaCiRWPrvdGlapqdD34"
})(ContactMap);


