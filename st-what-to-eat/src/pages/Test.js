import MapNaverDefault from '../components/MapNaverDefault';
function Test(props) {
    return (
        <div>
            <p>{props.data.category}</p>
            <p>{props.data.name}</p>
            {props.data.menus.map((a) => {
                return (
                    <p>
                        {a.name} {a.price}
                    </p>
                );
            })}

            {props.data.imgs.map((a) => {
                return <img style={{ width: '5rem' }} src={a} />;
            })}
            <MapNaverDefault height={'15rem'} coord={props.data.coord}></MapNaverDefault>
        </div>
    );
}
export default Test;
