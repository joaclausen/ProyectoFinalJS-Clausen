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

buscador.addEventListener("submit", buscarElemento);

function buscarElemento(e){

    e.preventDefault();

    let texto = e.target;

    //obtengo el texto ingresado:

    let textoBuscado = texto.children[0].value;

    //dato importante siempre que llames a la funcion buscar a limpiar el dom para agregarle los nuevos elementos

    //de esta forma te evitas codigo de mas incluyendo ese linea aca y listo

    document.querySelector('#pelis').innerHTML = "";

    //lo concateno con el url de la api:

    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+textoBuscado, options)

    .then(response => response.json())

    .then(data => {

        //creacion de los elementos que conformaran la lista ()

        const list = data.d;

        list.map((item)=>{

            //l representa el nombre, i la imagen, y el año. Luego agarro y lo meto en codigo de html y lo concateno a mi documento de html:

            const nombre = item.l;

            //le puse el operador ? para que no se rompa, ya que note varias busquedas se rompian x que todos tienen imagen

            const imagen = item.i?.imageUrl;

            const anio = item.y;

            //en caso de que si tengan imagen recien ahi lo imprimimos en el dom

            if(imagen != undefined){

                const resultado = `<li><img src="${imagen}"> <h2>${nombre}</h2><br><h3>${anio}</h3></li>`

                document.querySelector('#pelis').innerHTML += resultado;

            }

        })

    })

    .catch(err =>{

        Swal.fire({

            title: 'No encontrado',

            icon: 'error',

            text: 'El elemento ingresado no ha sido encontrado',

        });

    });

}