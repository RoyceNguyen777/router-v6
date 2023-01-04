import { useContext } from 'react'
import { Link, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom'
import './App.css'
import { AboutContext } from './context/AboutContext'
import ContractRoutes from './ContractRoutes'
import About from './pages/About'
import Contract from './pages/Contract'
import Home from './pages/Home'
import NotFount from './pages/NotFount'

function App() {
  // location.hash
  // window.history.forward()

  const handleLogHash = () => {
    console.log(location.hash)
  }
  return (
    <>

      {/* <Routes location="/contract">
        <Route path='/contract' element={<h1>Same URL</h1>}></Route>
      </Routes> */}
      <nav>
        <ul onClick={handleLogHash}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contract">Contract</Link>
          </li>
        </ul>
      </nav>


      {/* <Routes >
        <Route path='/abc' element={<About />} />
      </Routes> */}


      <Routes>
        <Route index element={<Home />} />
        <Route path='/about/*' element={<About />} />
        <Route path='/contract/' element={<ContractRoutes />} />
        <Route path='/contract/:id' element={<Contract />} />
        <Route path='*' element={<NotFount />} />
      </Routes>
    </>
  )
}

export default App
