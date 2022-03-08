import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Game from '../components/tapeTaupe/'
import Link from 'next/link'
import Default from '../components/Layout/Default'

export default function Home() {
  return (
    <Default color={'red'}>
      <div className={styles.container}>
        <h1>Bienvenue</h1>
      </div>
    </Default>
  )
}
