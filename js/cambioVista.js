/* NOTES */
// elem.classList.add/remove("class") – adds/removes the class.
// elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
// elem.classList.contains("class") – checks for the given class, returns true/false.

// import Input from "../../../../../Houlak/MakeItPro/src/components/UI/Input";z

// const botonesParaIrRegistro = //REGISTRAR TODOS LOS BOTONES QUE CAMBIEN A > REGISTRO (REPETIR PARA TODAS LAS VISTAS)
const body = "body#root";
const botonesDashboardAlumno = document.querySelectorAll(`${body} button.volverDashboardAlumno`);
const botonesDashboardDocente = document.querySelectorAll(`${body} button.volverDashboardDocente`);

const ocultarTodo = () => {
  const allSections = document.querySelectorAll(`${body} section`);
  for (const section of allSections) {
    section.classList.add("hidden");
  }
};

const mostrarOneSection = (identificador) => {
  const sectionAMostrar = document.querySelector(`${body} ${identificador}`);
  ocultarTodo();
  sectionAMostrar.classList.remove("hidden");
};

// Función para navItems (para ocultar cada navItem)  @cambioVista.js
const ocultarAllNavItems = () => {
  const allNavItems = document.querySelectorAll(`body ul.navItem`);
  for (const navItem of allNavItems) {
    navItem.classList.add("hidden");
  }
};

// Función para mostrar los NavItems seleccionados @cambioVista.js; primero oculta los
const mostrarNavItem = (identificador) => {
  const navItemsAMostrar = document.querySelector(`body ${identificador}`);
  ocultarAllNavItems();
  navItemsAMostrar.classList.remove("hidden");
};

for (const boton of botonesDashboardAlumno) {
  boton.addEventListener("click", () => {
    mostrarOneSection("section#dashboardAlumno");
  });
}
for (const boton of botonesDashboardDocente) {
  boton.addEventListener("click", () => {
    mostrarOneSection("section#dashboardDocente");
  });
}
// document.querySelector("button#loginAlumno").addEventListener("click", (e)=>{
// 	e.preventDefault()
// 	mostrarOneSection(input.value, inputPass.value, "alumno")
// })
// document.querySelector("button#loginDocente").addEventListener("click", (e)=>{
// 	e.preventDefault()
// 	mostrarOneSection(input.value, inputPass.value, "docente")
// })

// BTN LOGIN NAV
document
  .querySelector("nav div ul li button#navBtn_Login")
  .addEventListener("click", () => {
    mostrarOneSection("section#login");
  });

// BTN REGISTRO DOCENTE
document
  .querySelector("nav div ul li button#navBtn_Registro")
  .addEventListener("click", () => {
    selectDocentes();
    mostrarOneSection("section#registro");
  });

// BTN IR A REGISTRO TAB_DOCENTE
document
  .querySelector(
    "body main section#login div#docenteFormm button#btnIrRegistro_docente"
  )
  .addEventListener("click", (e) => {
    e.preventDefault();
    mostrarOneSection("section#registro");
  });
// BTN IR A REGISTRO TAB_ALUMNO
document
  .querySelector(
    "body main section#login div#alumnoFormm button#btnIrRegistro_alumno"
  )
  .addEventListener("click", (e) => {
    e.preventDefault();
    mostrarOneSection("section#registro");
  });


  // Reporte individual
  // document
  //   .querySelector("body main section#dashboardDocente button#btnDocenteIrReporteIndividual")
  //   .addEventListener("click", () => {
  //     mostrarOneSection("section#reporteIndividualDocente");
  //   });