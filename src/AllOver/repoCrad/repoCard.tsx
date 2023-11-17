import { useState } from 'react'
import { useActions } from '../../hooks/actions'
import { typeRepositories } from '../../types/types'
import style from './repoCard.module.scss'
import { useAppSelector } from '../../hooks/redux'

function RepoCard({ repo }: { repo: typeRepositories }) {

  const { addFavorite, removeFavorite } = useActions()

  const { favorites } = useAppSelector(state => state.github)
  const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url))

  const addToFavorite = (event:  React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFavorite(true)
    // setIsFavorite(!isFavorite)
  }
  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavorite(repo.html_url)
    setIsFavorite(false)
    // setIsFavorite(!isFavorite)
  }

  return (

    <div className={style.repocard_wrapper}>
      <a href={repo.html_url} target='blank' >
        <h2>{repo.full_name}</h2>
        <p>Forks: <span>{repo.forks}</span></p>
        <p>Watchers: <span>{repo.watchers}</span></p>
        <p>{repo?.description}</p>
      </a>

      {!isFavorite && <button className={style.btn_favorite_add}
        onClick={addToFavorite}>
        ADD
      </button>
      }

      {isFavorite &&
        <button className={style.btn_favorite_remove}
          onClick={removeFromFavorite}>
          REMOVE
        </button>
      }
    </div>
  )
}

export default RepoCard