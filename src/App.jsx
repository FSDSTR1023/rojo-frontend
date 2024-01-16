import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import Register from './pages/Register'
import Users from './pages/Users/Users'
import Recipe from './pages/Recipe'
import { ProfileProvider } from './context/ProfileContext'

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  )
}

export default App
