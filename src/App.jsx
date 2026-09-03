import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter basename="/alaqad-platform">
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
