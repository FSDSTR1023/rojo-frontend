import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import Explore from './pages/Explore/Explore'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import Register from './pages/Register'
import Users from './pages/Users/Users'
import Recipe from './pages/Recipe'

function App() {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [recipes, setRecipes] = useState(null)
  const [userProfile, setUserProfile] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              user={user}
              setUser={setUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        >
          <Route path="*" element={<Navigate to="/" />} />
          {isAuthenticated ? (
            <Route path="/" element={<Navigate to="/explore" />} />
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
