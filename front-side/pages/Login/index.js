import { Button, Container, TextareaAutosize } from '@mui/material'
import { Box } from '@mui/system';
import Default from '../../components/Layout/Default'
import LoginForm from '../../components/Forms/LoginForm'
import CommentaireForm from '../../components/Forms/CommentaireForm'
import { useUser } from '../../context/UserContext'

export default function Login() {
  
  const {user, logOut} = useUser();
  console.log(user)

  return(
      <Default>
      

      <Container>

        {!user && <LoginForm /> }
        {user && 
          <Container style={{display:'flex', flexDirection:'column'}}>
            <Box style={{ display:'flex', justifyContent:'right' }}>
              <Button style={{width:200}} onClick={logOut}>Logout</Button>
            </Box>
          </Container>
        }
      </Container>
      </Default>
  )
}