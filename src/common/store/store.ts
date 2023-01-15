import { Action, AnyAction, combineReducers, configureStore, Store, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import StrapiSlice from '../slices/strapiSlice';

const combinedReducer = combineReducers({
  strapi: StrapiSlice,
});

export const store = () => configureStore({
  reducer: (state, action: AnyAction) => {
    if (action.HYDRATE) {
      return {
        ...state,
        ...action.payload,
      };
    } else {
      return combinedReducer(state,action);
    }
  },
});

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;


export const wrapper = createWrapper(store, { debug: false });