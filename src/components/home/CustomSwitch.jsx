import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const PinkSwitch = styled(Switch)(({ theme }) => ({
    
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: `rgba(135, 88, 255, 1)`,
    '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: `rgba(44, 44, 53, 1)`,
    },
    }));

export default function ColorSwitches({ onChange }) {
  return (
    <>
      <PinkSwitch defaultChecked onChange={onChange} />
    </>
  );
}