//keys de la api que use:
const options = {
 	method: 'GET',
 	headers: {
 		'X-RapidAPI-Key': '56a98339f3msh683b272a2c724b6p194b38jsn985f238a572a',
 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
 	}
};

//obtengo el resultado de la busqueda:

let buscador = document.getElementById("buscador");

buscador.addEventListener("submit", buscarMedia);