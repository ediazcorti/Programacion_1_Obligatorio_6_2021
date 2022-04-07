class Docente {
  constructor(unNombre, unUsuario, password) {
    this.nombre = unNombre;
    this.usuario = unUsuario;
    this.password = password;
    this.alumnosAsignados = [];
    this.tareasPlanteadas = [];
  }
}
class Alumno {
  constructor(nombre, usuario, password, usuarioDocenteAsignado) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.password = password;
    this.usuarioDocenteAsignado = usuarioDocenteAsignado;
    this.nivelAlumno = NIVELES.INICIAL;
    this.entregas = [];
  }
}

class Entrega {
  constructor(
    usuarioAlumno,
    id_tarea,
    audio,
    comentarioAlumno,
  ) {
    this.usuarioAlumno = usuarioAlumno;
    this.id_tarea = id_tarea;
    this.audio = audio;
    this.devolucion = {};
    this.comentarioAlumno = comentarioAlumno;
  }
}

class Tarea {
  constructor(idTarea, unTitulo, unaDescripcion, unNivel, idDocente, img) {
    this.idTarea = idTarea; //Falta agreagar id del docente logueado
    this.titulo = unTitulo;
    this.descripcion = unaDescripcion;
    this.nivel = unNivel;
    this.imagen = img;
    this.entregas = [];
  }
}

class Devolucion {
  constructor(puntaje, correccion){
    this.puntaje = puntaje;
    this.correccion = correccion;
    
  }
}

const usuarioLogeado = {
  // REFERENCIAS
  tipo: "",
  listaPerteneciente: [],
  indice: 0, //
  usuarioId: "", // ? el usuario id para enviar como parametro a getAlumno para encontrar el alumno
}; // Por qué no poner dataUsuarioLogeado dentro del usuarioLogeado
let dataUsuarioLogeado = {};
// usuarioLogeado.listaPerteneciente = alumnosList

// Definición de arrays, string y variables

const NIVELES = {
  INICIAL: "inicial",
  INTERMEDIO: "intermedio",
  AVANZADO: "avanzado",
};

const ESTADOS_TAREAS = {
  NUEVO: "Nuevo",
  ENTREGADO: "Entregado",
  CORREGIDO: "Corregido",
};

