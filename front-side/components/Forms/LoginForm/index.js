import React from "react";
import { Container, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send"
import { Box } from "@mui/system";
import axios from "axios";
import { useUser } from "../../../context/UserContext";


export default function LoginForm()
{
    const {setUser, setToken} = useUser();
    const { handleSubmit, control, formState: { errors } } = useForm();
    const logData = async (data) => 
    {
      console.log(data)
      axios.post("http://localhost:3000/auth/login",
        data
      ).then(function(response)
      {
        console.log(response);
        setToken(response.data.access_token)

      })
    }

    return(
      
      <Container sx={{
        dispaly:"flex",
        flexDirection: "column"
      }}>

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
      onSubmit={handleSubmit(logData)}
      >
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextField
            id="outlined-name"
            label="username"
            margin="dense"
            required
            {...field}
            />
          )}
        />
        {errors.username?.type === 'required' && "First name is required"}

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
            type="password"
            id="outlined-name"
            label="password"
            margin="dense"
            required
            {...field}
            />

          )}
          />

          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Login
          </Button>

        
        {/* <input type="submit" /> */}
        {/* </form> */}

        </Box>
      </Container>
    )
}


