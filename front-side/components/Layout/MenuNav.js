import Link from 'next/link'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useUser } from '../../context/UserContext';


export default function MenuNav()
{
  const {user, logOut} = useUser();
    return(
        // <div>
        //     <Link href="/">
        //         <a>Home</a>
        //     </Link>
        //     <Link href="/game">
        //         <a>Tape taupe</a>
        //     </Link>
        // </div>

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Button color="inherit">
                <Link passHref href={"/"}>
                  Home
                </Link>
              </Button>

              <Button color="inherit">
                <Link href={"/game"}>
                  Game
                </Link>
              </Button>
              
              <Button color="inherit">
                <Link href={"/Blog"}>
                  Blogs
                </Link>
              </Button>

            {!user && <Button color="inherit">
                <Link href={"/Login"}>
                  Login
                </Link>
              </Button>
            }
            {user && <Button color="inherit">
                <Link href={"/Comments"}>
                  Commentaire
                </Link>
              </Button>
            }

            {user && <Button color="inherit">
              <Link href={"/Products"}>
                Products
              </Link>
            </Button>
            }

            
          </Box>
          
          {user && <Box style={{float:'right'}}>
            <Button style={{color:'white'}} onClick={logOut}>Logout</Button>
          </Box> }
          
        

          </Toolbar>
        </AppBar>
      </Box>

    )
}