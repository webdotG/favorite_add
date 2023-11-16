
import { useSearchUsersQuery } from "../STORE/github/github.api"

function HomePage () {

  const {data, isLoading, isError} = useSearchUsersQuery('jul')

  return (
    <>
    <h1>home</h1>
    </>
  )
}

export default HomePage