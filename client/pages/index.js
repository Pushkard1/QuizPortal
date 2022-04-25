import Head from 'next/head'
import PageWithJSbasedForm from './js-form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js forms</title>
        <meta name="description" content="Learn forms with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <PageWithJSbasedForm/>
        
      

      
    </div>
  )
}
