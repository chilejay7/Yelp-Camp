import { useEffect, useState } from "react";
import CampForm from '../CampForm/CampForm';
import { getCampgroundID } from "../../utils/api";
import { FormControl, TextField, Box, Button } from '@mui/material';

export default function EditCamp() {

    const [campground, setCampground] = useState({});

    // const [campgroundData, setCampData] = useState({ title: "", location: "" });

    useEffect(() => {

        const location = window.location.href.split('/')
        const campID = location[4];

        console.log('Camp Id', campID)

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

    const handleChange = (evt) => {

        const newValue = evt.target.value;
        const updatedField = evt.target.name;

        setCampground(currData => {
            currData[updatedField] = newValue;
            return { ...currData };
        });

    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert('Edited Information submitted!');
        setCampground({});
    };

    return (

        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"

                onSubmit={handleSubmit}
            >
                <h2>
                    Edit Campground
                </h2>

                <CampForm campData={campground} handleChange={handleChange} />





                <Button variant="contained" color="success" type="submit">
                    Update Campground
                </Button>
            </Box >
        </>



    )
}