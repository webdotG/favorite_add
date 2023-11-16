import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'


const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store