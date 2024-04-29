import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddTouristSpot from "../components/Footer/AddTouristSpot/AddTouristSpot";
import SpotViewDetails from "../components/SpotViewDetails/SpotViewDetails";
import AllTouristSpot from "../components/AllTouristSpot/AllTouristSpot";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import MyListPage from "../components/MyListPage/MyListPage";
import CountriesSection from "../components/CountriesSection/CountriesSection";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/spot')
               
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addtouristspot',
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path:'/details/:id',
                element: <PrivateRoutes>
                    <SpotViewDetails></SpotViewDetails>
                </PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/spot${params.id}`)
            },
            {
                path: '/alltouristspot',
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('http://localhost:5000/spot')
                
            },
            {
                path: '/mylist',
                element: <MyListPage></MyListPage>
            },
            {
                path:'/countrySection',
                element:<CountriesSection></CountriesSection>,
                loader:() => fetch('http://localhost:5000/country')
                
            }
        ]
    }
]);
export default router;