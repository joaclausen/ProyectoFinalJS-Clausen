function buscarMedia(e){

    var elemento;
    var listaElementos=[];
    var nombreReal;

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
                const resultado = 
                `<li>
                    <img src="${imagen}">
                    <h2 id="nombreReal" class="nombreReal">${nombre}</h2>
                    <br>
                    <h3>${anio}</h3>
                    <br>
                    <button id="añadir" class="botones btn btn-success" type="submit">Añadir a la lista</button>
                </li>`
                //concatenamos en el código:
                document.querySelector('#pelis').innerHTML += resultado;

                //obtenemos todos los botones "Añadir a la lista" e iteramos en cada uno para que el usuario pueda añadir cualquiera de los resultados a su lista:
                let botones = document.getElementsByClassName("botones");
                //añade a la lista:
                for (i of botones){
                    i.addEventListener('click', añadirElemento);
                    async function añadirElemento(){
                        nombreReal = i.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
                        const { value: formValues } = await Swal.fire({
                            title: 'Cargue el elemento:',
                            html:
                                //Estado:
                                '<label for="estado">Estado:&nbsp;</label>'+
                                '<select name="estado" id="estado">'+
                                    '<option>Pendiente</option>'+
                                    '<option>Terminado</option>'+
                                    '<option>En Progreso</option>'+
                                '</select>'+
                                //Calificación:
                                '<br><br><label for="nota">Calificación:&nbsp;</label>'+
                                '<select name="nota" id="nota">'+
                                    '<option>1</option>'+
                                    '<option>2</option>'+
                                    '<option>3</option>'+
                                    '<option>4</option>'+
                                    '<option>5</option>'+
                                    '<option>6</option>'+
                                    '<option>7</option>'+
                                    '<option>8</option>'+   
                                    '<option>9</option>'+
                                    '<option>10</option>'+
                                '</select>'+
                                //Fecha:
                                '<br><br>Fecha inicio: <input type="date" id="fechainicio" class="fechainicio">' +
                                '<br><br>Fecha fin: <input type="date" id="fechafin" class="fechafin">',
                            focusConfirm: false,
                            preConfirm: () => {
                                return [
                                    // nombreReal = document.getElementById("nombreReal").innerHTML,
                                    elemento = new Elemento(nombreReal, 
                                    document.getElementById('estado').value,
                                    document.getElementById('fechainicio').value, 
                                    document.getElementById('fechafin').value, 
                                    document.getElementById('nota').value),
                                ]
                            },
                        })  
                        if (formValues) {
                            Swal.fire(
                                'Carga exitosa!',
                                'Los elementos fueron cargados exitosamente en la lista de elementos',
                                'success'
                            ).then((result)=>{
                                listaElementos = JSON.parse(localStorage.getItem('listaElementos')) || [];
                                console.log(listaElementos);
                                listaElementos.push(elemento);
                                // localStorage.setItem("listaElementos", listaElementos);
                            })
                        }
                    };
                }

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