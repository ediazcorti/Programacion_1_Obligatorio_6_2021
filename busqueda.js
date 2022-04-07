// Subrutina de buscar elementos
function buscarElemento(arrElementos, propiedad, busqueda) {
    let existe = false;
    for (let i = 0; i < arrElementos.length; i++) {
      const unElemento = arrElementos[i];
      if (unElemento[propiedad] === busqueda) {
        existe = true;
        break;
      }
    }
    return existe;
  }
// Funcion de buscar la tarea, según el tipo de Tarea que estemos queriendo buscar
// SOLO FUNCIONARIA PARA ENCONTRAR ABSOLUTAMENTE TODAS LAS TAREAS ASIGNADAS AL ALUMNO
  function buscarTarea (tipoTareas) {
  input = document.querySelector("#inputBusqueda")
  docente = getDocente (datausuarioLogeado.usuarioDocenteAsignado)
  const tareasAlumno = docenteAsignado.tareasPlanteadas.filter((tarea) => tarea.nivel === dataUsuarioLogeado.nivelAlumno)
  
  for (tarea of tareasAlumno)
  if (buscarElemento(tareasAlumno, titulo, input)) {
  tareasEncontradas.push(tarea)}
  tipoTareas.innerHTML = tareasEncontradas.push 

  if (tareasEncontradas.length  < 1) { 
    if (buscarElemento(tareasAlumno, descripcion, input)) {
        tareasEncontradas.push(tarea)}
        tipoTareas.innerHTML = tareasEncontradas.push 
}

  if (tareasEncontradas.length  < 1) { 
      mostrarAlerta("No se encontró tareas", "error")
  } else if (tareasEncontradas.length > 0) {
    mostrarAlerta("Se encontraron tareas para su búsqueda", "success")

  }
   } 
  