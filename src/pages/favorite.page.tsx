import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

import style from './favoritepage.module.scss'

function FavoritePage() {
  const { removeFavorite } = useActions()
  const { favorites } = useAppSelector(state => state.github)


  // const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   removeFavorite()
  //   // setIsFavorite(!isFavorite)
  // }
  
  const favoriteItem = favorites.map(f => (
    <li className={style.favorite_item} key={f}>
            <a href={f} target='blank'>{f}</a>
            <button className={style.btn_favorite_remove}
              onClick={() => removeFavorite(f)}>
              REMOVE
            </button>
          </li>
  )) 

  if (favorites.length === 0) {
    <p>no favorite</p>
  }

  return (
    <div className={style.favorite_wrapper}>
      <ul className={style.favorite_list}>
        {favoriteItem}
        {/* {favorites.map(f => (
          <li className={style.favorite_item} key={f}>
            <a href={f} target='blank'>{f}</a>
            <button className={style.btn_favorite_remove}
              onClick={removeFromFavorite}>
              REMOVE
            </button>
          </li>
         ))}  */}
      </ul>
    </div>
  )

  
}

export default FavoritePage