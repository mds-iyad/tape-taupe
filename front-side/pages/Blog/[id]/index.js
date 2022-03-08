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
                    <img height="400px" src={data.image} alt={data.name}/>
                    </Grid>

                    <Grid item>
                    <ul>
                        <li>Name: {data.name}</li>
                        <li>Species: {data.species}</li>
                        <li>{data.location.name}</li>
                    </ul>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}

export async function getStaticProps(context)
{
    const id  = context.params.id;
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const data = res.data;

    return{
        props: {
            data
        }
    }
}



export async function getStaticPaths()
{
    
    const res = await axios.get("https://rickandmortyapi.com/api/character/");
    const data = res.data;

    const paths = data.results.map((value) => ({
        params:{
            id: value.id.toString()
        }
    }))

    // console.log(paths);



    return{

        paths,
        fallback: false,

    }
}

