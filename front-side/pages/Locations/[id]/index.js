import { useRouter } from "next/router";
import Default from "../../../components/Layout/Default";
import axios from "axios";
import Container from '@mui/material/Container';
import Image from "next/image";
import { Grid } from "@mui/material";


export default function Id({data}) {
    const router = useRouter()
    // console.log(router)
    // console.log(data)
    return (
        <div>
            <Default></Default>
            
            <Container>
                <Grid container>
                    <Grid item>
                    
                    </Grid>

                    <Grid item>
                    <ul>
                        <li>Name: {data.name}</li>
                        <li>Type: {data.type}</li>
                        <li>Dimension: {data.dimension}</li>
                    </ul>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}

export async function getServerSideProps(context)
{
    const id  = context.params.id;
    const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)    
    const data = await res.json()

    return{
        props: {
            data
        }
    }
}