const alumnosList = [
  {
    nombre: "Marcos Medina",
    usuario: "markmed",
    password: "mkmPass21",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "inicial",
    entregas: [
      {
        usuarioAlumno: "markmed",
        id_tarea: 1,
        audio: "assets/audio/ej1.m4a",
        devolucion: {puntaje: 40, correccion: "Prueba de corrección"}, // obj
        comentarioAlumno: "Hola profe, tuve un problema con la 5ta mayor",
      },
      {
        usuarioAlumno: "markmed",
        id_tarea: 4,
        audio: "assets/audio/ej4.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Hola profe, sigo teniendo problemas con la 5ta mayor",
      },
      {
        usuarioAlumno: "markmed",
        id_tarea: 5,
        audio: "assets/audio/ej5.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Profe, soy horrible con la 5ta mayor",
      },
    ],
  },
  {
    nombre: "Emanuel Díaz",
    usuario: "emadiaz",
    password: "emaPass12",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "inicial",
    entregas: [
      {
        usuarioAlumno: "emadiaz",
        id_tarea: 1,
        audio: "assets/audio/ej1.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Hola profe, tuve un problema con la 8va mayor",
      },
      {
        usuarioAlumno: "emadiaz",
        id_tarea: 4,
        audio: "assets/audio/ej4.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Hola profe, sigo teniendo problemas con la 8va mayor",
      },
    ],
  },
  {
    nombre: "Cristian Poggi",
    usuario: "crispog",
    password: "crisPass4",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "inicial",
    entregas: [
      {
        usuarioAlumno: "crispog",
        id_tarea: 1,
        audio: "assets/audio/ej1.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Hola profe, tuve un problema con la 5ta menor",
      },
      {
        usuarioAlumno: "crispog",
        id_tarea: 4,
        audio: "assets/audio/ej4.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Hola profe, sigo teniendo problemas con la 2da menor",
      },
      {
        usuarioAlumno: "crispog",
        id_tarea: 5,
        audio: "assets/audio/ej5.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Profe, soy horrible con la 2da menor",
      },
    ],
  },
  {
    nombre: "Adrian Nario",
    usuario: "elBana",
    password: "123",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "intermedio",
    entregas: [
      {
        usuarioAlumno: "elBana",
        id_tarea: 2,
        audio: "assets/audio/ej2.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Profe, ando mejorando con la 2da menor",
      }
    ],
  },
  {
    nombre: "Adrian Nario2",
    usuario: "elBana2",
    password: "123",
    usuarioDocenteAsignado: "cariMath",
    nivelAlumno: "avanzado",
    entregas: [
      {
        usuarioAlumno: "elBana2",
        id_tarea: 1,
        audio: "assets/audio/ej3.m4a",
        devolucion: "", // obj
        comentarioAlumno: "Profe, soy god con la 2da menor",
      }
    ],
  },
];
const docentesList = [
  {
    nombre: "Santiago Fagnoni",
    usuario: "santiFagno",
    password: "123",
    alumnosAsignados: [
      alumnosList[0],
      alumnosList[1],
      alumnosList[2],
      alumnosList[3],
    ],
    tareasPlanteadas: [
      {
        idTarea : 1,
        titulo : "Tarea Precargada n° 1 ",
        descripcion : "Esta sería una entrega de nivel Inicial ",
        nivel : "inicial",
        imagen : "assets/imgs/ej1.png",
        entregas : [
          {
            usuarioAlumno: "markmed",
            id_tarea: 1,
            audio: "assets/audio/ej1.m4a",
            devolucion: {puntaje: 40, correccion: "Prueba de corrección"}, // obj
            comentarioAlumno: "Hola profe, tuve un problema con la 5ta mayor",
          },
          {
            usuarioAlumno: "emadiaz",
            id_tarea: 1,
            audio: "assets/audio/ej1.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Hola profe, tuve un problema con la 8va mayor",
          },
          {
            usuarioAlumno: "crispog",
            id_tarea: 1,
            audio: "assets/audio/ej1.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Hola profe, tuve un problema con la 5ta menor",
          },
        ],
      },
      {
        idTarea : 2,
        titulo : "Tarea Precargada n° 2 ",
        descripcion : "Esta sería una entrega de nivel Intermedio ",
        nivel : "intermedio",
        imagen : "assets/imgs/ej2.png",
        entregas : [
          {
            usuarioAlumno: "elBana",
            id_tarea: 2,
            audio: "assets/audio/ej2.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Profe, ando mejorando con la 2da menor",
          }
        ],
      },
      {
        idTarea : 3,
        titulo : "Tarea Precargada n° 3 ",
        descripcion : "Esta sería una entrega de nivel Avanzado ",
        nivel : "avanzado",
        imagen : "assets/imgs/ej3.png",
        entregas : [],
      },
      {
        idTarea : 4,
        titulo : "Tarea Precargada n° 4 ",
        descripcion : "Esta sería una entrega de nivel Inicial ",
        nivel : "inicial",
        imagen : "assets/imgs/ej4.png",
        entregas : [
          {
            usuarioAlumno: "crispog",
            id_tarea: 4,
            audio: "assets/audio/ej4.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Hola profe, sigo teniendo problemas con la 2da menor",
          },
          {
            usuarioAlumno: "markmed",
            id_tarea: 4,
            audio: "assets/audio/ej4.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Hola profe, sigo teniendo problemas con la 5ta mayor",
          },
          {
            usuarioAlumno: "emadiaz",
            id_tarea: 4,
            audio: "assets/audio/ej4.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Hola profe, sigo teniendo problemas con la 8va mayor",
          },
        ],
      },
      {
        idTarea : 5,
        titulo : "Tarea Precargada n° 5 ",
        descripcion : "Esta sería una entrega de nivel Inicial ",
        nivel : "inicial",
        imagen : "assets/imgs/ej5.png",
        entregas : [
          {
            usuarioAlumno: "markmed",
            id_tarea: 5,
            audio: "assets/audio/ej5.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Profe, soy horrible con la 5ta mayor",
          },
          {
            usuarioAlumno: "crispog",
            id_tarea: 5,
            audio: "assets/audio/ej5.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Profe, soy horrible con la 2da menor",
          },
        ],
      },
      {
        idTarea : 6,
        titulo : "Tarea Precargada n° 6 ",
        descripcion : "Esta sería una entrega de nivel Inicial ",
        nivel : "inicial",
        imagen : "assets/imgs/ej5.png",
        entregas : [
          {
            usuarioAlumno: "markmed",
            id_tarea: 5,
            audio: "assets/audio/ej5.m4a",
            devolucion: "", // obj
            comentarioAlumno: "Profe, soy horrible con la 5ta mayor",
          },
        ],
      },
    ],
  },
  {
    nombre: "Carina",
    usuario: "cariMath",
    password: "cariMath314",
    alumnosAsignados: [],
    tareasPlanteadas: [],
  },
  {
    nombre: "Daniel Baccino",
    usuario: "daniBac",
    password: "mBot5",
    alumnosAsignados: [],
    tareasPlanteadas: [],
  },
];
// // WIP = WORK IN PROGRESS
// function realizarEntrega(audio, comentario) {
//   // SOLO ALUMNO
//   const nuevaEntrega = {
//     userAlumno: userLogeado.user,
//     idTarea: idTarea,
//     password: password,
//     alumnos: [],
//     tareasPlanteadas: [],
//   };
//   getAlumno(userLogeado.user).entregas.push(nuevaEntrega);
//   getTarea(getProfesor(userLogeado.profesor), idTarea).entregas.push(
//     nuevaEntrega
//   );
// }

// GET
function getDocente(usuarioId) {
  for (const docente of docentesList) {
    if (docente.usuario === usuarioId) {
      return docente;
    }
  }
}
function getAlumno(usuarioId) {
  for (const alumno of alumnosList) {
    if (alumno.usuario === usuarioId) {
      return alumno;
    }
  }
}

// const listaDeTareasTotalesQueTieneElAlumno = [];
// const listaDeTareasPendientesQueTieneElAlumno = [];
// const listaDeTareasRealizadasQueTieneElAlumno = [];

// const docenteDelAlumnoLogeado = getDocente(
//   dataUsuarioLogeado.usuarioDocenteAsignado
// );


// Funcion para desplegar docentes en el select del registro de alumnos.
