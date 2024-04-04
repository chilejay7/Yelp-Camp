import { useState, useEffect } from 'react';
import { FormControl, TextField, Box, Button } from '@mui/material';
import { createCampground } from '../../utils/api';
import CampForm from '../CampForm/CampForm';

export default function AddCamp() {

    const [campData, setCampData] = useState({ title: "", location: "" });

    const handleChange = (evt) => {

        const { name, value } = evt.target;

        setCampData(currData => {
            currData[name] = value;
            return { ...currData };
        });

    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await createCampground(campData);
        alert('Camp Form Submitted!');
        setCampData({ title: "", location: "" });
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

                <h2>Add a New Campground</h2>
                {/* <div>
                    <TextField id="title" color="secondary" label="Campground Title" variant="outlined" name="campTitle" value={campData.campTitle} onChange={handleChange} />
                </div>

                <div>
                    <TextField id="location" color="secondary" label="Campground Location" variant="outlined" name="campLocation" value={campData.campLocation} onChange={handleChange} />
                </div> */}

                <CampForm campData={campData} handleChange={handleChange} />

                <Button variant="contained" color="success" type="submit">
                    Add Campground
                </Button>
            </Box >

        </>
    )
}