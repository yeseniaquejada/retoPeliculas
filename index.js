import { datos } from './data/data.js';

const items = document.getElementById('items');
const item = document.getElementById('item');
const contenedorFormulario = document.querySelector('#formulario')
let arreglo = [];
const templateCard = document.getElementById('template-card').content;
const templateCard2 = document.getElementById('template-card2').content;
const templateCard3 = document.getElementById('template-card3').content;

const fragment = document.createDocumentFragment();
document.addEventListener('DOMContentLoaded', () => {
    loadData(datos);
})


// codigo tarjetas
const loadData = datos => {
    datos.forEach(pelicula => {
        const { id, name, image } = pelicula;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('name', name);
        templateCard.querySelector('img').setAttribute('src', image);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
}

// codigo hacer click en la tarjeta
document.addEventListener('click', e => {
    if(e.target.matches('#imagenClickeada')){
        console.log(e.target); 
        
        const imagenClickeada = e.target.getAttribute('src')
        const name = e.target.getAttribute('name')

        container.remove()
        items.remove()

        templateCard2.querySelector('h5').textContent = name;
        templateCard2.querySelector('img').setAttribute('src', imagenClickeada);
        templateCard2.querySelector('#descripcion').textContent = "Esta es una muy buena película para ver en familia blaaaaa blaaaaaa bla bla blaaaa etc etc blaaaa bla blablablabla buuu prrrrrrfff bla blablablabla buuu prrrrrrff bla blablablabla buuu prrrrrrff bla blablablabla buuu prrrrrrffajajajj ejje jiji jojjo :P .l."
        const clone = templateCard2.cloneNode(true);
        fragment.appendChild(clone);
        // appendChild agrega un nodo al final de la lista
        item.appendChild(fragment);
        
    }
})

document.addEventListener('click', e => {
    if(e.target.matches('#registro')){
        container.remove()
        items.remove()
        // item.remove()
        console.log(templateCard3);
        contenedorFormulario.appendChild(templateCard3)
        const formularioP = document.getElementById('formularioP');
        formularioP.addEventListener('submit', (evento) => {
            evento.preventDefault();
            let nom = document.getElementById('nom').value;
            let apellido = document.getElementById('apellido').value;
            let telefono = document.getElementById('telefono').value;
            let direccion = document.getElementById('direccion').value;
            let observaciones = document.getElementById('observaciones').value;
            console.log(nom, apellido, telefono, direccion, observaciones);
            crearRegistro(nom, apellido, telefono, direccion, observaciones);
            guardarDatos();
        })
    }

})

const crearRegistro = (nombre,apellido,telefono,direccion, observaciones) => {
    let registro = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        observaciones: observaciones
    }
    arreglo.push(registro);
    console.log(arreglo);
}

const guardarDatos = () => {
    localStorage.setItem('local', JSON.stringify(arreglo))
}