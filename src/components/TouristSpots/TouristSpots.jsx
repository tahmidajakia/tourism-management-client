import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../../routes/TouristSpotCard/TouristSpotCard";
import { useState } from "react";


const TouristSpots = () => {

    const [dataLength,setDataLength] = useState(6)

    const spots = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-4xl mt-12 mb-10">This is tourist sport section: {spots.length}</h1>
            <div className="grid md:grid-cols-3 gap-10">
            {
                spots.slice(0,dataLength).map(spot => <TouristSpotCard
                key={spot._id}
                spot={spot}
                ></TouristSpotCard>)
            }
            </div>
            <div className="flex justify-center mt-14">
                <Link to='/alltouristspot'>
                <button className="btn">Show all</button>
                </Link>
            </div>
        </div>
    );
};

export default TouristSpots;