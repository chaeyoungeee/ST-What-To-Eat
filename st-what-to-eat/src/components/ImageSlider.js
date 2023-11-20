import PlaceCard from './PlaceCard';
import { useSelector } from 'react-redux';

function ImageSlider() {
    let places = useSelector((state) => {
        return state.places;
    });
    let sortedPlaces = [...places];
    sortedPlaces = sortedPlaces.sort((a, b) => {
        return b.recommend - a.recommend;
    });

    return (
        <ul className="img-slider">
            {sortedPlaces.slice(0, 7).map((place) => {
                return (
                    <li>
                        <PlaceCard place={place} className="slider"></PlaceCard>
                    </li>
                );
            })}
        </ul>
    );
}

export default ImageSlider;
