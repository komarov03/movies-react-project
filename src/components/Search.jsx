import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchFilm(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchFilm(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) =>
              this.setState({
                search: e.target.value,
              })
            }
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchFilm(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              name="group1"
              type="radio"
              onChange={this.handleFilter}
              data-type="all"
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
              data-type="movie"
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
              data-type="series"
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
