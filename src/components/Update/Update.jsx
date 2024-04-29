import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const spot = useLoaderData();

    const {_id,name,tourist_spot_name,country_name,location,description,cost,seasonality,travel_time,total,email,photo} = spot


    const handleUpdate = event => {
        event.preventDefault();
     

        const form = event.target;

        const name = form.name.value;
        const tourist_spot_name = form.tourist_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total = form.total.value;
        // const email = user.email;
        const photo = form.photo.value;
        


        const updatedSpot = {name,tourist_spot_name,country_name,location,description,cost,seasonality,travel_time,total,email,photo}
        console.log(updatedSpot)

        fetch(`http://localhost:5000/spot/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist spot updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })

    }


    return (
        <div>
       <div className="text-center text-3xl mt-10 mb-8 font-semibold text-teal-800">
       <h1 className="text-3xl font-bold" >Update</h1>
       </div>
        <div className="flex justify-center items-center shadow-2xl bg-green-100 w-1/2 mx-auto">
      <form onSubmit={handleUpdate}   className="card-body">
        <div className=" form-control ">
          <div className="flex justify-center gap-2">
          <div>
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered" required />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Tourist Spot Name</span>
          </label>
          <input type="text" defaultValue={tourist_spot_name} name="tourist_spot_name" placeholder="Tourist Spot Name" className="input input-bordered" required />
          </div>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <div>
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input type="text" defaultValue={country_name} name="country_name" placeholder="country_name" className="input input-bordered" required />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" defaultValue={location} name="location" placeholder="location" className="input input-bordered" required />
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <div>
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="text" defaultValue={description} name="description" placeholder="description" className="input input-bordered" required />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Average Cost</span>
          </label>
          <input type="text" defaultValue={cost} name="cost" placeholder="cost" className="input input-bordered" required />
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <div>
          <label className="label">
            <span className="label-text">Seasonality</span>
          </label>
          <input type="text" defaultValue={seasonality} name="seasonality" placeholder="seasonality" className="input input-bordered" required />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Travel Time</span>
          </label>
          <input type="text" defaultValue={travel_time} name="travel_time" placeholder="travel_time" className="input input-bordered" required />
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <div>
          <label className="label">
            <span className="label-text">Total Visitors</span>
          </label>
          <input type="text" defaultValue={total} name="total" placeholder="total" className="input input-bordered" required />
          </div>
          <div>
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input type="email" defaultValue={email} name="email" placeholder="email" className="input input-bordered" required />
          </div>
        </div>
        <div className="justify-center pl-8 pr-8">
          <div className="">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" defaultValue={photo} name="photo" placeholder="photo URL" className="input input-bordered w-full" required />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-teal-800 text-white">Update</button>
        </div>
      </form>
    </div>
    </div>
    );
};

export default Update;