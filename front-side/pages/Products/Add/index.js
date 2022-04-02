import { Container, Grid, Button, Modal, Box, TextField, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Default from "../../../components/Layout/Default"
import { useUser } from "../../../context/UserContext"


export default function Add()
{
    const style = {
        display: 'flex',
        flexDirection: 'column',
    }

    const {setUser, setToken, token, user} = useUser();
    console.log(token);
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const AddProduct = async (data) => 
    {
    // console.log(data)
        axios.post("http://localhost:3000/products",
        data,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        ).then(function(response)
        {
        console.log(response);
        })
    }

    return(
        <Default>
            <Container>
                <Box
                component="form"
                sx={style}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(AddProduct)}
                >
                    <TextField
                    type="name"
                    id="outlined-name"
                    label="Name"
                    margin="dense"
                    required
                    {...register("name")}
                    />

                    <TextField
                    type="content"
                    id="outlined-name"
                    label="Content"
                    margin="dense"
                    required
                    {...register("content")}
                    />

                    <TextField
                    type="description"
                    id="outlined-name"
                    label="description"
                    margin="dense"
                    required
                    {...register("description")}
                    />

                    <TextField 
                    name="price"
                    label="Price"
                    margin="dense"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    {... register("price")}
                    />

                    <TextField 
                    name="stock"
                    label="Stock"
                    margin="dense"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    {... register("stock")}
                    />

                    <Button margin="dense" type="submit" variant="contained" endIcon={<SendIcon />}>
                    Envoyer
                    </Button>

                </Box>
            </Container>
        </Default>
    )
}
