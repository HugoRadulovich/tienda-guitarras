import Guitarra from "@/components/guitarra";
import Layout from "@/components/layout";
import styles from '../styles/grid.module.css'



export default function Tienda({guitarras}) {
  // useEffect(() => {
  //   const consultarApi = async () => {
  //     try {
  //       const  data  = await fetch('http://localhost:1337/api/guitarras?populate=imagen')
  //       const respuesta = await data.json()
  //       console.log(respuesta)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   consultarApi()
  // }, [])
  
  
  return (
   <>
    
    <Layout 
      title={'Tienda Virutal'}
      description="Tienda virtual, venta de guitarrasa, instrumentos, GuitarLA">
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
    </Layout>
   </>
  )
}


// export async function getStaticProps() {
//   const resp =  await fetch(`http://127.0.0.1:1337/api/guitarras?populate=*`);
//   const {data:guitarras} = await resp.json();
//   return {
//       props: {
//         guitarras
//       },
//   }
// }

export async function getServerSideProps() {
  const resp =  await fetch(`http://127.0.0.1:1337/api/guitarras?populate=*`);
  const {data:guitarras} = await resp.json();
  return {
      props: {
        guitarras
      },
  }
}