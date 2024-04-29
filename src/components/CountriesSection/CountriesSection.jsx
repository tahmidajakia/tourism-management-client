import { useLoaderData } from "react-router-dom";




const CountriesSection = () => {
    const countries = useLoaderData();
    console.log(countries)

    
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-14 mb-14"> Countries: {countries.length}</h1>
        </div>
    );
};

export default CountriesSection;