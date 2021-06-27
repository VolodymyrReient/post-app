import React, { Component } from "react";

import "./filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "All" },
      { name: "liked", label: "Liked" },
    ];
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const activeClass = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${activeClass}`}
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default Filter;
