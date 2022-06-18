import React from 'react';
import { Stack } from '@mui/material';
import { MutatingDots } from 'react-loader-spinner';


const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%" >
        <MutatingDots color='grey' />
    </Stack>
  )
}

export default Loader