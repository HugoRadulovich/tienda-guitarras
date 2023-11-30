import Layout from "@/components/layout";
import Image from "next/image";
import styles from '../../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers";


export default function Post({post}) {
    const {titulo,contenido,url,publishedAt,imagen} = post[0].attributes
  
   
  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} width={1000} height={400}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido[0].children[0].text}</p>
            </div>
        </article>
    </Layout>
  )
}


export async function getServerSideProps({query: {url} }) {
    console.log(url)
    const respuesta = await fetch(`http://127.0.0.1:1337/api/posts?filters[url]=${url}&populate=imagen`);
    const {data: post} = await respuesta.json();
  console.log(post)

    return {
       props: {post}
    }
}
