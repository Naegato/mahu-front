import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { getStrapiClient } from '../client/strapiClient';

export const fetchStrapiContent = createAsyncThunk(
  'strapi/fetchData',
  async ({ type, element, id = null }: { type: string, element: string, id?: number }, { getState }) => {
    switch (type) {
      case 'single':
        return await getStrapiClient().single(element);
      default:
        break;
    }
  },
  {
    condition: ({ type, element, id }, { getState }) => {
      if (selectStrapiContent(getState(), type, element, id)) {
        return false;
      }
    }
  }
);

export const strapiSlice = createSlice({
  name: 'strapi',
  initialState: {
    single: {},
    collection: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStrapiContent.fulfilled, (state, { meta, payload }) => {
      if (payload !== undefined) {
        switch (meta.arg.type) {
          case 'single':
            state.single[meta.arg.element] = payload.data.attributes;
            break;
          default:
            break;
        }
      }
    });
  }
});

export const selectStrapiContent = (globalState, type, element, id = null) => createSelector(
  (state) => state.strapi,
  (state) => state?.single?.[element]
  // return type === 'single' ? state.single?.[element]
  //   : (id ? state.collections?.[element]?.[id] : (selectStrapiCollection(globalState, element)?.data || []));

)(globalState);

export const selectStrapiCollection = (state, element) => {
  const data = state.collection?.[element];
  return !data ? null : {
    meta: data.meta,
    data: data.ids.map((id: number) => selectCollectionItemById(state, element, id))
  };
};

export const selectCollectionItemById = (state, element: string, id: number) => state.strapi.collections?.[element]?.[id];

export default strapiSlice.reducer;