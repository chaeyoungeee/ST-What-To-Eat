import { useEffect, useRef } from 'react';

const MapNaverDefault = () => {
    const mapElement = useRef(null);
    const { naver } = window;

    useEffect(() => {
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.629665, 127.075765);
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
        <>
            <h1>Naver Map - Default</h1>
            <div ref={mapElement} style={{ width: '20rem', height: '20rem' }} />
        </>
    );
};

export default MapNaverDefault;