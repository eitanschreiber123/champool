import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{width:"100vw",position:"relative",height:"clamp(50vh,70vh,90vh)"}}><Image src="/top.jpg"alt=""fill style={{ objectFit:"cover"}}priority/></div>
        <h1 style={{alignSelf:'center'}}>Comprar lo que deseas</h1>
        <section style={{alignSelf:'center',width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Batteria</h1>
            <div style={{display:'flex',width:'100%',justifyContent:'space-evenly',flexWrap:'wrap'}}>{[1, 2].map(d => <Image src={`/battery/${d}.jpeg`}alt=""width={400}height={400}/>)}</div>
            <Link href="https://wa.me/593961356570?text=Hola%20,quiero%20comprar%20una%20batteria!" style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Compra</Link>
          </div>

          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Computadora</h1>
            <div className={styles.firstGrid}>{[1, 2, 3, 4, 5, 6, 7, 8].map(d => <div className={styles.firstContainer}><Image src={`/computer/${d}.jpeg`}alt="" className={styles.firstImage}/></div>)}</div>
            <Link href="https://wa.me/593961356570?text=Hola%20,quiero%20comprar%20una%20computadora!"style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Compra</Link>
          </div>
          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Laptop</h1>
            <div className={styles.firstGrid}>{[1, 2, 3, 4, 5, 6, 7, 8].map(d => <div className={styles.firstContainer}><Image src={`/laptop/${d}.jpeg`}alt="" className={styles.firstImage}/></div>)}</div>
            <Link href="https://wa.me/593961356570?text=Hola%20,quiero%20comprar%20un%20laptop!"style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Compra</Link>
          </div>

          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Monitor</h1>
            <Image src="/monitor/so_many_monitors.jpeg"alt=""width={500}height={500}/>
            <Link href="https://wa.me/593961356570?text=Hola%20,quiero%20comprar%20un%20monitor!"style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Compra</Link>
          </div>

          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Partes</h1>
            <div className={styles.firstGrid}>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => <div className={styles.firstContainer}><Image src={`/partes/${d}.jpeg`}alt="" className={styles.firstImage}/></div>)}</div>
            <Link href="https://wa.me/593961356570?text=Hola%20,quiero%20cambiar%20algunas%20partes%20de%20mi%20computadora!"style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Compra</Link>
          </div>

          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>printer</h1>
            <Image src="/printer/printer.jpeg"alt=""width={500}height={500}/>
            <Link href="https://wa.me/593961356570?text=Hola%20,quiero%20comprar%20un%20printer!"style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Compra</Link>
          </div>
          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>No se</h1>
            <div className={styles.responsiveGrid}>{[1, 2, 3].map(d => <div className={styles.imageContainer}><Image src={`/dont/${d}.jpeg`}alt=""fill className={styles.image}/></div>)}</div>
            <Link href="https://wa.me/593961356570?text=Hola%20,quiero%20comprar%20algo!"style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px'}}>Compra</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
