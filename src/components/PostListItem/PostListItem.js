import React, { Component } from "react";

import "./post-list-item.css";

class PostListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleLiked,
      onToggleImportant,
      like,
      important,
    } = this.props;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={onToggleImportant}>
            <i className="fas fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    );
  }
}

export default PostListItem;
