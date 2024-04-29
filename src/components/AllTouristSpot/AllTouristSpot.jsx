import { useLoaderData } from "react-router-dom";
import AllSpotCard from "../AllSpotCard/AllSpotCard";


const AllTouristSpot = () => {
    
    const allSpot = useLoaderData();
    return (
        <div>
            <h1>this is all tourist spot : {allSpot.length}</h1>
            <div className="grid md:grid-cols-3 gap-5 mt-10 mb-10">
                {
                    allSpot.map(spots => <AllSpotCard
                    key={spots._id}
                    spots={spots}
                    ></AllSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;