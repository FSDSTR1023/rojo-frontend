export function groupRecipesByCategory(recipes) {
  if (!recipes || recipes.length === 0) {
    return {} // Retorna un objeto vacío si no hay recetas
  }

  return recipes.reduce((acc, recipe) => {
    recipe.categories.forEach((category) => {
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(recipe)
    })
    return acc
  }, {})
}
