import SearchBar from "./SearchBar";

const Navbar = () => {
  const form = document.querySelector(".creation-form");
  const formHandler = () => {
    form.classList.contains("formHidden")
      ? form.classList.remove("formHidden")
      : form.classList.add("formHidden");
  };

  return (
    <nav className="nav">
      <SearchBar />
      <button className="nav_btn" onClick={formHandler}>
        +
      </button>
    </nav>
  );
};

export default Navbar;
