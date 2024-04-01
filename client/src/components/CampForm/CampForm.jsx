import { FormControl, TextField, Box, Button } from '@mui/material';

export default function CampForm( { campData, handleChange } ) {

    console.log('The campData is:', campData);
    return (
        <>
            <div>
                <TextField id="title" 
                color="secondary" 
                label="Campground Title" 
                variant="outlined" 
                name="title" 
                value={campData.title}
                onChange={handleChange} 
                />
            </div>

            <div>
                <TextField id="location" 
                color="secondary" 
                label="Campground Location" 
                variant="outlined" 
                name="location" 
                value={campData.location} 
                onChange={handleChange} 
                />
            </div>
        </>
    )
}