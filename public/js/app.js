// NOTE This is the main module. This page will handle pagination for the all properties
// or properties index page. This is still part of the "/" root route which will make the request to the API

/* I am trying to fetch property data and save it to an object or variable.
This is not working and will become a stretch goal. For time management purposes this
feature will have to be integreated at a later date when I have filled more knowledge gaps.
*/

// console.log("come here often?");

// const currentPage = 1;
// const rows = 5;

// const propertiesSection = document.getElementById("properties");

// // This function fetches properties and returns them in an array that can be iterated over for pagination.
// function getProperties() {
//   fetch("/api/v1/properties", {
//     credentials: "include",
//   })
//     .then((stream) => stream.json())
//     .then((data) => (obj = data))
//     .then(() => renderProperties(obj))
//     .then(() => console.log(obj));
// }

// getProperties();

// async function fetchProperties(id) {
//   try {
//     const response = await fetch(`/api/v1/properties/${id}`, {
//       credentials: "include",
//     });
//     const property = await response.json();
//     return property;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function renderProperty(id) {
//   const property = await fetchProperties(id);
//   console.log(property);
// }
