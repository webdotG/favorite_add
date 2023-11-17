import { typeRepositories } from '../../types/types'
import style from './repoCard.module.scss'

function RepoCard({ repo }: { repo: typeRepositories }) {

  return (
    <div className={style.repocard_wrapper}>
      <a href={repo.html_url} target='blank' >
        <h2>{repo.full_name}</h2>
        <p>Forks: <span>{repo.forks}</span></p>
        <p>Watchers: <span>{repo.watchers}</span></p>
        <p>{repo?.description}</p>
      </a>
    </div>
  )
}

export default RepoCard