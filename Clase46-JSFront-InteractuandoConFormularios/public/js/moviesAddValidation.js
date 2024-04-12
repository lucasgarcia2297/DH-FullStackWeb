window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
const form = document.querySelector("form.form");
const {title} = form;

const buttonReset = document.querySelector('button.botonAgregar');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});
// form.title; 
// title.addEventListener('input',(e)=>{
//     if(title.value == ''){
//         title.classList.add('is-invalid');
//     }else{
//         title.classList.add('is-valid');
//     }
//     title.addEventListener('blur',()=>{
//         title.classList.remove('is-valid')
//     });
// });

// buttonReset.addEventListener('reset', ()=>{

// });

title.focus();
const inputs = ['title','rating','awards','release_date','length'];
const pErrors = document.querySelectorAll('p.error_mensaje');

form.addEventListener('submit',(e)=>{
    const errors = [];
    
    pErrors.forEach(e => {
        e.innerHTML = '';
    });

    inputs.forEach(input =>{
        if(form[input].value.trim().length < 1){
            form[input].classList.add('is-invalid');
            errors.push({name: input, message: 'no puede ser vacío.'});
            e.preventDefault();
        }else{
            form[input].classList.add('is-valid');
            form[input].classList.remove('is-invalid');
        }
    });
    errors.forEach(error => {
        const errorP = document.getElementById(`error-${error.name}`);
        errorP.innerText = error.message;
    });

});


    inputs.forEach(input =>{
        form.addEventListener('input', ()=>{
            const errorP = document.getElementById(`${input}`);
            
            if(form[input].value.trim().length < 1){  
                form[input].classList.add('is-invalid');
                e.preventDefault();
            }else{
                errorP.innerHTML = '';
                form[input].classList.add('is-valid');
                form[input].classList.remove('is-invalid');
            }   
        })
    });
};
