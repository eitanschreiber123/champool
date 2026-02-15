import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{width:"100vw",position:"relative",height:"clamp(50vh,70vh,90vh)"}}><Image src="/top.jpg"alt=""fill style={{ objectFit:"cover"}}priority/></div>
        <h1 style={{textAlign:'center'}}>Qualquier cosa, nosotros arreglamos</h1>
        <section style={{display:'flex',width:'100%',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1>Computaora</h1>
          <Image src={`/computer/4.jpeg`}alt=""width={400}height={400}/>
          <Link href="https://wa.me/593961356570?text=Hola%20,me%20puede%20arreglar%20mi%20computadora!" style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Contacto</Link>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1>Monitor</h1>
          <Image src={`/monitor/so_many_monitors.jpeg`}alt=""width={400}height={400}/>
          <Link href="https://wa.me/593961356570?text=Hola%20,me%20puede%20arreglar%20mi%20monitor!" style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Contacto</Link>
        </div>
        </section>
      </main>
    </div>
  );
}