import { useState, useCallback } from "react";

function SearchMovies(){

	const [movies, setMovies] = useState([{
			"Title": "Parchís",
			"Year": "1983",
			"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
		},
		{
			"Title": "Brigada en acción",
			"Year": "1977",
			"Poster": "N/A"
		},
	]);

	const [keyword, setKeyword] = useState(['garfield']);

	// const keyword = useRef('PELÍCULA DEMO');

	// Credenciales de API
	const apiKey = '716fbff2'; // Intenta poner cualquier cosa antes para probar


	const handleSearch = useCallback((event) => {
		event.preventDefault();
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
			.then(res => res.json())
			.then(data => {
				if(data.Search) {
					setMovies(data.Search);
				}
				if(data.Error) {
					setMovies([]);
				}
			})
			.catch(err => console.log(err));
	},[keyword]);
	

	// useEffect(() => {
	// 	console.log('ComponentDidMount'); 
	// },[]);
	// useEffect(() => {
	// 	console.log('ComponentDidMount'); 
	// },[keyword]);

	//Para empezar a buscar a partir de 3 letras
	// const handleOnChangeInput = (event) => { 
	// 	setKeyword(event.target.value);
	// 	if(keyword.length >= 3){
	// 		console.log(event.target.value)
	// 	}
	// };

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form onSubmit={handleSearch}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" onChange={(event) => setKeyword(event.target.value)}/>
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword.current}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
