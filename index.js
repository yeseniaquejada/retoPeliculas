import { datos } from './data/data.js';

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    loadData(datos);
})


const loadData = datos => {
    datos.forEach(pelicula => {
        const { id, name, image } = pelicula;
        templateCard.querySelector('h5').textContent = name;
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
        items.remove()
        
        // templateCard.querySelector('h5').textContent = name;
        // templateCard.querySelector('img').setAttribute('src', image);
        // const clone = templateCard.cloneNode(true);
        // fragment.appendChild(clone);
        
    }
})



