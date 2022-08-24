const listaElementos = [];
//Lista de elementos vieja:
let listaElementosGuardados = localStorage.getItem("listaElementos");
if (listaElementosGuardados==""){
    //creo la listaElementos en caso de que no exista:
    localStorage.setItem("listaElementos", listaElementos);
}else{
    //en el caso de que si exista cargo los elementos a mi pagina "creadas.html"
    listaElementosGuardados = JSON.parse(localStorage.getItem("listaElementos"));
    for (const elemento of listaElementosGuardados) listaElementos.push(elemento);
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
}