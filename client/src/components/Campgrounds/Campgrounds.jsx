import { useState, useEffect } from "react";
import { getCampgrounds } from "../../utils/api";
import Button from '@mui/material/Button';
import './Campgrounds.css';

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
    }

    useEffect(() => {
        loadCampgrounds();
    }, []);


    return (
        <>
            <div className="campgrounds">
                <h2>Campgrounds</h2>

                <ul>
                    {campgrounds.map(camp =>
                        <div key={camp._id} className="camp-div">
                            <li>{camp.title} - {camp.location}</li>
                            <Button href={`/campgrounds/${camp._id}`} variant="contained">View {camp.title}</Button>
                        </div>

                    )}
                </ul>
            </div>

        </>

    )
}