/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";
import Feed from "./Feed";

export default function Home() {
  const {
    // posts: [posts, setPosts]
    searchResults: [searchResults, setSearchResults]
  } = useOutletContext();

  return (
    <main className="Home">
      {searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}
    </main>
  );
}
