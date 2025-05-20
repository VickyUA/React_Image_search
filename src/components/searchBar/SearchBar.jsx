import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { searchQuery } = form.elements;

    if (searchQuery.value.trim() === "") {
      toast.error("This is an error!");
      return;
    }
    onSearch(searchQuery.value);
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.btn}>
            <IoSearch className={css.reactIcons} size="20" />
          </button>
        </form>
      </header>
    </div>
  );
}
