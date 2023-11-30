import Image from "next/image";
import styles from '../../styles/guitarras.module.css'
import Layout from "@/components/layout";
import { useState } from "react";


export default function Producto({guitarra,agregarCarrito}) {
   
    const [cantidad, setCantidad] = useState(0)
    const {nombre,descripcion,precio,imagen} = guitarra[0].attributes;


    const handleSubmit = (e) => {
      e.preventDefault();
      if (cantidad < 1) {
        alert("Cantidad no valida!");
        return
      }

    // Construir un objeto 
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    console.log(guitarraSeleccionada)
    agregarCarrito(guitarraSeleccionada)

    }

  return (
    <Layout
      title={`Guitarra ${nombre}`}
      >
      <div className={styles.guitarra}>
          <Image src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400}/>
          <div className={styles.contenido}>
              <h3>{nombre}</h3>
              <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
              <p className={styles.precio}>${precio}</p>
              <form onSubmit={handleSubmit} className={styles.formulario}>
                <label htmlFor="cantidad">Cantidad:</label>
                <select onChange={e => setCantidad(parseInt(e.target.value))} id='cantidad'>
                  <option value='0'> --- Seleccione --- </option>
                  <option value='1'> 1 </option>
                  <option value='2'> 2 </option>
                  <option value='3'> 3 </option>
                  <option value='4'> 4 </option>
                  <option value='5'> 5 </option>

                </select>
                <input type='submit' value='Agregar al carrito'/>
              </form>
          </div>
      </div>    
    </Layout>
    
  )
}

// export async function getServerSideProps({query: {url} }) {
//     console.log(url)
//     const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${url}&populate=imagen`);
//     const {data: guitarra} = await respuesta.json();
  

//     return {
//        props: {guitarra}
//     }
// }

export async function getStaticPaths(){
  const respuesta = await fetch('http://127.0.0.1:1337/api/guitarras')
  const {data} = await respuesta.json();
  console.log(data)
  const paths = data.map(guitarra => ({
    params: {
      url:guitarra.attributes.url
    }
  }))

  return{
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params: {url} }) {
  const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${url}&populate=imagen`);
  const {data: guitarra} = await respuesta.json();
  return {
     props: {guitarra}
  }
}