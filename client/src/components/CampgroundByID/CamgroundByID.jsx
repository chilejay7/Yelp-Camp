import './CampgroundByID.css';
import { getCampgroundID } from '../../utils/api';
import { useState, useEffect } from 'react';

export default function CampgroundById() {

    const [campground, setCampground] = useState({});

    useEffect(() => {

        const location = window.location.href.split('/')
        const campID = location[4];

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
    }, []);

    return (
        <>
            <h2>Campground ID!</h2>

            {Object.keys(campground).length > 0 ? (
                <>
                    <p>Here is your campground...</p>
                    <p>{campground.title} - {campground.location}</p>
                </>
            ) : (
                <p>Loading...</p>
            )

            }

        </>
    )
};