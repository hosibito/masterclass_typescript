import { useLocation } from "react-router";

function Search() {
  const location = useLocation();

  console.log(location)

  console.log(location.search)

  const keyword = new URLSearchParams(location.search).get("keyword");

  console.log(keyword);

  return null;
}
export default Search;

