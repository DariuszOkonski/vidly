import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like'
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';


class Movies extends Component {
    state = {  
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
    }
    
    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: getGenres()
        })
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
        movies[index].liked = !movie.liked;

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
        console.log('handleGenreSelect: ' + genre);
    }

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies} = this.state;

        if(count === 0)
            return <p>Ther are no movies in the database</p>

        const movies = paginate(allMovies, currentPage, pageSize);
        
        return (  
            <div className="row">
                <div className="col-2">
                    <ListGroup 
                        items={this.state.genres} 
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                
                <div className="col">
                    <p>Showing {count} movies in the database.</p>            
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(movie => (
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <Like 
                                                liked={movie.liked} 
                                                onClick={() => this.handleLike(movie)}
                                            />
                                        </td>
                                        <th><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <Pagination 
                        itemsCount={count} 
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