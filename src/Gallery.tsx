import { CustomImage } from "./images";

export interface GalleryProps {
  onClick: (index: number, item: CustomImage) => void;
  images: CustomImage[];
}

export function Gallery({ onClick, images }: GalleryProps) {
  return (
    <div className="grid grid-cols-4 gap-1">
      {images.map((image, idx) => {
        <img
          className="w-50 h-50"
          src={image.original}
          onClick={() => onClick(idx, image)}
        />;
      })}
    </div>
  );
}
