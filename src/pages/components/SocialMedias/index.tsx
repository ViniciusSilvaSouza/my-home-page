import { toast } from "react-toastify";
import styles from './styles.module.scss'
import useClipboard from "react-use-clipboard";

export function SocialMediaComponent() {
    const [isCopied, setCopied] = useClipboard("vinicius@vsouza.tech");

    const handleClick = () => toast.success('E-mail copiado para área de transferência')

    function handleCopyToClipboard() {
        setCopied();
        handleClick();
    }
    return (
        <>
            <a onClick={() => window.open("https://www.linkedin.com/in/viniciussz/", "_blank")}>
                <img className={styles.icon} src="/images/linkedin.svg" alt="Linkedin Link" />
            </a>

            <a onClick={() => window.open("https://www.instagram.com/vini.https/", "_blank")}>
                <img className={styles.icon} src="/images/instagram.svg" alt="Intagram Link" />
            </a>
            <a onClick={() => window.open("https://api.whatsapp.com/send?phone=5521965655641&text=Ol%C3%A1!", "_blank")}>
                <img className={styles.icon} src="/images/whatsapp.png" alt="Whatsapp Link" />
            </a>
            <a onClick={handleCopyToClipboard}>
                <img className={styles.icon} src="/images/email.png" alt="E-mail clipboard" />
            </a>
        </>
    )
}
