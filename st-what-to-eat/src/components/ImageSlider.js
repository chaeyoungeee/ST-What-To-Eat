import PlaceCard from "./PlaceCard";

function ImageSlider() {
    return(
        <ul className="img-slider">
            {
                [1,2,3,4,5].map(()=>{
                    return(
                        <li>
                            <PlaceCard></PlaceCard>
                        </li>
                    )
                })
            }
           
        </ul>
    )
}

export default ImageSlider;