function SearchBar({ onSearch }) {
  return (
    <input
      placeholder="Search by title or ingredient"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
