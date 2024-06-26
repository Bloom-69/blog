import Fuse from "fuse.js";
import { useState } from "react";
import "./style.css";

const options = {
  keys: ["data.title", "data.description", "data.slug"],
  includeMatches: true,
  minMatchCharLength: 0,
  threshold: 0.5,
};

export default function Search({ searchList }) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  const posts_search = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>
      <input
        className="search"
        type="text"
        onChange={handleOnSearch}
        placeholder="Search Post"
      />
      <div className="grid">
        {posts_search &&
          posts_search.map((post) => (
            <a className="results_link" href={`/blog/${post.slug}/`}>
              <div className="results_list">
                <h1>{post.data.title}</h1>
                <p>{post.data.description}</p>
              </div>
            </a>
          ))}
      </div>
    </>
  );
}
