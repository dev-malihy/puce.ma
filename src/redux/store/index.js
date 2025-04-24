import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import settingsReducer from "../reducer/settingSlice";
import sliderReducer from '../reducer/sliderSlice';
import categoryReducer from '../reducer/categorySlice'
import userReducer from '../reducer/userSlice';
import BreadcrumbPathReducer from '../reducer/breadCrumbSlice'
import CurrentLanguageReducer from '../reducer/languageSlice'
import locationReducer from '../reducer/locationSlice';
import offerReducer from '../reducer/offerSlice';
import searchReducer from "../reducer/searchSlice"
import globalStateReducer from '../reducer/globalStateSlice';
import filterReducer from '../reducer/filterSlice'
const persistConfig = {
  key: 'root',
  storage,
  manualPersisting: true,
};
const rootReducer = combineReducers({
  Settings: settingsReducer,
  Slider: sliderReducer,
  Category: categoryReducer,
  UserSignup: userReducer,
  BreadcrumbPath: BreadcrumbPathReducer,
  CurrentLanguage: CurrentLanguageReducer,
  Location: locationReducer,
  OfferData: offerReducer,
  Search: searchReducer,
  GlobalState: globalStateReducer,
  Filter: filterReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
export const persistor = persistStore(store);
