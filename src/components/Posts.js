import React from 'react';

export default function Posts({ loading, posts }) {
  if (loading) {
    return <p>loading ...</p>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="text-gray-700 font-semibold text-xl mb-2 border p-2">
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
