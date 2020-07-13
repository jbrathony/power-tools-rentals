import { createStore } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../../reducers/combineReducers'; // the value from combineReducers
import { parse, stringify } from 'flatted';

export const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState),
)

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  transforms: [transformCircular]
};

const pReducer = persistReducer(persistConfig, rootReducer);

function getWindow() {
  if (typeof window === 'undefined') {
    global.window = {}
  }
  return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const store = createStore(pReducer,
  getWindow()
);
export const persistor = persistStore(store);

