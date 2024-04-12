import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Posts from './components/Posts';
import Filter from './components/Filter';
import Purchase from './components/Purchase';
import Checkout from './components/Checkout';
import Footer from './components/Footer';



function App() {
 const [token,setToken] = useState('')
 let imageStyle = {
  height: '200px',
  width: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  
 }


  return (
    <>
    <div className='headerImg' style={imageStyle}>
    <h1>Young Thrifter</h1> 
    </div>
    
    <NavBar/>
    <Routes>
      <Route path='/filter' element={<Filter/>}/>
      <Route path='/' element={<Posts/>}/>
      <Route path='/home' element={<Posts/>}/>
      <Route path='/purchase' element={<Purchase/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Login setToken={setToken}/>} />
      <Route path='/signup' element={<Signup token={token} setToken={setToken}/>} />

    </Routes>
      
    <Footer/>
    </>
  )
}

export default App
