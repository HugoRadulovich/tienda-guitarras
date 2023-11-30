import Guitarra from "@/components/guitarra";
import Layout from "@/components/layout";
import Link from "next/link";
import styles from '../styles/grid.module.css'
import Post from "@/components/post";
import Curso from "@/components/curso";




export default function Home({guitarras,posts,curso}) {
  console.log(curso)
  return (
    <>
      <Layout
        title={'Inicio'}
        description="blog de musica, venta de guitarras y mas"
        >
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <div className={styles.grid}>
          {
              guitarras?.map(guitarra => (
                <Guitarra 
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                />
              ))
            }
          </div>
        </main>
        <Curso curso={curso}/>
        <section className="contenedor">
            <h2 className="heading">Blog</h2>
            <div className={styles.grid}>
              {posts?.map(post => (
                <Post key={post.id} post={post.attributes}/>
              ))}
            </div>
        </section>
      </Layout>
      
    </>
  )
}

export async function getStaticProps() {
  const urlGuitarrras = (`http://127.0.0.1:1337/api/guitarras?populate=imagen`)
  const urlPosts = (`http://127.0.0.1:1337/api/posts?populate=imagen`);
  const urlCurso = (`http://127.0.0.1:1337/api/curso?populate=imagen`);
  const [resGuitarras, resPosts,resCursos] = await Promise.all([
    fetch(urlGuitarrras),
    fetch(urlPosts),
    fetch(urlCurso),
  ])

  const [{data:guitarras}, {data:posts}, {data:curso}] = await Promise.all([
    resGuitarras.json(), resPosts.json(), resCursos.json(),
  ])

  return {
    props: {
      guitarras, 
      posts,
      curso
    }
  }

}