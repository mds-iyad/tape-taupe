import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Game from '../components/tapeTaupe/'
import Default from '../components/Layout/Default'

export default function Home() {
  return (

    <Default>
        <div className={styles.container}>

        <Game nbTaupes={6}/>
        
        </div>
    </Default>
  )
}
