import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { typeRepositories, typeServerResponse, typeUser } from '../../types/types'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchUsers: build.query<typeUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        }
      }),
      transformResponse: (response: typeServerResponse<typeUser>) => response.items
      // console.log("RESPONSE TRANSFORMRESPONSE : ", response)
    }),
    getUserRepositories: build.query<typeRepositories[], string >({
      query: (username: string) => ({
        url: `users/${username}/repos`
      })
    })
  })
})

export const {useSearchUsersQuery, useLazyGetUserRepositoriesQuery} = githubApi