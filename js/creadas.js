const listaElementos = [];
//cargo listaElementos con posibles valores anteriores:
let listaElementosGuardados = localStorage.getItem("listaElementos");
if (listaElementosGuardados==""){
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
}
//a partir de aca comienza el codigo para calcular promedio de dias y calificaciones:
