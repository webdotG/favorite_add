
import { useSearchUsersQuery } from "../STORE/github/github.api"
import style from './homepage.module.scss'
function HomePage() {

  const { data, isLoading, isError } = useSearchUsersQuery('jul')
  // console.log("DATA TRANSFORMRESPONSE : ", data.items)
  return (
    <div className={style.homepage_wrapper} >
      
      {isError && <p>somthnig wrong error</p>}
      
      <h1>home</h1>

    <div className={style.search_wrapper}>
      <input type="text" 
      placeholder="search github user"
      />
      <div className={style.dropSearch_wrapper}>
        search drop
      </div>
    </div>

    </div>
  )
}

export default HomePage