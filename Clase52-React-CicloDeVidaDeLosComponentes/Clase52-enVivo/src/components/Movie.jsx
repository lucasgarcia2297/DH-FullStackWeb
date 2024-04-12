import MovieList from './MovieList';
import React from "react";
// const movies = [
//     {
//         id: 1,
//         title: 'Titulo pelicula',
//         rating: 2,
//         awards: 3,
//         length: 4,
//     },
//     {
//         id: 2,
//         title: 'Titulo pelicula2',
//         rating: 4,
//         awards: 5,
//         length: 6,
//     }
// ];

class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moviesList: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/movies')
            .then(res => res.json())
            .then(movies => {
                this.setState({ moviesList: movies.data });
            }).catch(err => console.log(err));
    }
    
    render() {
        return (
            <>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">All the movies in the Database</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.moviesList.map((movie, i) =>
                                        <MovieList  {...movie} key={i} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Movie;