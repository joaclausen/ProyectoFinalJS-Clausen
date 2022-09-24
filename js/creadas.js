//cargo listaElementos con posibles valores anteriores:
const listaElementos = JSON.parse(localStorage.getItem('listaElementos')) || [];
if (listaElementos.length>0){
    //en el caso de que si exista cargo los elementos a mi pagina "creadas.html"
    listaElementosGuardados = JSON.parse(localStorage.getItem("listaElementos"));
    for (const elemento of listaElementosGuardados) listaElementos.push(elemento);
    //llevo los elementos guardados a la pagina "creadas.html":
    //consigo el campo:
    let campo = document.getElementById("campo");
    //cargo cada columna con su respectivo valor:
    //aclaracion: debido a un problema que no pude resolver siempre los elementos se me duplicaban, cosa que pude solucionar dividiendo el tamaño maximo del for por 2
    for (let i=0; i<listaElementos.length/2; i++){
        //creo la fila:
        let tr = document.createElement("tr");
        //creo las 5 columnas:
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        //le doy valores a cada columna:
        td1.innerHTML=`${listaElementos[i].nombre}`;
        td2.innerHTML=`${listaElementos[i].estado}`;
        td3.innerHTML=`${listaElementos[i].fechaInicio}`;
        td4.innerHTML=`${listaElementos[i].fechaFin}`;
        td5.innerHTML=`${listaElementos[i].calificacion}`;
        //pego cada columna en la fila:
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        //pego la fila en el campo:
        campo.append(tr);
    }
}
//borrado de datos:
let borrar = document.getElementById("borrar");
borrar.addEventListener("click", borrarLista);
function borrarLista(){
    Swal.fire({
        title: 'Está seguro de eliminar la lista?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {

        if (result.isConfirmed) {
            localStorage.removeItem("listaElementos");
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'La lista ha sido borrada'
            }).then((result)=> {
                //la pagina se recarga solo cuando se apreta el ok
                location.reload()
            })
        }
    })
}
