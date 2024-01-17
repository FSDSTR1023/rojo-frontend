import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { RecipeProvider } from './context/RecipeContext'
import Login from './pages/Login'
import Explore from './pages/Explore/Explore'
import Profile from './pages/Profile/Profile'
import Layout from './components/Layout'
import Register from './pages/Register'
import Users from './pages/Users/Users'
import Recipe from './pages/Recipe'
import { ProfileProvider } from './context/ProfileContext'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Navigate to="/explore" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/explore" element={<Explore />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route
                path="/recipe/:id"
                element={
                  <RecipeProvider>
                    <Recipe />
                  </RecipeProvider>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileProvider>

  )
}

export default App
