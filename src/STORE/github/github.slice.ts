import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface typeGithubState {
  favorites: string[],
}

const LS_FAV_KEY = 'reactfavoritekey'

const initialState: typeGithubState ={
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {

    addFavorite(state, action: PayloadAction<string>){
      state.favorites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
    },

    removeFavorite(state, action: PayloadAction<string>){
      state.favorites = state.favorites.filter(f => f!== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
    }

  }
})

export const {addFavorite, removeFavorite} =githubSlice.actions

export default githubSlice.reducer