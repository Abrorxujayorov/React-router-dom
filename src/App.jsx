import './App.css'
import Nav from './components/header/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Earphones,Headpkones,Home,Speakers} from './pages'
import Error from './pages/Error'


function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/earphones' element={<Earphones/>}/>
        <Route path='/headphones' element={<Headpkones/>}/>
        <Route path='/speakers' element={<Speakers/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
