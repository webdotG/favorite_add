import { Link } from 'react-router-dom'

import style from './header.module.scss'


function Header() {

  return (
    <header>

      <nav className={style.header_nav}>
        <h3>git search</h3>
        <Link to='/favorite_add/'>home</Link>
        <Link to='/favorite_add/favorites'>fav</Link>
      </nav>
    </header>
  )
}
export default Header