import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
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
          <h2>{data.title}</h2><br></br>
          <h5>{data.description} Panoplie d’engagement diversifiée
            Partagez votre caméra, créez des sondages et des enquêtes, posez et répondez aux questions en direct ou dessinez </h5>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><h3><Link to={`/event/${data.id}`} key={data.id} style={{ textDecoration: 'none' }}>Voir Plus</Link></h3></Button>
      </CardActions>
    </Card>
  );
}