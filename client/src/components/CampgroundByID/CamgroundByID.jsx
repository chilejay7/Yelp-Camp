import GoogleMap from '../GoogleMap/GoogleMap';
import { getCampgroundID } from '../../utils/api';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link, NavLink, useParams } from 'react-router-dom';
import './CampgroundByID.css';


export default function CampgroundById() {

    const [campground, setCampground] = useState({});

    // The useParams hook is more effective when using React than splitting the window location href property.
    // const location = window.location.href.split('/')
    // const campID = location[4];
    const { id } = useParams();

    useEffect(() => {

        const findCamp = async () => {
            try {
                const response = await getCampgroundID(id);
                const campData = await response.json();
                setCampground(campData);
            } catch (err) {
                console.error('Unable to fetch campground:', err)
            }

        };

        findCamp();
    }, []);

    const handleClick = (evt) => {
        evt.preventDefault();
        alert('I was clicked!');
    }

    return (
        <>
            <h2>{campground.title}</h2>

            {Object.keys(campground).length > 0 ? (
                <>
                    <p>Here is your campground...</p>
                    <p>{campground.title} - {campground.location}</p>

                    <NavLink to={`/campgrounds/${campground._id}/edit`}>
                        <Button variant="contained">Edit Campground</Button>
                    </NavLink>
                </>


            ) : (
                <p>Loading...</p>
            )

            }

            <GoogleMap location={campground.location} />

        </>
    )
};