import css from "./ImageCard.module.css";

export default function ImageCard({ url, description, id, isOpen }) {
  return (
    <div
      className={css.wrapper}
      id={id}
      onClick={() => {
        isOpen(id);
      }}
    >
      <img src={url} alt={description} className={css.img} />
    </div>
  );
}
