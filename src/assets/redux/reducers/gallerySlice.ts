import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction, StoreType } from '@redux/types/redux-types';

export type Slide = {
  title?: string,
  src: string,
};

export type Gallery = {
  currentIndex: number,
  shown: boolean,
  slides: Slide[],
};

const initialState: Gallery = {
  currentIndex: 0,
  shown: false,
  slides: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    changeSlide(state, action: ReduxAction<number>) {
      state.currentIndex = action.payload;
    },

    hideGallery(state, action: ReduxAction<undefined>) {
      state.shown = false;
    },

    showGallery(state, action: ReduxAction<undefined>) {
      state.shown = true;
    },

    setSlides(state, action: ReduxAction<Slide[]>) {
      state.slides = action.payload;
    },
  },
});

export default gallerySlice.reducer;
export const { changeSlide, hideGallery, showGallery, setSlides } =
  gallerySlice.actions;
export const initialGallery = gallerySlice.getInitialState();
