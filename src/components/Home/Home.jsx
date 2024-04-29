import CountriesSection from "../CountriesSection/CountriesSection";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";
import TouristSpots from "../TouristSpots/TouristSpots";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <TouristSpots></TouristSpots>
            <CountriesSection></CountriesSection>
            <Testimonials></Testimonials>
            <FrequentlyAsked></FrequentlyAsked>
        </div>
    );
};

export default Home;