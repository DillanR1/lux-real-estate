const { deepStrictEqual } = require("assert");

console.log("come here often?");

const getPropsBtn = document.getElementById('getProps');
const deleteBtn = document.querySelector('.delete');

deleteBtn.addEventListener('click', handleDelete);

function handleClick(event) {
    //GET Request to Properties
    fetch('/api/v1/properties', {
        credentials: 'include',
    })
    .then((stream) => stream.json())
    .then((data) => renderProperties(data));
}

function renderProperties(properiesArr) {
    const propertiesSection = document.getElementById('properties');

    propertiesArr.forEach((property) => {
        const propertyTemplate = `
        <div class="card" style="width:18rem;>
            <img style="height: 200px" src="" class=card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${property.city}</h5>
                <p class="card-text">Description of the property for sale.</p>
                < a href="/properties/${property._id}" class="btn btn-primary float-right">View Details</a>
            </div>
        </div>
      `;
        
        propertiesSection.insertAdjacentHTML('beforeend', propertyTemplate);

    });
}

function handleDelete(event) {
    console.log(event.target.id);
    const propertyId =event.target.id;
    fetch(`/api/v1/properties/${propertyId}`, {
        method: 'DELETE',
    })
        .then((stream) => stream.json())
        .then((res) => window.location.pathname = '/properties');
}