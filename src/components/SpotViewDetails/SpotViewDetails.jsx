import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseSpotData from "./UseSpotData";



const SpotViewDetails = () => {

    const [singleData,setSingleData] = useState({});

    // const spots = useLoaderData();
    const {data} = UseSpotData()
    const {id} = useParams();

    useEffect(() => {
        if(data){
            const singleData = data.find((item) =>item._id == id);
            console.log(singleData);
            setSingleData(singleData);
           }
    },[data,id]);



    const {_id,name,tourist_spot_name,country_name,location,description,cost,seasonality,travel_time,total,email,photo} = singleData || {};

    
    return (
        <div>
            <h1>details:{tourist_spot_name}</h1>
            <div>
                <div>
                    <img className="w-full h-[500px]" src={photo} alt="" />
                </div>
                <div className="grid md:grid-cols-3 mt-12">
                    <div className="col-span-2 mr-10">
                        <h1 className="text-4xl font-bold">{tourist_spot_name} Tour</h1>
                        <div className="flex gap-36 mt-8">
                        <h3 className="font-semibold">Travel Time: {travel_time}</h3>
                        <h1 className="font-semibold">Location: {location}</h1>
                        <h1></h1>
                        </div>
                        <p className="mt-8 "><span className="text-black  font-semibold">Description : </span>   {description}</p>
                        <div className="rating rating-md mt-10 mb-8">
                     <input type="radio" name="rating-8" className="mask mask-star-2  bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <h1 className="ml-6">( 3 Reviews )</h1>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-8">
                        <h3 className="font-semibold">Country: {country_name}</h3>
                        <h1 className="font-semibold">Average Cost: {cost}</h1>
                        <h1></h1>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-8">
                        <h3 className="font-semibold">Seasonality: {seasonality}</h3>
                        <h1 className="font-semibold">Person : {total}</h1>
                        <h1></h1>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-8">
                        <h3 className="font-semibold">Departure Time: Please arrive by 9:15 AM </h3>
                        <h1 className="font-semibold">Return Time: Approximately 8:30 PM</h1>
                        <h1></h1>
                    </div>

                    </div>

                    <div className="bg-green-200 p-7 ">
                        <h1 className="text-3xl font-semibold">Book This Tour</h1>
                       
                        <div className="mt-5">
                            <h1 className="mb-2">Name</h1>
                        <input type="text" placeholder="Enter Your name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="mt-5">
                            <h1 className="mb-2">Email</h1>
                        <input type="text" placeholder="Enter Your email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="mt-5">
                            <h1 className="mb-2">Phone Number</h1>
                        <input type="text" placeholder="Enter Your number" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="mt-5">
                            <h1 className="mb-2">Number Of Tickets</h1>
                        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button className="w-full btn mt-10 bg-green-700 text-white">Book</button>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default SpotViewDetails;