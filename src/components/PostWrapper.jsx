import { useState, useEffect } from "react";
import fetchSportsNews from "../data/NewsAPI.js";

function PostsWrapper() {
  const [posts, setPosts] = useState([]); // State to store posts

  useEffect(() => {
    async function getArticles() {
      const articles = await fetchSportsNews(); // Fetch articles
      setPosts(articles); // Update state with fetched articles
    }

    getArticles(); // Call the async function
  }, []); // Dependency array ensures this runs only once

  if (posts.length === 0) {
    console.log("Posts are empty, still loading..."); // Debugging message
    return <p>Loading articles...</p>;
  }

  return (
    <div className="posts-wrapper">
      {posts.map((post, index) => (
        <div className="post-card" key={index}>
          <img src={post.urlToImage} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>
            <strong>Author:</strong> {post.author || "Unknown"}
          </p>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
      <style jsx>{`
        .posts-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding: 1rem;
        }
        .post-card {
          width: 300px;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          background: #fff;
        }
        .post-card img {
          width: 100%;
          height: auto;
        }
        .post-card h3 {
          margin: 0.5rem 0;
          font-size: 1.2rem;
        }
        .post-card p {
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}

export default PostsWrapper;
