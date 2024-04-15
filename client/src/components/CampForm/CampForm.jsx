import { FormControl, TextField, Box, Button } from '@mui/material';
import './CampForm.css'

export default function CampForm({ campData, handleChange }) {

    console.log('The campData is:', campData);

    return (
        <>
            <TextField
                id="camp name"
                label="Campground Name"
                variant="filled"
                className="home-input"
                name="title"
                value={campData.title}
                onChange={handleChange}
            />

            <TextField
                id="camp location"
                label="Location"
                variant="filled"
                className="home-input"
                name="location"
                value={campData.location}
                onChange={handleChange}
            />
        </>
    )
}