import { useEffect, useRef } from 'react';

const MapNaverDefault = (props) => {
    const mapElement = useRef(null);
    const { naver } = window;

    useEffect(() => {
        if (!mapElement.current || !naver) return;

        const location = new naver.maps.LatLng(props.coord[0], props.coord[1]);

        const mapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });
    }, []);

    return (
        <div>
            <div
                className="map"
                ref={mapElement}
                style={{ width: '100%', height: props.height, borderRadius: '2rem' }}
            />
        </div>
    );
};

export default MapNaverDefault;
