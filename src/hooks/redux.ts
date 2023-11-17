import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from '../STORE'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 