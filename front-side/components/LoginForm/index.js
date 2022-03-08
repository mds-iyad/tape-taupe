import React from "react";
import { Container, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send"
import { Box } from "@mui/system";
import axios from "axios";


export default function LoginForm()
{

    const { handleSubmit, control, formState: { errors } } = useForm();
    const logData = async (data) => 
    {
      axios.post("http://localhost:3000/auth/login",{
        data
      }).then(function(response)
      {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
            id="outlined-name"
            label="username"
            onBlur={onBlur}
            onChange={onChange}
            margin="dense"
            required
            />
          )}
        />
        {errors.username?.type === 'required' && "First name is required"}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
            type="password"
            id="outlined-name"
            label="password"
            onBlur={onBlur}
            onChange={onChange}
            margin="dense"
            required
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


