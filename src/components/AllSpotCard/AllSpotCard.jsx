import { Link } from "react-router-dom";


const AllSpotCard = ({spots}) => {
    const {_id,name,tourist_spot_name,country_name,location,description,cost,seasonality,travel_time,total,email,photo} = spots
    return (
      <div className="card card-compact  bg-base-100 shadow-xl">
      <figure><img src={photo} alt="Shoes" /></figure>
      <div className="card-body ">
        <h2 className="text-center text-2xl font-semibold text-black">{tourist_spot_name}</h2>
        <p></p>
        <div className="card-actions justify-center mb-5">
        <Link to={`/details/${_id}`}>
      <button className="btn bg-teal-500 text-white ">View Details</button>
      </Link>
        </div>
      </div>
    </div>
    );
};

export default AllSpotCard;