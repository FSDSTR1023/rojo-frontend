import { getAllRecipes } from '../../api/recipe'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import styles from './Home.module.css'
import { useState, useEffect } from 'react'
// import { RecipeCard } from '../../components/RecipeCard/RecipeCard'

export default function Home() {
  const [recipes, setRecipes] = useState({})
  useEffect(() => {
    getAllRecipes().then((response) => setRecipes(response.data))
  }, [])
  console.log(recipes)
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
            <a href="">VER RECETAS</a>
          </div>
          <div className={styles.caja}>
            <h3>Recetas Energéticas</h3>
            <p>
              Descubre cómo preparar recetas llenas de nutrientes que te brindarán la energía necesaria para afrontar tu
              día. Desde batidos revitalizantes hasta ensaladas coloridas, encuentra opciones deliciosas que alimentarán
              tanto tu cuerpo como tu paladar.
            </p>
            <a href="">VER RECETAS</a>
          </div>
          <div className={styles.caja}>
            <h3>Recetas Variadas</h3>
            <p>
              Sumérgete en un festín de recetas saludables que ofrecen una amplia variedad de opciones. Desde opciones
              vegetarianas y veganas hasta platos con proteínas magras, encuentra inspiración para diversificar tu
              alimentación sin comprometer ni la salud ni el sabor.
            </p>
            <a href="">VER RECETAS</a>
          </div>
        </section>
      </div>
      <section id={styles.contenedorRecetas}>
        <h2>ÚLTIMAS RECETAS</h2>
        <div className={styles.contenedorGrid}>
          {recipes?.length > 0 &&
            recipes?.slice(0, 8).map((recipe) => (
              <div className={styles.item}>
                {/* <RecipeCard id={recipe._id} recipe={recipe} /> */}
                <p id={recipe._id} recipe={recipe}>
                  {recipe.title}
                </p>
              </div>
            ))}
        </div>
      </section>
      <div>
        <section id={styles.ventajas}>
          {/* <img src={alimentos} alt="" /> */}
          <div>
            <div className={styles.ventajasCaja}>
              <h1>NO TIENES TIEMPO PARA COCINAR?</h1>
              <p>
                Necesitas nuevas ideas para no caer en la monotonía? Te gustaría encontrar recetas sencillas y fáciles
                de preparar?
              </p>
            </div>
          </div>
          <div className={styles.ventajasCaja}>
            <h1>NO BUSQUES MÁS!</h1>
            <p>
              Aquí encontrarás las mejores recetas saludables llenas de sabor para que puedas dar el giro que deseas a
              tu alimentación.
            </p>
            <button>Regístrate aquí!</button>
          </div>
        </section>
      </div>
    </div>
  )
}
