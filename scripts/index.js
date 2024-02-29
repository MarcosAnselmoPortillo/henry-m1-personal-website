class Activity {
  constructor(id, title, description, imgUrl) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.imgUrl = imgUrl);
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(id, title, description, imgUrl) {
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const repository = new Repository();

function convertActivityToHtml(activity) {
  const {title, description, imgUrl } = activity;

  const titleTag = document.createElement("h3");
  const descriptionTag = document.createElement("p");
  const imageTag = document.createElement("img");

  titleTag.innerHTML = title;
  descriptionTag.innerHTML = description;
  imageTag.setAttribute("src", imgUrl);

  const divActivity = document.createElement("div");

  divActivity.appendChild(titleTag);
  divActivity.appendChild(descriptionTag);
  divActivity.appendChild(imageTag);

  divActivity.className = "actividad";

  return divActivity;
}

function convertirTodasLasActivities() {
  const contenedorActividades = document.getElementById(
    "contenedor-actividades"
  );

  contenedorActividades.innerHTML = " ";

  const actividades = repository.getAllActivities();

  const activitiesHTML = actividades.map(convertActivityToHtml);

  activitiesHTML.forEach((element) => {
    contenedorActividades.appendChild(element);
  });
}

const agregarActividadButton = document.getElementById("agregar-actividad-btn");

let idActividad = 0;

const agregarActividadHandler = () => {
  const form = document.getElementById("formulario-actividad");
  
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const imagenUrl = document.getElementById("url-imagen").value;

  if (titulo == "" || descripcion == "" || imagenUrl == "") {
    return alert("Debe llenar todos los campos");
  }

  repository.createActivity(++idActividad, titulo, descripcion, imagenUrl);

  convertirTodasLasActivities();
  
  form.reset();
};

agregarActividadButton.addEventListener("click", agregarActividadHandler);
