import './App.css'
import LoginPage from './pages/LoginPage'
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
