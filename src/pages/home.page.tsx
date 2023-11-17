import { useEffect, useState } from "react"
import { useLazyGetUserRepositoriesQuery, useSearchUsersQuery } from "../STORE/github/github.api"
import { useDebounce } from "../hooks/debounce"
import style from './homepage.module.scss'

function HomePage() {
  const [search, setSearch] = useState('')
  const [dropSearch, setDropSearch] = useState(false)
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 1,
    refetchOnFocus: true,        //что бы автоматом делал запрос если давно не появлялся на странице
  })
  // console.log("DATA TRANSFORMRESPONSE : ", data)
  const [fetchRepositories, {isLoading: areRepositories, data: repositories }] = useLazyGetUserRepositoriesQuery()
  

  const clickHandler = (username: string) => {
    // console.log("USER NAME CLICK : ", username)
    fetchRepositories(username)
  }


  useEffect(() => {
    // console.log("DEBOUNCED : ", debounced)
    setDropSearch(debounced.length > 1 && data?.length! > 0)
  }, [debounced, data])

  
  return (
    <div className={style.homepage_wrapper} >
      {isError && <p>somthnig wrong error</p>}
      <h1>home</h1>
      <div className={style.search_wrapper}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder="search github user"
        />
        {dropSearch &&
          <ul className={style.dropSearch_wrapper}>
            {isLoading && <p>loading....</p>}
            {data?.map(user => (
              // {console.log('MAP.USER : ', user)}
              <li className={style.dropSearch_item}
                onClick={() => clickHandler(user.login)}
                key={user.id}>
                {user.login}
              </li>
            ))
            }
          </ul>
        }
      </div>
        <div className={style.repos_username_item}>
        {areRepositories && <p>repositories loading......</p>}
        { repositories?.map(repo => <p>{repo.url}</p>)}
        </div>
    </div>
  )
}

export default HomePage