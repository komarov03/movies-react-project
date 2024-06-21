import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  }

  searchFilm = (search, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search searchFilm={this.searchFilm} />
        {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
      </main>
    );
  }
}

export { Main };
