import Default from '../../../components/Layout/Default'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Link from 'next/link';

export default function characters({data})
{
    return(
        <div>
            <Default></Default>
        
            <Container>
            <Grid container spacing={2}>
            {data.map((character) => {
                return(
                    <Grid key={character} item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={character.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {character.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link passHref href={`/Blog/${character.id}`}>Learn More</Link>
                        </CardActions>
                        </Card>
                    </Grid>
                ) 
            })}
            </Grid>
            </Container>
        </div>
  );
}
export async function getStaticProps()
{

    // Promise
    // axios.get('https://rickandmortyapi.com/api/character/43')
    // .then(res =>  
    //     {
    //         return{
    //             status: res.status,
    //         };
    //     })
    // .catch((err) => {
    //     console.error(err);
    // });

    //  Fetch
    // const res = await fetch(`https://rickandmortyapi.com/api/character/43`)
    // const data = await res.json();
    // if(!data)
    // {
    //     return{
    //         notFound: true,
    //     }
    // }

    //  Async
    const res = await axios.get("https://rickandmortyapi.com/api/character/");
    const data = res.data;

    const mapped = data.results.map((perso) => {
        return{
            name: perso.name,
            image: perso.image,
            id: perso.id,
        }
    })


    return{
        props: {
            data: mapped
        }
    }
}



