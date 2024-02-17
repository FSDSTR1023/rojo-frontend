import { getAllRecipes } from '../../api/recipe'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import styles from './Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const [linkRecipes, setLinkRecipes] = useState([])
  useEffect(() => {
    getAllRecipes().then((response) => {
      const sortedRecipes = response.data.toSorted(() => 0.5 - Math.random())
      const selectedRecipes = sortedRecipes.slice(0, 8)
      const linkedRecipes = sortedRecipes.slice(8, 11)
      setRecipes(selectedRecipes)
      setLinkRecipes(linkedRecipes)
    })
  }, [])

  return (
    <div>
      <section id={styles.hero}>
        <div className={styles.boxText}>
          <span>Sabemos que te importa tu alimentación...</span>
          <h1>
            EMPIEZA A COMER <br></br> DE MANERA SALUDABLE
          </h1>
        </div>
        <div className={styles.boxInput}>
          <p>Descarga ahora tus recetas favoritas!</p>
          <input type="search" placeholder="busca tu receta favorita ..." />
          <button className={styles.searchButton}>Buscar recetas</button>
        </div>
      </section>
      <div>
        <section id={styles.contenedor}>
          <div className={styles.caja}>
            <h3>Recetas Saludables</h3>
            <p>
              Encuentra recetas saludables y deliciosas para adelgazar y dietas que incluyen desayunos, almuerzos y
              cenas. Recetas más saludables con alto contenido en fibra y bajas en calorías. Gracias a tu alimentación
              conseguirás sentirte bien por dentro y por fuera.
            </p>
            <a href={`/recipe/${linkRecipes[0]?._id}`}>VER RECETAS</a>
          </div>
          <div className={styles.caja}>
            <h3>Recetas Energéticas</h3>
            <p>
              Descubre cómo preparar recetas llenas de nutrientes que te brindarán la energía necesaria para afrontar tu
              día. Desde batidos revitalizantes hasta ensaladas coloridas, encuentra opciones deliciosas que alimentarán
              tanto tu cuerpo como tu paladar.
            </p>
            <a href={`/recipe/${linkRecipes[1]?._id}`}>VER RECETAS</a>
          </div>
          <div className={styles.caja}>
            <h3>Recetas Variadas</h3>
            <p>
              Sumérgete en un festín de recetas saludables que ofrecen una amplia variedad de opciones. Desde opciones
              vegetarianas y veganas hasta platos con proteínas magras, encuentra inspiración para diversificar tu
              alimentación sin comprometer ni la salud ni el sabor.
            </p>
            <a href={`/recipe/${linkRecipes[2]?._id}`}>VER RECETAS</a>
          </div>
        </section>
      </div>
      <section id={styles.contenedorRecetas}>
        <h2>ÚLTIMAS RECETAS</h2>
        <div className={styles.contenedorGrid}>
          {recipes.length > 0 &&
            recipes.map((recipe) => (
              <div key={recipe._id} className={styles.item}>
                <RecipeCard id={recipe._id} recipe={recipe} />
              </div>
            ))}
        </div>
      </section>
      <div>
        <section id={styles.ventajas}>
          <div className={styles.ventajasWrapper}>
            <div className={styles.ventajasCaja}>
              <h1>NO TIENES TIEMPO PARA COCINAR?</h1>
              <p>
                Necesitas nuevas ideas para no caer en la monotonía? Te gustaría encontrar recetas sencillas y fáciles
                de preparar?
              </p>
            </div>
            <div className={styles.ventajasCaja}>
              <h1>NO BUSQUES MÁS!</h1>
              <p>
                Aquí encontrarás las mejores recetas saludables llenas de sabor para que puedas dar el giro que deseas a
                tu alimentación.
              </p>
            </div>
            <a className={styles.link} href="/register">
              Regístrate aquí!
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
