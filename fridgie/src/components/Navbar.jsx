import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="nav">
      <SearchBar />
      <button className="nav_btn">+</button>
    </nav>
  );
};

export default Navbar;
