import { useState, useEffect } from "react";
import { getCampgrounds } from "../../utils/api";
import Button from '@mui/material/Button';

export default function Campgrounds() {

    const [campgrounds, setCampgrounds] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await getCampgrounds();
        const data = await response.json();
        setCampgrounds(data);
        console.log('Campgrounds:', campgrounds)
    }

    useEffect(() => {
        const initialData = async () => {
            const response = await getCampgrounds();
            const data = await response.json();
            setCampgrounds(data);
            console.log('Campgrounds:', campgrounds)
        }
        initialData();
    }, []);


    return (
        <>
            <h2>Campgrounds</h2>

            <Button variant="contained" onClick={handleSearch}>Find Campgrounds</Button>

            <ul>
                {campgrounds.map(camp =>
                    <li key={camp._id}>{camp.title} - {camp.location}</li>
                )}
            </ul>
        </>

    )
}