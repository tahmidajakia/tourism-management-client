import { Link } from "react-router-dom";


const TouristSpotCard = ({spot}) => {

    const {_id,name,tourist_spot_name,country_name,location,description,cost,seasonality,travel_time,total,email,photo} = spot


    return (
        <div>
          <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  
  <div className="card-body ">
    <h2 className="text-center text-2xl font-semibold text-black">{tourist_spot_name}</h2>
    <p></p>
    <div className="card-actions justify-center mb-5">
      <Link to={`details/${_id}`}>
      <button className="btn bg-teal-400 text-white ">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TouristSpotCard;