window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color='white'
        titulo.style.backgroundColor  ='#333'
    })

    titulo.addEventListener('mouseleave', () => {
        titulo.style.color='black'
        titulo.style.backgroundColor  ='#f0f0f0'
    })


    let tituloFormulario = document.getElementById('titulo')

    let estadoSecreto=0;
  
    tituloFormulario.addEventListener('keyup', (e) =>{
        switch (estadoSecreto) {
            case 0:
                e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
        
            case 1:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 2:
                e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 3:
                e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 4:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 5:
                e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 6:
                e.key == "o" ? alert('SECRETO MÁGICO') : (estadoSecreto = 0);
                break;
            default:
                break;
        }
    })

    let formularioAdd = document.getElementById('formularioAdd');

    formularioAdd.addEventListener('submit',(event)=>{
      let errores=[];

      let rating = document.getElementById('rating');
      let premios = document.getElementById('premios');
      let año = document.getElementById('año');
      let duracion = document.getElementById('duracion');
      let genero = document.getElementById('genero');

      if (tituloFormulario.value == '') {
        errores.push('El campo titulo no puede estar vacío');
        tituloFormulario.classList.add('is-invalid');
      } else {
        tituloFormulario.classList.add('is-valid');
        tituloFormulario.classList.remove('is-invalid');
        formularioAdd.rating.focus();
      };
      if (rating.value <= 0 || rating.value > 10.0) {
        errores.push('El campo calificación no puede ser menor a cero ni mayor a 10');
        rating.classList.add('is-invalid');
      } else {
        rating.classList.add('is-valid');
        rating.classList.remove('is-invalid');
        formularioAdd.premios.focus();
      };
      if (premios.value <= 0 || premios.value > 10) {
        errores.push('El campo premios no puede ser menor a cero ni mayor a 10');
        premios.classList.add('is-invalid');
      } else {
        premios.classList.add('is-valid');
        premios.classList.remove('is-invalid');
        formularioAdd.año.focus();
      };
      if (año.value == "") {
        errores.push('El campo fecha de creación no puede estar vacio');
        año.classList.add('is-invalid');
      } else {
        año.classList.add('is-valid');
        año.classList.remove('is-invalid');
        formularioAdd.duracion.focus();
      };
      if (duracion.value < 60 || duracion.value > 360) {
        errores.push('El campo duración no puede ser menor a 60 ni mayor a 360 minutos');
        duracion.classList.add('is-invalid');
      } else {
        duracion.classList.add('is-valid');
        duracion.classList.remove('is-invalid');
        formularioAdd.genero.focus();
      };
      if (genero.value == '') {
        errores.push('El campo género no puede estar vacío');
        genero.classList.add('is-invalid');
      } else {
        genero.classList.add('is-valid');
        genero.classList.remove('is-invalid');
      };

     

      if (errores.length > 0) {
        event.preventDefault();
        let ulErrores = document.getElementById('errores');
        ulErrores.classList.add('alert-warning');
        ulErrores.innerHTML = '';
        for (let i = 0; i < errores.length; i++) {
          ulErrores.innerHTML += `<li >  ${errores[i]} </li>`;
        };
      } else {
        alert('Se agregó la pelicula.')
        formularioAdd.submit();
      }

    })
}