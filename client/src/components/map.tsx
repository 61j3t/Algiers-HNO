"use client";
import React, { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    Polyline,
} from "react-leaflet";
import L from "leaflet";
import pinImage from "../../public/pin.png";
import otherPinImage from "../../public/hospital.png";

// Define custom icons
const customIcon = L.icon({
    iconUrl: pinImage.src,
    iconSize: [45, 45],
    iconAnchor: [17, 45],
});

const otherCustomIcon = L.icon({
    iconUrl: otherPinImage.src,
    iconSize: [45, 45],
    iconAnchor: [17, 45],
});

interface MapProps {
    path: [number, number][];
}

const Map: React.FC<MapProps> = ({ path }) => {
    const [clickedMarker, setClickedMarker] = useState<{
        lat: number;
        lng: number;
    } | null>(null);

    // Custom hook to handle click event
    function AddMarkerOnClick() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setClickedMarker({ lat, lng });
            },
        });
        return null;
    }

    return (
        <div className="map w-2/3 h-[94vh]">
            <MapContainer center={[36.7753606, 3.0601882]} zoom={11}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Predefined markers */}
                <Marker
                    position={[36.6721025, 2.981512]}
                    icon={otherCustomIcon}
                >
                    <Popup>CHU Beni Messous</Popup>
                </Marker>
                <Marker
                    position={[36.752152, 3.0490693]}
                    icon={otherCustomIcon}
                >
                    <Popup>CHU Bab El Oued</Popup>
                </Marker>
                <Marker
                    position={[36.7391028, 3.1036479]}
                    icon={otherCustomIcon}
                >
                    <Popup>CHU Nafissa Hamoud</Popup>
                </Marker>
                <Marker
                    position={[36.7571681, 3.0534348]}
                    icon={otherCustomIcon}
                >
                    <Popup>CHU Mustapha Bacha</Popup>
                </Marker>
                <Marker
                    position={[36.7091434, 2.9406461]}
                    icon={otherCustomIcon}
                >
                    <Popup>CHU Douera</Popup>
                </Marker>
                <Marker
                    position={[36.6832161, 2.8437298]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH ZERALDA</Popup>
                </Marker>
                <Marker
                    position={[36.7950878, 3.2861989]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH ROUIBA</Popup>
                </Marker>
                <Marker
                    position={[36.7181538, 3.137306]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH EL HARRACH ( HASSAN BADI)</Popup>
                </Marker>
                <Marker
                    position={[36.6388542, 3.040488]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH EL BIAR (DJILLALI BELKHENCHIR)</Popup>
                </Marker>
                <Marker
                    position={[36.7903761, 3.2953888]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH AIN TAYA</Popup>
                </Marker>
                <Marker
                    position={[36.741593, 3.0868534]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH Kouba (Bachir Mentouri)</Popup>
                </Marker>
                <Marker
                    position={[36.6873063, 2.9790086]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH Bologhine Ibn Ziri</Popup>
                </Marker>
                <Marker
                    position={[36.7579494, 3.0416214]}
                    icon={otherCustomIcon}
                >
                    <Popup>EPH El Mouradia (Djillali Rahmouni)</Popup>
                </Marker>
                <Marker
                    position={[36.7327108, 3.0217875]}
                    icon={otherCustomIcon}
                >
                    <Popup>
                        EHS REEDUCATION Réadaptation Fonctionnelle Kasdi Merbah
                        Tixeraine
                    </Popup>
                </Marker>
                <Marker position={[36.7129003, 2.84523]} icon={otherCustomIcon}>
                    <Popup>
                        EHS REEDUCATION READAPTATION AZUR PLAGE (STAOUELI)
                    </Popup>
                </Marker>
                <Marker
                    position={[36.6362291, 3.0853455]}
                    icon={otherCustomIcon}
                >
                    <Popup>EHS PSYCHIATRIQUE DRID HOCINE</Popup>
                </Marker>
                <Marker
                    position={[36.7801058, 3.0584103]}
                    icon={otherCustomIcon}
                >
                    <Popup>EHS NEURO CHIRURGICAL ALI AIT IDIR</Popup>
                </Marker>
                <Marker
                    position={[36.7152731, 3.0015867]}
                    icon={otherCustomIcon}
                >
                    <Popup>EHS CNMS DR MAOUCHE MOHAND AMOKRANE</Popup>
                </Marker>
                <Marker
                    position={[36.7188453, 3.1238449]}
                    icon={otherCustomIcon}
                >
                    <Popup>
                        EHS DES URGENCES MEDICO CHIRURGICALES SALIM ZEMIRLI
                    </Popup>
                </Marker>
                <Marker
                    position={[36.7568759, 3.0512255]}
                    icon={otherCustomIcon}
                >
                    <Popup>EHS EN MALADIES INFECTIEUSES Dr EL HADI FLICI</Popup>
                </Marker>
                <Marker
                    position={[36.7601758, 3.0563932]}
                    icon={otherCustomIcon}
                >
                    <Popup>
                        EHS Des Brules Et Chirurgie Réparatrice Claudine Et
                        Pierre Chaulet
                    </Popup>
                </Marker>
                <Marker
                    position={[36.7302259, 3.0527578]}
                    icon={otherCustomIcon}
                >
                    <Popup>
                        EHS Chirurgie Cardiaque Clinique Mohamed ABDERRAHMANI
                    </Popup>
                </Marker>
                <Marker
                    position={[36.7338392, 3.0007401]}
                    icon={otherCustomIcon}
                >
                    <Popup>EHS Ben Aknoun</Popup>
                </Marker>
                <Marker
                    position={[36.7473974, 3.0553013]}
                    icon={otherCustomIcon}
                >
                    <Popup>EHS Anti Cancéreux Pierre Et Marie Curie</Popup>
                </Marker>
                <Marker
                    position={[36.7663921, 2.9540991]}
                    icon={otherCustomIcon}
                >
                    <Popup>EHS en Psychiatrie Cheraga</Popup>
                </Marker>
                {path.length > 0 && (
                    <Marker position={path[0]} icon={customIcon}>
                        <Popup>EHS en Psychiatrie Cheraga</Popup>
                    </Marker>
                )}

                {/* Marker for click event */}
                {clickedMarker && !(path.length > 0) && (
                    <Marker
                        position={[clickedMarker.lat, clickedMarker.lng]}
                        icon={customIcon}
                    >
                        <Popup>
                            Coordinates: {clickedMarker.lat.toFixed(6)},{" "}
                            {clickedMarker.lng.toFixed(6)}
                        </Popup>
                    </Marker>
                )}
                <AddMarkerOnClick />
                {path.length > 0 && (
                    <Polyline
                        pathOptions={{ color: "blue" }}
                        positions={path}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default Map;
