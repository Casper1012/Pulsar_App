import React, { useState } from 'react';
import { IOSSlider } from './CustomSlider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SliderCustom({ w, min, max }) {
  const [value, setValue] = useState(50); // Initial value of 50

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: w, padding: 2 }}>
        <IOSSlider
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="on"
            min={0}
            max={100}
            aria-label="iOS slider"
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mr: -3, ml: -2, mt: -1 }}>
            <Typography variant="body2" className='text-txDe' fontSize={16}>{min}</Typography>
            <Typography variant="body2" className='text-txDe' fontSize={16}>{max}</Typography>
        </Box>  
    </Box>
  );
}

export default SliderCustom;