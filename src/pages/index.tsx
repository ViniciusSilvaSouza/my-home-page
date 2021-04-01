import Head from 'next/head'
import styles from './home.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import React from 'react';
import { SocialMediaComponent } from './components/SocialMedias';



export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Souza</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 🧑‍💻 Vinicius Souza </span>
          <h1>Desenvolvedor <span>FullStack</span>.</h1>
          <p>Contatos: <br />
          </p>
          <SocialMediaComponent />
        </section>
        <img className={styles.avatar} src="/images/avatar.svg" alt="Girl coding" />
      </main>
      <ToastContainer />
    </>
  )
}




