import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, isOpen }) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              url={image.urls.small}
              description={image.description}
              id={image.id}
              isOpen={isOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
