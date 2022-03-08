import Taupe from './Taupe.js'
import { useState } from 'react'
import { useEffect } from 'react'
import _ from 'lodash'
import Grid from '@mui/material/Grid'

const divstyle = {textAlign: "center"}

export default function Game({nbTaupes})
{
    // const [up, setUp] = useState(2)
    // useEffect( () => {
    //     setUp(_.random(0, nbTaupes-1))
    // }, [])

    const [up, setUp] = useState(null)
    const [score, setScore] = useState(0)
    const scorePlus = 2
    const scoreMinus = 2
    const scoreMiss = 1
    const [interval, setInterv] = useState(2000)
    

    useEffect( () => {
        
        const id = setTimeout(()=> {
            if(up == null)
            {
                setUp(_.random(0, nbTaupes-1))
            }
            else
            {
                setUp(null)
                setScore( score - scoreMiss)
                setInterv(interval + (Math.abs(score) * 10))
            }
        }, interval);
        return () => {
            clearTimeout(id)
        }

    }, [up])
    
    const taupes = new Array(nbTaupes).fill(true).map((id, index) => index)


    return(
        <div style={divstyle}>  
            <h2>Tape Taupe Game</h2>
            <h3>Score : {score}</h3>
            <h4>Interval : {interval}</h4>
            <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                {taupes.map((id) => {
                    const isUp = id == up
                    return <Grid key={id} item xs={4}>
                    <Taupe key={id} isUp={ id == up } onClick={ () => {
                        if (isUp) {
                            // setUp(_.random(0, nbTaupes-1))
                            setUp(null)
                            setScore(score + scorePlus)
                            setInterv(interval - (Math.abs(score) * 10))
                        }
                        else {
                            setScore(score - scoreMinus)
                            setInterv(interval + (Math.abs(score) * 10))
                        }
                        
                        
                    }}/>
                    </Grid>
                })}
            </Grid>

        </div>
    )
}