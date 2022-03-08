import Default from '../../components/Layout/Default'
import Link from 'next/link'
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function Blog({data}) {
  return (
    
    <div>
        <Default>
        </Default>

        <Container>
        <h1>Blogs</h1>
        <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        >
                
                <Grid item>
                    <Link href="Blog/Characters">
                        <a>Characters</a>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="/Locations">
                        <a>Locations</a>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="Blog/c">
                        <a>Page C</a>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}







