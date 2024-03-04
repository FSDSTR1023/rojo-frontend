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
import Home from './pages/Home'
import CreateRecipe from './pages/CreateRecipe/CreateRecipe'
import EditRecipe from './pages/CreateRecipe/EditRecipe'

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/recipe/:id"
              element={
                <RecipeProvider>
                  <Recipe />
                </RecipeProvider>
              }
            />

            <Route element={<ProtectedRoutes />}>
              <Route path="/explore" element={<Explore />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/recipe/create" element={<CreateRecipe />} />
              <Route path="/recipe/edit/:id" element={<EditRecipe />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  )
}

export default App
