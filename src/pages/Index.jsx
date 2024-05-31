import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Container, Heading, VStack } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';

// Custom icon for bike pump stations
const bikePumpIcon = new Icon({
  iconUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaWtlJTIwcHVtcCUyMGljb258ZW58MHx8fHwxNzE3MTU4NzYyfDA&ixlib=rb-4.0.3&q=80&w=1080',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Sample data for bike pump stations in Stockholm
const bikePumpStations = [
  { id: 1, name: 'Pump Station 1', position: [59.3293, 18.0686] },
  { id: 2, name: 'Pump Station 2', position: [59.3326, 18.0649] },
  { id: 3, name: 'Pump Station 3', position: [59.3340, 18.0700] },
  // Add more stations as needed
];

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={4}>Bike Pump Stations in Stockholm</Heading>
        <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: '80vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumpStations.map(station => (
            <Marker key={station.id} position={station.position} icon={bikePumpIcon}>
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </VStack>
    </Container>
  );
};

export default Index;