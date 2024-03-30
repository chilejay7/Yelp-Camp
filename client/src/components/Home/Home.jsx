import { useState, useEffect } from "react";
import { getCampgrounds } from "../../utils/api";
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './Home.css'

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
    }

    return (
        <>
            <div className='home-camps'>
                <h2>Campgrounds</h2>

                <Button variant="contained" onClick={handleSearch}>Find Campgrounds</Button>
                <Button variant="contained" onClick={clearSearch}>Clear Search</Button>
            </div>

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