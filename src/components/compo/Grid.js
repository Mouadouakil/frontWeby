import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from './Card'


export default function ResponsiveGrid({data}) {
  return (
    <Box sx={{ flexGrow: 5 }}>
      <Grid container spacing={{ xs: 1, md: 7 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
           <Card data={data}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
