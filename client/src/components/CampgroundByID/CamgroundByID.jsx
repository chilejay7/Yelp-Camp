import './CampgroundByID.css';
import { getCampgroundID } from '../../utils/api';
import { useState, useEffect } from 'react';

const location = window.location.href.split('/')
const campID = location[4];

export default function CampgroundById() {

    const [campground, setCampground] = useState({});

    const findCamp = async () => {
        const response = await getCampgroundID(campID);
        const campData = await response.json();
        setCampground(campData);
    };

    useEffect(() => {
        findCamp();
    }, [])

    return (
        <>
            <h2>Campground ID!</h2>
            <p>Here is your campground...</p>
        </>
    )
}