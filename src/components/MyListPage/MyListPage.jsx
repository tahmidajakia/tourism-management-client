import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../Providers/AuthProviders";


const MyListPage = () => {
    const [item,setItem] = useState([]);
    const {user} = useContext(AuthContexts);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
            setItem(data);
        })
    },[user])
    return (
        <div>
            <h1>My List:</h1>
            
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
        <button className="btn mr-6">Update</button>
        <button className="btn">Delete</button>
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