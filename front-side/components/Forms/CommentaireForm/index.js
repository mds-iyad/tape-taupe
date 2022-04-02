import React from "react"
import { useUser } from "../../../context/UserContext";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from 'next/router';
import axios from "axios";


export default function CommentaireForm()
{
    const router = useRouter();
    const {setUser, setToken, token, user} = useUser();
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const commentData = async (data) => 
    {
      console.log(data)
       axios.post("http://localhost:3000/messages",
        {
            content: data.content,
            name: user
        },
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
       ).then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
    }

    return(

    
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center"
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(commentData)}
        >
            <TextField
                id="content"
                label="Commentaire"
                multiline
                rows={4}
                defaultValue=""
                style={{width: 400}}
                {...register("content")}
                />

            {errors.content?.type === 'required' && "A comment is required"}

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Envoyer
            </Button>

        </Box>

    )

}