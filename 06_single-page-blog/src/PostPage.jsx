/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";
import { useParams, Link } from "react-router-dom";

export default function PostPage() {
  const {
    posts: [posts, setPosts],
    handleDelete
  } = useOutletContext();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that&apos;s disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}
