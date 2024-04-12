window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //clase 45 microdesafio 1

    titulo.addEventListener('mouseover', () => {
        const colores = ['red', 'yellow', 'blue', 'green', 'violet'];
        const indexColorRandom = Math.round(Math.random() * colores.length);
        titulo.style.color = colores[indexColorRandom];
    })

    const inputTitulo = document.getElementById('titulo');
    let estadoSecreto = 0;

    inputTitulo.addEventListener('keyup', (e) => {
        const palabra = 'secreto';

        // if (e.key == palabra[estadoSecreto]) {
        //     estadoSecreto++;
        //     console.log(estadoSecreto);
        // } else {
        //     estadoSecreto = 0;
        //     inputTitulo.value = ''
        //     alert('NO VA!!')
        // }

        palabra[estadoSecreto] === e.key ? estadoSecreto++ : (estadoSecreto = 0, inputTitulo.value = '', alert('NO VA!!'));

        if (estadoSecreto === palabra.length) {
            estadoSecreto = 0;
            alert('SECRETO MAGICO!!')
        }
    })
}