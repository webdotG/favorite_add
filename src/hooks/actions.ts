import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { addFavorite, removeFavorite } from '../STORE/github/github.slice'

const actions = {
  addFavorite,
  removeFavorite
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}