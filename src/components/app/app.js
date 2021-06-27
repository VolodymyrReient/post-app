import React, { Component } from "react";
import nextId from "react-id-generator";

import Header from "../Header/Header";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to lear React",
          important: true,
          like: false,
          id: nextId(),
        },
        {
          label: "That is so good",
          important: false,
          like: false,

          id: nextId(),
        },
        {
          label: "I need a break...",
          important: false,
          like: false,
          id: nextId(),
        },
      ],
      term: "",
      filter: "all",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  }
  addItem(content) {
    const newItem = {
      label: content,
      important: false,
      id: nextId(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArr };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArr };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  onUpdateSearch(term) {
    this.setState({ term });
  }

  filterPost(items, filter) {
    switch (filter) {
      case "liked":
        return items.filter((item) => item.like);
      default:
        return items;
    }
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    const liked = this.state.data.filter((item) => item.like).length;
    const allPost = this.state.data.length;
    const visiblePost = this.filterPost(
      this.searchPost(this.state.data, this.state.term),
      this.state.filter
    );

    return (
      <div className="app">
        <Header liked={liked} allPost={allPost} />
        <div className="search-panel d-flex">
          <Search onUpdateSearch={this.onUpdateSearch} />
          <Filter
            filter={this.state.filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePost}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
