import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { typeServerResponse, typeUser } from '../../types/types'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  endpoints: build => ({
    searchUsers: build.query<typeUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 5
        }
      })
    }),
    transformResponse: (response: typeServerResponse<typeUser>) => response.items
      // console.log("RESPONSE TRANSFORMRESPONSE : ", response)
    
  })
})

export const {useSearchUsersQuery} = githubApi