import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/*" element={<AppContent />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
