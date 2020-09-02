import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _, { times, filter } from 'lodash';
import { Link, NavLink } from 'react-router-dom';
import SearchBox from './searchBox';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        searchQuery: "",
        selectedGenre: null,
        currentPage: 1,
        pageSize: 4,
        sortColumn: {
            path: 'title',
            order: 'asc'
        }
     }

    componentDidMount() {
        const genres = [{_id: '', name: "All Movies"}, ...getGenres()];

        this.setState({
            movies: getMovies(),
            genres,
        });
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);

        this.setState({
            movies
        })
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;

        this.setState({
            movies
        })
    }

    handlePageChange = (page) => {
        this.setState({
            currentPage: page,
        })
    }

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            searchQuery: "",
            currentPage: 1,
        })
    }

    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        });
    }

    getPagedData = () => {
        const { pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn, searchQuery } = this.state;
        
        // const filtered = (selectedGenre && selectedGenre._id) ? allMovies.filter(m => m.genre._id ===  selectedGenre._id) : allMovies;
        let filtered = allMovies;

        if(searchQuery) 
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if(selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    
        const movies = paginate(sorted, currentPage, pageSize);

        return {
            data: movies,
            totalCount: filtered.length
        }
    }

    handleSearch = (query) => {
        this.setState({
           searchQuery: query,
           selectedGenre: null,
           currentPage: 1
        })
    }

    render() { 
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

        if(count === 0)
            return <p>There are no movies in the database</p>     

        const { totalCount, data: movies } = this.getPagedData();

        return ( 
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre} 
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                
                <div className="col">
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{marginBottom: 20}}
                    >New Movie</Link>
                    <p>Showing {totalCount} movies int the database.</p>
                    
                    <SearchBox value={searchQuery} onChange={this.handleSearch}  />

                    <MoviesTable 
                        movies={movies} 
                        onLike={this.handleLike} 
                        sortColumn={sortColumn}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />

                    <Pagination 
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>                
            </div>
         );
    }
}
 
export default Movies;