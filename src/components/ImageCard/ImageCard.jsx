import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div className={css.wrapper}>
      <img src={image.urls.small} alt={image.description} className={css.img} />
    </div>
  );
}
