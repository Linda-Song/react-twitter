import './App.css'
import { Route,Routes,Navigate } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}></Route>

    </Routes>
   
  )
}

export default App
