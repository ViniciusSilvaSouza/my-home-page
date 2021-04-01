import Head from 'next/head'
import styles from './home.module.scss';
import useClipboard from "react-use-clipboard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



export default function Home({ content }) {
  const [isCopied, setCopied] = useClipboard("vinicius@vsouza.tech");

  const handleClick = () => toast.success('E-mail Copiado para Clipboard!')

  return (
    <>
      <Head>
        <title>Vinicius Souza</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 🧑‍💻 Vinicius Souza </span>
          <h1>Desenvolvedor <span>FullStack</span>.</h1>
          <p>Redes sociais: <br />
          </p>
          <a onClick={() => window.open("https://www.linkedin.com/in/viniciussz/", "_blank")}>
            <img className={styles.icon} src="/images/linkedin.svg" alt="Linkedin Link" />
          </a>

          <a onClick={() => window.open("https://www.instagram.com/vini.https/", "_blank")}>
            <img className={styles.icon} src="/images/instagram.svg" alt="Intagram Link" />
          </a>
          <a onClick={() => window.open("https://api.whatsapp.com/send?phone=5521965655641&text=Ol%C3%A1!", "_blank")}>
            <img className={styles.icon} src="/images/whatsapp.png" alt="Whatsapp Link" />
          </a>
          <a onClick={handleClick}>

            <img className={styles.icon} src="/images/email.png" alt="E-mail clipboard" />
          </a>
          <ToastContainer />
        </section>
        <img className={styles.avatar} src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}




