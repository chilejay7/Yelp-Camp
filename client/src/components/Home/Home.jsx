import { useState, useEffect } from "react";
import { getCampgrounds } from "../../utils/api";
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import './Home.css'
import GoogleMap from "../GoogleMap/GoogleMap";
import CampForm from "../CampForm/CampForm";

export default function Campgrounds() {

    const [campgrounds, setCampgrounds] = useState([]);
    const [campData, setCampData] = useState({ title: "", location: "" });
    const [location, setLocation] = useState({ latitude: "", longitude: "" });

    useEffect(() => {

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        console.log('The coordinates are:', position.coords);
                        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    
                        setLocation({ latitude, longitude });
    
                        console.log("The geoposition is:", location);
                    },
                    error => console.error("Unable to retrieve your location"));
            } else {
                console.log("Geolocation not supported");
            }
        };
       
            getLocation();

        }, []);


        useEffect(() => {
            setCampData({ title: location.latitude, location: location.longitude });
        }, [location]);

    const loadCampgrounds = async () => {
        const response = await getCampgrounds();
        const data = await response.json();
        setCampgrounds(data);
    }

    const handleSearch = async (evt) => {
        evt.preventDefault();
        loadCampgrounds();
    };

    const clearSearch = (evt) => {
        evt.preventDefault();
        setCampgrounds([]);
    };

    const mapSearch = () => {
        googleMapSearch();
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setCampData(currData => {
            currData[name] = value;
            return { ...currData };
        })

    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert('Search submitted!');
    }

    return (
        <>

            <div className="home-camps">
                <h2>Find a Campground</h2>
            </div>

            <div className="search-fields">
                <form onSubmit={handleSubmit}>

                    <CampForm campData={campData} handleChange={handleChange} />

                    <Button variant="contained" type="submit">Find Campground</Button>

                </form>

            </div>

            <GoogleMap title={campData.title} location={campData.location ? campData.location
                : "Woodland Park, CO"} />

            <Box className="camp-div">
                <ul>
                    {campgrounds.map(camp =>

                        <NavLink
                            to={`/campgrounds/${camp._id}`}>
                            <li>
                                {camp.title} - {camp.location}
                            </li>
                        </NavLink>

                    )}
                </ul>
            </Box>


        </>

    )
}