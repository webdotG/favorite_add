import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'
import {setupListeners} from '@reduxjs/toolkit/query'
import githubSlice from './github/github.slice'


const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubSlice
  },
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(githubApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>

export default store

setupListeners(store.dispatch)

