
import { useAppSelector } from '../hooks/redux'
import style from './favoritepage.module.scss'

function FavoritePage() {

  const { favorites } = useAppSelector(state => state.github)

  if (favorites.length === 0) {
    <p>no favorite</p>
  }

  return (
    <div className={style.favorite_wrapper}>
      <ul className={style.favorite_list}>
        {favorites.map(f => (
          <li className={style.favorite_item} key={f}>
            <a href={f} target='blank'>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavoritePage