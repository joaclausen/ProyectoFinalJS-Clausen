const listaElementos = [];
//Lista de elementos vieja:
let listaElementosGuardados = localStorage.getItem("listaElementos");
//Cantidad de dias anterior:
let dias = parseInt(localStorage.getItem("diasTotales"));
//Calificaciones anteriores:
let calificaciones = localStorage.getItem("calificaciones");
//asigno 0 dias en caso de que diasTotales no exista
if(dias==null || dias=="" || dias==0) dias=0;
//lo mismo para las calificaciones:
if (calificaciones==null || calificaciones=="") calificaciones = 0;
//Codigo del generamiento de la lista, un caso por si no existe y otro por si ya existe:
if (listaElementosGuardados==null || listaElementosGuardados==""){
    //creo la listaElementos en caso de que no exista:
    localStorage.setItem("listaElementos", listaElementos);
    //conseguir el evento formulario:
    let miFormulario = document.getElementById("formulario");
    miFormulario.addEventListener("submit", crearFila);
    function crearFila(e){
        e.preventDefault();
        let form = e.target;
        //creo el objeto y lo meto el objeto a la lista de elementos:
        listaElementos.push(new Elemento(form.children[1].value, form.children[4].value, form.children[7].value, form.children[10].value, Math.random()));
        //actualizo las calificaciones:
        calificaciones = calificaciones + form.children[10].value;
        localStorage.setItem("calificaciones", calificaciones);
        //actualizo los dias:
        let inicio = new Date (form.children[7].value);
        let fin = new Date (form.children[4].value);
        let finInicio = Math.abs((fin - inicio)/86400000);
        dias = dias + finInicio;
        //actualizo la cantidad de dias totales:
        localStorage.setItem("diasTotales", dias);
        //guardo la listaElementos actual:
        const enJSON = JSON.stringify(listaElementos);
        localStorage.setItem("listaElementos", enJSON);
    }
    let boton = document.getElementById("botonSubmit");
    boton.addEventListener("click", exito);
    function exito(){
        //recargo pagina y aviso que se cargo correctamente:
        location.reload();
        alert("Elemento creado correctamente!");
    }
}else{
    //en el caso de que si exista cargo los elementos a mi pagina "creadas.html"
    listaElementosGuardados = JSON.parse(localStorage.getItem("listaElementos"));
    for (const elemento of listaElementosGuardados){
        listaElementos.push(elemento);
    }
    //conseguir el evento formulario:
    let miFormulario = document.getElementById("formulario");
    miFormulario.addEventListener("submit", crearFila);
    function crearFila(e){
        e.preventDefault();
        let form = e.target;
        //creo el objeto y lo meto el objeto a la lista de elementos:
        listaElementos.push(new Elemento(form.children[1].value, form.children[4].value, form.children[7].value, form.children[10].value, Math.random()));
        //actualizo las calificaciones:
        calificaciones = parseInt(calificaciones);
        calificaciones = calificaciones + parseInt(form.children[10].value);
        localStorage.setItem("calificaciones", calificaciones);
        //actualizo los dias:
        let inicio = new Date (form.children[7].value);
        let fin = new Date (form.children[4].value);
        let finInicio = Math.abs((fin - inicio)/86400000);
        dias = dias + finInicio;
        //actualizo la cantidad de dias totales:
        localStorage.setItem("diasTotales", dias);
        //guardo la listaElementos actual:
        const enJSON = JSON.stringify(listaElementos);
        localStorage.setItem("listaElementos", enJSON);
    }
    let boton = document.getElementById("botonSubmit");
    boton.addEventListener("click", exito);
    function exito(){
        //recargo pagina y aviso que se cargo correctamente:
        location.reload();
        alert("Elemento creado correctamente!");
    }
}