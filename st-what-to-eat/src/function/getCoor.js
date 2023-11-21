const axios = require('axios');

// Google Geocoding API 키
const apiKey = 'AIzaSyAXA_5Tlxv8zB_U-94P7X0GdnklwiSG0qA';

// 주소를 위도와 경도로 변환하는 함수
async function geocodeAddress(address) {
    try {
        // 주소를 URL로 인코딩
        const encodedAddress = encodeURIComponent(address);

        // Geocoding API 요청을 보낼 URL 생성
        const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

        // Geocoding API에 GET 요청 보내기
        const response = await axios.get(geocodingUrl);

        if (response.status === 200) {
            const result = response.data.results[0];
            const location = result.geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
            return { latitude, longitude };
        } else {
            throw new Error('지오코딩에 실패했습니다.');
        }
    } catch (error) {
        throw new Error('오류가 발생했습니다: ' + error.message);
    }
}

address = '서울 노원구 동일로192길 30 1층';
geocodeAddress(address)
    .then((location) => {
        console.log(`[${location.latitude}, ${location.longitude}],`);

        coor = (location.latitude, location.longitude);
    })
    .catch((error) => {
        console.error(error);
    });
