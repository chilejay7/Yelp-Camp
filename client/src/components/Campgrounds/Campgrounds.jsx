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

    // useEffect(async () => {
    //     const data = await getCampgrounds();
    //     console.log(data);
    //     setCampgrounds(data);
    // }, []);


    return (
        <>
            <h2>Campgrounds</h2>

            <Button onClick={handleSearch}>Search Campgrounds</Button>

            <ul>
                {campgrounds.map(camp =>
                    <li key={camp.id}>{camp.title}</li>
                )}
            </ul>
        </>

    )
}