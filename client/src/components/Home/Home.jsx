import { useState, useEffect } from "react";
import { getCampgrounds, googleMapSearch } from "../../utils/api";
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

    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    console.log('The coordinates are:', position.coords);
                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                },
                error => console.error("Unable to retrieve your location"));
        } else {
            console.log("Geolocation not supported");
        }
    };

    useEffect(() => {

        getLocation();

    }, []);

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

    return (
        <>

            <div className='home-camps'>
                <h2>Find a Campground</h2>

                {/* <Button variant="contained" onClick={handleSearch}>Find Campgrounds</Button>
                <Button variant="contained" onClick={clearSearch}>Clear Search</Button> */}
            </div>

            <div className="search-fields">

               
                    <TextField
                        id="filled-basic"
                        label="Campground Name"
                        variant="filled"
                        className="home-input"
                        name="title"
                        value={campData.title}
                        onChange={handleChange}
                    />

                    <TextField
                        id="filled-basic"
                        label="Location"
                        variant="filled"
                        className="home-input"
                        name="location"
                        value={campData.location}
                        onChange={handleChange}
                    />

                    <Button variant="contained">Find Campground</Button>

            </div>

            {/* <CampForm campData={campData} /> */}


            <GoogleMap title={campData.title} location={campData.location ? campData.location : "Woodland Park, CO"} />

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