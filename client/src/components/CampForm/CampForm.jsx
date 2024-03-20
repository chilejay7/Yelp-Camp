import { useState, useEffect } from 'react';
import { FormControl, TextField, Box, Button } from '@mui/material';

export default function CampForm() {

    const [campData, setCampData] = useState({ campTitle: "", campLocation: "" });

    const handleChange = (evt) => {
        console.log('Target name:', evt.target.name);
        const newValue = evt.target.value;
        const updatedField = evt.target.name;

        setCampData(currData => {
            currData[updatedField] = newValue;
            return { ...currData };
        });

    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert('Camp Form Submitted!');
        setCampData({ campTitle: "", campLocation: "" });
    };

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="campTitle" value={campData.campTitle} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="campLocation" value={campData.campLocation} onChange={handleChange}></input>
                </div>
                <button>Submit</button>
            </form> */}

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
                    <div>
                        <TextField id="title" color="secondary" label="Campground Title" variant="outlined" name="campTitle" value={campData.campTitle} onChange={handleChange} />
                    </div>

                    <div>
                        <TextField id="location" color="secondary" label="Campground Location" variant="outlined" name="campLocation" value={campData.campLocation} onChange={handleChange} />
                    </div>
                    <Button variant="contained" color="success" type="submit">
                        Submit
                    </Button>
                </Box >
            
        </>
    )
}