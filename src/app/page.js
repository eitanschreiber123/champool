import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{width:"100vw",position:"relative",height:"clamp(50vh,70vh,90vh)"}}><Image src="/top.jpg"alt=""fill style={{ objectFit:"cover"}}priority/></div>
        <h1 style={{alignSelf:'center',textAlign:'center',fontSize:'3em'}}>Champool</h1>
        <h1>Síguenos</h1>
        <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}} className={styles.social}>
          <Link href="https://www.facebook.com/profile.php?id=100078679338122&locale=es_LA">
            <svg width="50" height="50" viewBox="0 0 20 20" fill="black"><path d="M10.821 20v-9h2.733l.446-4h-3.179V5.052C10.821 4.022 10.847 3 12.287 3h1.458V.14C13.745.097 12.492 0 11.226 0 8.58 0 6.923 1.657 6.923 4.7V7H4v4h2.923v9h3.898z"/></svg>
          </Link>
          <Link href="https://www.tiktok.com/@hugochompol223?_r=1&_t=ZS-94284ozaCYh">
          <svg xmlns="http://www.w3.org/2000/svg"width="50"height="50"viewBox="0 0 32 32">
  <path fill="#69C9D0"d="M20.54 4.05h-3.25v16.57c0 .58 0 1.14-.2 1.7-.33.9-1.03 1.7-1.96 2.06-1.4.54-2.49.48-3.8-.34a4.5 4.5 0 0 1-.84-.78c1.11.57 2.1.56 3.34.08.93-.36 1.63-1.17 1.96-2.06.2-.56.2-1.12.2-1.7V3h4.5c0 .4-.05.8.05 1.05z"/>
  <path fill="#EE1D52"d="M8.45 19.79c.16-1.29.69-2.01 1.69-2.76 1.43-1.01 3.22-.44 3.22-.44v-3.37c.43-.01.86.02 1.29.08v4.34s-1.79-.57-3.22.44c-1 .74-1.53 1.47-1.69 2.76 0 .95.24 2.3 1.58 3.2a5 5 0 0 1-.46-.26c-1.34-.9-1.58-2.25-1.59-3.19z"/>
  <path fill="#000000"d="M26.7 9.91v3.33s-1.58-.06-2.75-.36c-1.63-.42-2.68-1.05-2.68-1.05s-.72-.45-.78-.48v8.79c0 .49-.13 1.71-.54 2.73-.53 1.33-1.35 2.21-1.5 2.39 0 0-1 1.18-2.77 1.98-1.59.72-2.99.7-3.41.72 0 0-2.42.1-4.59-1.31-.69-.45-1.3-1.04-1.8-1.72-.69-.85-1.11-1.85-1.22-2.14-.17-.5-.53-1.69-.48-2.84.09-2.04.8-3.29.99-3.6.5-.86 1.15-1.62 1.93-2.26.68-.55 1.45-.99 2.29-1.3.9-.36 1.87-.55 2.85-.57v3.38s-1.79-.57-3.22.44c-1 .74-1.53 1.47-1.69 2.76 0 .95.24 2.3 1.58 3.2.16.1.31.18.46.26.23.3.52.56.84.78 1.31.82 2.4.88 3.8.34.93-.36 1.63-1.17 1.96-2.06.2-.56.2-1.12.2-1.7V4.05h3.25c.13.76.5 1.85 1.49 2.93.39.41.83.77 1.32 1.07.14.15.87.88 1.81 1.33.49.23 1 .41 1.53.53z"/>
</svg>
          </Link>
          <Link href="https://www.instagram.com/wilfrido_chompool?igsh=ZXk3OGQ3aTl3MTVh">
            <svg xmlns="http://www.w3.org/2000/svg"width="50"height="50"viewBox="0 0 24 24"fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"fill="#0F0F0F"/>
</svg>
          </Link>
        </div>
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
