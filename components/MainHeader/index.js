import styles from "./mainheader.module.css"

export default function MainHeader() {
  


    return (
      <div className={styles.container}>
        {/* <div className="image">
        <img src={"fer4.png"} width="150px"/>
      </div> */}
        <div className={styles.social}>
            <a href="https://github.com/nandamluz"> <img src={"github.png"} width="35px"/> </a>
            <a href="https://www.linkedin.com/in/fernanda-morais-520448261/"> <img src={"linkedin.png"} width="35px"/> </a>
            <a href="https://wa.me/5534993044459"> <img src={"whatsapp.png"} width="35px"/> </a>
        </div>
      </div>
    )
  }