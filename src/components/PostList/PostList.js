import React from "react";

import PostListItem from "../PostListItem/PostListItem";

import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleLiked, onToggleImportant }) => {
  const elements = posts.map((el) => {
    return (
      <li className="list-group-item" key={el.id}>
        <PostListItem
          {...el}
          onDelete={() => onDelete(el.id)}
          onToggleImportant={() => onToggleImportant(el.id)}
          onToggleLiked={() => onToggleLiked(el.id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
