import css from "./ImageCard.module.css";

export default function ImageCard({ url, description }) {
  return (
    <div className={css.wrapper}>
      <img src={url} alt={description} className={css.img} />
    </div>
  );
}
