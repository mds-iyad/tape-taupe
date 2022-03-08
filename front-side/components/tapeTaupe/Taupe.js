import Button from '@mui/material/Button';

export default function Taupe({isUp, onClick})

{

    return(

        <Button onClick={onClick}>
            {isUp && <img src="/taupeUp.png" alt="taupe" height={72}/>}
            {!isUp && <img src="/taupeDown.png" alt="sol" height={72}/>}
            
        </Button>
    )
}