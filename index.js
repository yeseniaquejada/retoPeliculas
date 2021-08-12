import { datos } from './data/data.js';

const items = document.getElementById('items');
const item = document.getElementById('item');
const templateCard = document.getElementById('template-card').content;
const templateCard2 = document.getElementById('template-card2').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    loadData(datos);
})


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



