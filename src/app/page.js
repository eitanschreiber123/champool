import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{width:"100vw",position:"relative",height:"clamp(50vh,70vh,90vh)"}}><Image src="/top.jpg"alt=""fill style={{ objectFit:"cover"}}priority/></div>
        <h1 style={{alignSelf:'center',textAlign:'center',fontSize:'3em'}}>Champool</h1>
        <Link href="https://www.facebook.com/profile.php?id=100078679338122&locale=es_LA"><h1>Síguenos en Facebook</h1></Link>
        <section style={{alignSelf:'center',textAlign:'center'}}>
          <h1 style={{fontSize:'3em'}}>Que Quieres?</h1>
          <div style={{display:'flex'}}>
            <Link className={styles.link} href="/buy">Comprar</Link>
            <Link className={styles.link} href="/fix">Arreglar</Link>
          </div>
        </section>
        <section className={styles.responsiveGrid}>
  <div className={styles.imageContainer}>
    <Image src="/promo/ad.jpeg" alt="" fill className={styles.image} />
  </div>

  <div className={styles.imageContainer}>
    <Image src="/promo/hold_card.jpeg" alt="" fill className={styles.image} />
  </div>

  <div className={styles.imageContainer}>
    <Image src="/promo/screenshot.jpeg" alt="" fill className={styles.image} />
  </div>

  <div className={styles.imageContainer}>
    <Image src="/promo/side_card.jpeg" alt="" fill className={styles.image} />
  </div>

  <div className={styles.imageContainer}>
    <Image src="/promo/sticker.jpeg" alt="" fill className={styles.image} />
  </div>

  <div className={styles.imageContainer}>
    <Image src="/promo/store_front.jpeg" alt="" fill className={styles.image} />
  </div>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><video width="320" controls preload="none"><source src="/promo/promo_video.mp4" type="video/mp4" /></video></div>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><video width="320" controls preload="none"><source src="/promo/promo_video_2.mp4" type="video/mp4" /></video></div>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><video width="320" controls preload="none"><source src="/promo/promo_video_3.mp4" type="video/mp4" /></video></div>
</section>

        <section style={{alignSelf:'center',textAlign:'center'}}>
          <h1 style={{fontSize:'3em'}}>Que Quieres?</h1>
          <div style={{display:'flex'}}>
            <Link className={styles.link} href="/buy">Comprar</Link>
            <Link className={styles.link} href="/fix">Arreglar</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
