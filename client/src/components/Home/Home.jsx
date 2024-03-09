import { useState, useEffect } from "react";
import { getCampgrounds } from "../../utils/api";
import Button from '@mui/material/Button';

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
            <div className='campgrounds'>
                <h2>Campgrounds</h2>

                <Button variant="contained" onClick={handleSearch}>Find Campgrounds</Button>
                <Button variant="contained" onClick={clearSearch}>Clear Search</Button>

                <ul>
                    {campgrounds.map(camp =>
                        <div key={camp._id}>
                            <li>{camp.title} - {camp.location}</li>
                            <Button href={`/campgrounds/${camp._id}`} variant="contained">View {camp.title}</Button>
                        </div>

                    )}
                </ul>
            </div>

        </>

    )
}