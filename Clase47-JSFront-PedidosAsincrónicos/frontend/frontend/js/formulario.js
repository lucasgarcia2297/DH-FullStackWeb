window.onload = () => {
    //capturo el formulario
    const form = document.querySelector("form.formulario");

    //para capturar el QueryParams de la url
    const params = new URLSearchParams(window.location.search); 
    const movieId = params.get("movie_id");    
    fetch(`http://localhost:3031/api/movies/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            if(movie.data){
                //Si el formulario sería grande estaría mejor hacerlo de esta forma.
                for(const key in movie.data){
                    if(form[key]){
                        if(key === 'release_date'){
                            form[key].value = new Date(movie.data.release_date).toISOString().split('T')[0];
                        }else{
                            form[key].value = movie.data[key];
                        }
                    }
                }
                // OTRA FORMA (si el formulario es chico):
                // form.title.value = movie.data.title;
                // form.rating.value = movie.data.rating;
                // form.awards.value = movie.data.awards;
                // form.release_date.value = new Date(movie.data.release_date).toISOString().split('T')[0];
                // form.length.value = movie.data.length;
            }else{
                const error = document.createElement('h1');
                error.textContent = "Película no encontrada."
                form.innerHTML = ''; //limpiar el formulario
                form.appendChild(error);

            }
        })
        .catch(err => {
            console.log(err);
        })
}



window.onload = () => {
    //capturo el formulario
    const form = document.querySelector("form.formulario");
    //capturo el boton de editar
    const btnEdit = document.querySelector('button.botonEditar');

    //para capturar el QueryParams de la url
    const params = new URLSearchParams(window.location.search); 
    const movieId = params.get("movie_id");    
    fetch(`http://localhost:3031/api/movies/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            if(movie.data){
                //Si el formulario sería grande estaría mejor hacerlo de esta forma.
                // for(const key in movie.data){
                //     if(form[key]){
                //         if(key === 'release_date'){
                //             form[key].value = new Date(movie.data.release_date).toISOString().split('T')[0];
                //         }else{
                //             form[key].value = movie.data[key];
                //         }
                //     }
                // }

                // OTRA FORMA (si el formulario es chico):
                form.title.value = movie.data.title;
                form.rating.value = movie.data.rating;
                form.awards.value = movie.data.awards;
                form.release_date.value = new Date(movie.data.release_date).toISOString().split('T')[0];
                form.length.value = movie.data.length;
            }else{
                const error = document.createElement('h1');
                error.textContent = "Película no encontrada."
                form.innerHTML = ''; //limpiar el formulario
                form.appendChild(error);

            }
        })
        .catch(err => {
            console.log(err);
        });

        btnEdit.addEventListener('click', (event) => {
            event.preventDefault();
            const body = {
                title: form.title.value,
                rating: form.rating.value,
                awards: form.awards.value,
                release: form.release_date.value,
                length: form.length.value
            };
            fetch(`http//localhost:3031/api/movies/update${movieId}`,{
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(data => {
                    location.reload();
                })
                .catch(error=>{
                    console.log(error);
                });
        });
}