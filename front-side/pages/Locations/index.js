import Default from '../../components/Layout/Default'
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

export default function locations({data})
{
    // console.log(data)
    return(
        <div>
            <Default></Default>
        
            <Container>
            <ul>
            <Grid container direction="column" alignItems="flex-start" spacing={2}>
                {data.results.map((location) => {
                    return(
                        <Link href={`/Locations/${location.id}`} key={location} passHref>
                            <Button>
                                <Grid item>
                                    <li>{location.name}</li>
                                </Grid>
                            </Button>
                        </Link>
                    ) 
                })}
            </Grid>
            </ul>
            </Container>
        </div>
  );
}



export async function getServerSideProps() 
{
    const res = await fetch("https://rickandmortyapi.com/api/location/")    
    const data = await res.json()

    if(!data)
    {
        return{
            notFound: true,
        }
    }

    return {
      props: {
          data
      },
    }
}







