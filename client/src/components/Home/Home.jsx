import { useState, useEffect } from "react";
import { getCampgrounds, googleMapSearch } from "../../utils/api";
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import './Home.css'
import GoogleMap from "../GoogleMap/GoogleMap";

export default function Campgrounds() {

    const [campgrounds, setCampgrounds] = useState([]);

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

    return (
        <>

            <div className='home-camps'>
                <h2>Campgrounds</h2>

                <Button variant="contained" onClick={handleSearch}>Find Campgrounds</Button>
                <Button variant="contained" onClick={clearSearch}>Clear Search</Button>
            </div>

            <div className="search-fields">
                <TextField id="filled-basic" label="Campground Name" variant="filled" className="home-input" />
                <TextField id="filled-basic" label="Location" variant="filled" className="home-input" />
            </div>


            <GoogleMap location="Estes Park, CO" />

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