import { Link } from 'react-router-dom'

import style from './header.module.scss'


function Header() {

  return (
    <header>

      <nav className={style.header_nav}>
        <h3>git search title</h3>
        <Link to='/'>home</Link>
        <Link to='/favorites'>fav</Link>
      </nav>
    </header>
  )
}
export default Header