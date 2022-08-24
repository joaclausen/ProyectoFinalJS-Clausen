//TENGO QUE TRAER LA LISTA VIEJA PORQUE NO LA ESTOY USANDO PARA ACTUALIZARLA!!!!
const listaElementos = [];
//conseguir el evento formulario:
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", crearFila);
function crearFila(e){
    e.preventDefault();
    let form = e.target;
    //creo el objeto y lo meto el objeto a la lista de elementos:
    listaElementos.push(new Elemento(form.children[1].value, form.children[4].value, form.children[7].value, form.children[10].value, Math.random()));
    //guardo la listaElementos actual:
    const enJSON = JSON.stringify(listaElementos);
    localStorage.setItem("listaElementos", enJSON);
}