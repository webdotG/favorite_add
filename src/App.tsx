import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/home.page'
import FavoritePage from './pages/favorite.page'

import './App.module.scss'
import Header from './AllOver/header/header'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/favorite_add' element={<HomePage />}/>
        <Route path='/favorite_add/favorites' element={<FavoritePage />}/>
      </Routes>
    </>
  )
}

export default App
