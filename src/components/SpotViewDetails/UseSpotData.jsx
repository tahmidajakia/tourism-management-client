import { useEffect, useState } from "react";


const UseSpotData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch ('http://localhost:5000/spot');
            const data = await res.json();
            setData(data);
        };

        fetchData();
    },[])

    return {data};
};

export default UseSpotData;