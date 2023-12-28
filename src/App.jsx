import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Explore from './pages/Explore/Explore'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import Register from './pages/Register/Register'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [recipes, setRecipes] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout user={user} isAuthenticated={isAuthenticated} />}>
          <Route index element={<Login />} />
          <Route
            path="/login"
            element={
              <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
            }
          />
          <Route
            path="/register"
            element={
              <Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
            }
          />
          <Route
            path="/explore"
            element={
              <Explore user={user} isAuthenticated={isAuthenticated} recipes={recipes} setRecipes={setRecipes} />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
