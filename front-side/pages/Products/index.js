import Default from "../../components/Layout/Default";
import { Container, Grid, Button, Modal, Box, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Link from "next/link";

export default function Products({data})
{
    const style = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const { register, handleSubmit, control, formState: { errors } } = useForm();


    const UpdateProduct = async (data,id) =>
    {
        console.log(id)
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (

        <Default>
            <Container>
            <Link passHref href="Products/Add">
                <Button>
                    Add Products
                </Button>
            </Link>
                <ul>
                    <Grid container direction="column" alignItems="flex-start" spacing={2}>
                        {data.map((product) => {
                            return(
                                <Grid key={product._id} item>
                                    
                                    <Button onClick={handleOpen}>Modifier ce produit</Button>
                                    <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    >
                                        <Box
                                        component="form"
                                        sx={style}
                                        noValidate
                                        autoComplete="off"
                                        onSubmit={handleSubmit(UpdateProduct(product._id))}
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
                                    </Modal>


                                    <li>{product.name}</li>
                                    <li>{product.content}</li>
                                    <li>{product.price}</li>
                                    <li>{product.stock}</li>
                                    <li>{product.description}</li>
                                </Grid>
                            ) 
                        })}
                    </Grid>
                </ul>

            </Container>



        </Default>
    )
}



export async function getServerSideProps() 
{
    const res = await fetch("http://localhost:3000/products")    
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