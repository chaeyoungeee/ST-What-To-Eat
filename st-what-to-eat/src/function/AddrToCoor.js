import React from 'react';
import {
    useNavermaps,
} from 'react-naver-maps';

let coor = [0, 0]

function AddrToCoor() {
    const navermaps = useNavermaps();

    navermaps.Service.geocode(
        {
            address: '솔매로 22길 59',
        },
        function (status, response) {
            if (status !== navermaps.Service.Status.OK) {
                console.log('error');
                return alert('Something wrong!');
            }
 
            const result = response.result;
   
            const items = result.items;

            return (items[0].point.y, items[0].point.x)
            // console.log('위도 = ', items[0].point.y, ' 경도 = ', items[0].point.x);
        }
    );

    // return (items[0].point.y, items[0].point.x)
};

function getCoor() {
    console.log(AddrToCoor())
    console.log(coor)
    return coor
}

export { AddrToCoor, getCoor }