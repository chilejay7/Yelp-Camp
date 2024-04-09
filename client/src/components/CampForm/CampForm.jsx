import { FormControl, TextField, Box, Button } from '@mui/material';
import './CampForm.css'

export default function CampForm( { campData, handleChange } ) {

    console.log('The campData is:', campData);
    
    return (
        <>
            <div className="form-fields" id="form-fields">
                <TextField id="title" 
                color="secondary" 
                label="Campground Name" 
                variant="outlined" 
                name="title" 
                value={campData.title}
                onChange={handleChange}
                className="form-input"
                />
        
                <TextField id="location" 
                color="secondary" 
                label="Campground Location" 
                variant="outlined" 
                name="location" 
                value={campData.location} 
                onChange={handleChange} 
                className="form-input"
                />
            </div>
        </>
    )
}