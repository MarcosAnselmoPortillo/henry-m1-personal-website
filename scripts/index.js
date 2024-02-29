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
  console.log(activity);
  const { id, title, description, imgUrl } = activity;

  const titleTag = document.createElement("h3");
  const descriptionTag = document.createElement("p");
  const imageTag = document.createElement("img");

  titleTag.innerHTML = title;
  descriptionTag.innerHTML = description;
  imageTag.src = imgUrl;

  const divActivity = document.createElement("div");

  divActivity.appendChild(titleTag);
  divActivity.appendChild(descriptionTag);
  divActivity.appendChild(imageTag);

  divActivity.className = "actividad";
  console.log(divActivity);
  return divActivity;
}

function convertirTodasLasActivities() {
  const contenedorActividades = document.getElementById(
    "contenedor-actividades"
  );

  console.log(contenedorActividades);

  contenedorActividades.innerHTML = " ";

  const actividades = repository.getAllActivities();
  console.log(actividades);

  const activitiesHTML = actividades.map(convertActivityToHtml);
  console.log(activitiesHTML);

  activitiesHTML.forEach((element) => {
    contenedorActividades.appendChild(element);
  });
  console.log(contenedorActividades);
}

const agregarActividadButton = document.getElementById("agregar-actividad-btn");

let idActividad = 0;

const agregarActividadHandler = () => {
  const tituloImput = document.getElementById("titulo");
  const descripcionInput = document.getElementById("descripcion");
  const imagenUrlInput = document.getElementById("url-imagen");

  const titulo = tituloImput.value;
  const descripcion = descripcionInput.value;
  const imagenUrl = imagenUrlInput.value;

  if (titulo == "" || descripcion == "" || imagenUrl == "") {
    alert("Debe llenar todos los campos");
    return;
  }

  repository.createActivity(++idActividad, titulo, descripcion, imagenUrl);

  console.log(repository.getAllActivities());

  convertirTodasLasActivities();
};

agregarActividadButton.addEventListener("click", agregarActividadHandler);
