import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListPage = ({setAllSpot,allSpot}) => {

  
    const [item,setItem] = useState([]);
    const {user} = useContext(AuthContexts);

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
           fetch(`http://localhost:5000/spot/${_id}`,{
            method:'DELETE'
           })
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.deletedCount){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  const remaining = allSpot.filter(spo => spo._id !== _id)
                  setAllSpot(remaining);
                
            }
           })
            }
          });
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
            setItem(data);
        })
    },[user])
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 text-teal-600">My List</h1>
            
            {
                item?.map(p => (
                    <div
                    key={p._id}
                     className="overflow-x-auto border-2 m-3 p-5">
                        <div className="overflow-x-auto">
  <table className="table table-zebra ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Country</th>
        <th>Location</th>
        <th>Tourist Spot Name</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{p.name}</td>
        <td>{p.country_name}</td>
        <td>{p.location}</td>
        <td>{p.tourist_spot_name}</td>
        <Link to={`/updateList/${p._id}`}>
        <button className="border mr-2 p-3 rounded-lg border-teal-500 bg-teal-600 text-white">Update</button>
        </Link>
        <button onClick={() => handleDelete(p._id)} className="border mr-2 p-3 rounded-lg border-teal-600 text-teal-600 ">Delete</button>
      </tr>
    </tbody>
  </table>
</div>
                        
                    </div>
                ))
            }
            </div>
    );
};

export default MyListPage;