import Head from 'next/head'
import PageWithJSbasedForm from './js-form'
import styles from '../styles/Home.module.css'
import { getSession } from 'next-auth/react'
import Login from './login'


export default function Home() {
 

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js forms</title>
        <meta name="description" content="Learn forms with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Login/>
      
      

      
    </div>
  )
}


