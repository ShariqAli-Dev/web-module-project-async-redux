import { Card, CardActionArea, Typography } from '@material-ui/core';

export default function Cat(props) {
  const { cat } = props;
  console.log(cat.url);
  return (
    <Card>
      <CardActionArea>
        <img style={{ height: 200 }} src={cat.url} alt='cat' />
        <Typography gutterBottom variant='h5' component='h2'>
          Cat {cat.id}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          Cats are a widespread group of demons, with over 6k species randing
          all over the isle of hell
        </Typography>
      </CardActionArea>
    </Card>
  );
}
