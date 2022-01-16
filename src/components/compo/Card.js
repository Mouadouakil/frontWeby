import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function ImgMediaCard({data}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={data.picture}
        
      />
      <CardContent>
      
        <Typography variant="body2" color="text.secondary">
          <h1>{data.title}</h1>
          <h3>{data.description}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="large"><a href={data.link}>Le ien de Webinair</a></Button>
      </CardActions>
    </Card>
  );
}