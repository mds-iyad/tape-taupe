import { Box } from "@mui/system"
import Default from "../../components/Layout/Default"
import { Container } from "@mui/material"
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {useSocket} from "../../context/SocketContext";
import { useCallback, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';

export default function Comments({data})
{
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newMessages, setNewMessages] = useState([])
    const socket = useSocket();
    const addMessage = useCallback((message) => {
    setNewMessages([...newMessages, message])
    console.log(message);
    }, [newMessages]);
    useEffect(() => {
        socket.on("addMessage", addMessage);
        return () => {
          socket.off("addMessage", addMessage);
        };
      }, [addMessage, socket]);
    return(

        <Default>
            <Container>
                <Link passHref href="Comments/Add">
                    <Button>
                        Add messages
                    </Button>
                </Link>
                {console.log(data)}
                <ul>
                    <Grid container direction="column" alignItems="flex-start" spacing={2}>
                        {data.map((commentaire) => {
                            return(
                                <Grid style={{display:'flex'}} key={commentaire._id} item>
                                    <Box>
                                        <li>{commentaire.name}</li>
                                        <li style={{width: 250}}>{commentaire.content}</li>
                                    </Box>
                                    <Button onClick={handleOpen}><EditIcon/></Button>
                                </Grid>
                            ) 
                        })}
                        {newMessages.map( (message) => {
                            return( 
                            <Grid style={{display:'flex'}} key={message._id} item>
                                <Box>
                                    <li>{message.name}</li>
                                    <li style={{width: 250}}>{message.content}</li>
                                </Box>
                                <Button onClick={handleOpen}><EditIcon/></Button>
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
    const res = await fetch("http://localhost:3000/messages")    
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