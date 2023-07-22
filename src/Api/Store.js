import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { kinopoiskApi } from './Api'

export const store = configureStore({
  reducer: {
    [ kinopoiskApi.reducerPath ] : kinopoiskApi.reducer
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

setupListeners(store.dispatch)