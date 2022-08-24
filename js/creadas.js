const listaElementos = [];
//Cantidad de dias anterior:
let dias = localStorage.getItem("diasTotales");
//declaro la suma de todas las calificaciones y la variable que contendra el tamaño de la lista (para hacer el promedio):
let calificaciones = localStorage.getItem("calificaciones");
let largoLista;
//si no existe, lo guardo inicializado con 0 en storage:
if (calificaciones==null || calificaciones==""){
    calificaciones = 0;
    localStorage.setItem("calificaciones", calificaciones);
}
//si no existe lo inicializo en 0 y lo guardo en storage
if(dias==null || dias==""){
    dias=0;
    localStorage.setItem("diasTotales", dias);
}
//cargo listaElementos con posibles valores anteriores:
let listaElementosGuardados = localStorage.getItem("listaElementos");
if (listaElementosGuardados==null || listaElementosGuardados==""){
    //creo la listaElementos en caso de que no exista:
    localStorage.setItem("listaElementos", listaElementos);
}else{
    //en el caso de que si exista cargo los elementos a mi pagina "creadas.html"
    listaElementosGuardados = JSON.parse(localStorage.getItem("listaElementos"));
    for (const elemento of listaElementosGuardados) listaElementos.push(elemento);
    //llevo los elementos guardados a la pagina "creadas.html":
    //consigo el campo:
    let campo = document.getElementById("campo");
    //cargo cada columna con su respectivo valor:
    for (const elemento of listaElementos){
        //creo la fila:
        let tr = document.createElement("tr");
        //creo las 4 columnas:
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        //le doy valores a cada columna:
        td1.innerHTML=`${elemento.nombre}`;
        td2.innerHTML=`${elemento.fechaInicio}`;
        td3.innerHTML=`${elemento.fechaFin}`;
        td4.innerHTML=`${elemento.calificacion}`;
        //pego cada columna en la fila:
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        //pego la fila en el campo:
        campo.append(tr);
    }
    //linea de html con los dias totales:
    let days = document.getElementById("days");
    days.innerHTML=`Dias Totales: ${dias}`;
    //largoLista para la division del promedio:
    largoLista=listaElementos.length;
    //linea de html con el promedio (si el largo del array es 0, entonces no se divide):
    if (largoLista>0){
        calificaciones = parseInt(calificaciones);
        calificaciones = (calificaciones / largoLista).toFixed(2);
        let average = document.getElementById("average");
        average.innerHTML=`Promedio Calificaciones: ${calificaciones}`;
    }

}
//borrado de datos:
let borrar = document.getElementById("borrar");
borrar.addEventListener("click", borrarLista);
function borrarLista(){
    localStorage.removeItem("listaElementos");
    localStorage.removeItem('diasTotales');
    localStorage.removeItem('calificaciones');
    location.reload()
}
