import Layout from "@/components/layout";
import Image from "next/image";
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
  return (
   <>
    
    <Layout 
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de musica">
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros'/>
           <div>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc vitae erat sit amet turpis congue cursus a et ligula. Aenean non neque vitae erat accumsan condimentum ut et tortor.
            Nam et tortor sagittis, lacinia dui sed, venenatis erat. Vestibulum pharetra ante vel diam molestie, at pellentesque tortor finibus.
            Nam et tortor sagittis, lacinia dui sed, venenatis erat. Vestibulum pharetra ante vel diam molestie, at pellentesque tortor finibus.
            </p>
            <p>
            Nam et tortor sagittis, lacinia dui sed, venenatis erat. Vestibulum pharetra ante vel diam molestie, at pellentesque tortor finibus. 
            Pellentesque varius nulla in sem iaculis efficitur. Nam commodo tellus ac ex rutrum pellentesque.
            Nam et tortor sagittis, lacinia dui sed, venenatis erat. Vestibulum pharetra ante vel diam molestie, at pellentesque tortor finibus.
            </p>
           </div>
         </div>
        
      </main>
    </Layout>
   </>
  )
}
