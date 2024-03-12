import './CampgroundByID.css';
import { getCampgroundID } from '../../utils/api';
import { useState, useEffect } from 'react';

const location = window.location.href.split('/')
const campID = location[4];
console.log('The campID is:', campID);

export default function CampgroundById() {

    const [campground, setCampground] = useState({});

    useEffect(() => {
        const findCamp = async () => {
            try {
                const response = await getCampgroundID(campID);
                const campData = await response.json();
                setCampground(campData);
            } catch (err) {
                console.error('Unable to fetch campground:', err)
            }
            
        };
        
        findCamp();
    }, [campID]);

    console.log('The campground in state is:', campground);

    return (
        <>
            <h2>Campground ID!</h2>
            <p>Here is your campground...</p>
            <p>{campground.title} - {campground.location}</p>
        </>
    )
}