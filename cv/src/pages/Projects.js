import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../styles/Projects.css';

function Projects() {
  return (
    <div  style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    <Card sx={{ maxWidth: 345, margin: '1rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/345/140"
          alt="random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sample Computer Science Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            commodo massa. Integer maximus, mi id malesuada maximus, augue quam
            fringilla elit, vel pretium elit elit ut risus.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345, margin: '1rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/345/140"
          alt="random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sample Computer Science Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            commodo massa. Integer maximus, mi id malesuada maximus, augue quam
            fringilla elit, vel pretium elit elit ut risus.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345, margin: '1rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/345/140"
          alt="random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sample Computer Science Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            commodo massa. Integer maximus, mi id malesuada maximus, augue quam
            fringilla elit, vel pretium elit elit ut risus.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
    
  );
}

export default Projects;

