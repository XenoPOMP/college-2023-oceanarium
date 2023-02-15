import { changeSlide, hideGallery, setSlides, showGallery, Slide } from "@redux/reducers/gallerySlice";
import { useDispatch } from "react-redux";

export type UseGalleryHook = [
  openGallery: (index: number) => void,
  closeGallery: () => void
];

const useGallery = (slides: Slide[]): UseGalleryHook => {
  const dispatch = useDispatch();

  const open = (index: number) => {
    // Show gallery
    dispatch(showGallery());
    // Set slides to best photos
    dispatch(setSlides(slides));
    // Change index
    dispatch(changeSlide(index))
  };

  const close = () => {
    dispatch(hideGallery());
  }

  return [
    open,
    close
  ];
}

export default useGallery;