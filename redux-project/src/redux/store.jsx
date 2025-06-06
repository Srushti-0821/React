// import { combineReducers, legacy_createStore } from "redux";
// import { reducer as AuthReducer } from "./Auth/reducer";
// import { reducer as Productreducer } from "./Products/reducer";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 
 

 
// const persistConfig = {
//   key: 'root',
//   storage,
// }
 


// const rootReducer = combineReducers({Auth:AuthReducer, Product:Productreducer})
// const persistedReducer = persistReducer(persistConfig, rootReducer)


// export const store =legacy_createStore(persistedReducer)
// export let persistor = persistStore(store)

import { combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as Productreducer } from "./Products/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Product: Productreducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer);
export const persistor = persistStore(store);