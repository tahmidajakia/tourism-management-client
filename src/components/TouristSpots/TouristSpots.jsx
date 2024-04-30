import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../../routes/TouristSpotCard/TouristSpotCard";
import { useState } from "react";


const TouristSpots = () => {

    const [dataLength,setDataLength] = useState(6)

    const spots = useLoaderData();
    return (
        <div className="bg-teal-50 pl-6 pr-6 rounded-2xl ">
            <h1 className="text-center font-bold text-5xl mt-20 mb-10 pt-10">This is tourist sport section</h1>
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
                <button className="btn bg-teal-400 text-white mb-8">Show all</button>
                </Link>
            </div>
        </div>
    );
};

export default TouristSpots;