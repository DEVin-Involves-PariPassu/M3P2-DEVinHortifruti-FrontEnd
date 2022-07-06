
import { legacy_createStore as createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import carrinho from './modules/carrinho/reducer'

const persistConfig = {
  key: '@dev_in_hortifruti_19990328',
  storage,
  whitelist: ['carrinho']
}

const reducers = combineReducers({
  carrinho
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

//const token =

export {store, persistor}
