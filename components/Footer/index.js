import styles from "./footer.module.css"

export default function Footer() {
  


    return (
      <div className={styles.container}>
        
        
        <div className={styles.social}>
        <h1>Minhas redes</h1>
            <a href="https://github.com/nandamluz"> <img src={"github.png"} width="30px"/> </a>
            <a href="https://www.linkedin.com/in/fernanda-morais-520448261/"> <img src={"linkedin.png"} width="30px"/> </a>
            <a href="https://wa.me/5534993044459"> <img src={"whatsapp.png"} width="30px"/> </a>
        </div>
      </div>
    )
  }