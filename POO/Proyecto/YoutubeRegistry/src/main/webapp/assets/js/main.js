
//Asignaciones de Variables

//Objetos de CARDS
let dynamicSection = document.querySelector("#dynamicSection");

//Objetos de RegistryModal
let emailUser = document.querySelector("#emailUser");
let account = document.querySelector("#account");
let description = document.querySelector("#description");
let category = document.querySelector("#category");
let Iframe = document.querySelector("#Iframe");
let likes = document.querySelector("#likes");
let views = document.querySelector("#views");
let registryBTN = document.querySelector("#registryBTN");
let sendBTN = document.querySelector("#sendBTN");
let clearDAOBTN = document.querySelector("#clearDAOBTN");

//Objetos Dinámicos
let dynamicContent = document.querySelector("#dynamicContent");
let videoModal = document.querySelector("#videoModal");
let toastMessage = document.querySelector("#toastMessage");

//Instancia de la clase Action  (y LocalStorage). con los parámetros de, espacios dinámicos, ventana modal para cada video y área de mensaje responsivo
let actions = new Action(dynamicContent, videoModal, toastMessage);
let ls = new LocalStorage();
setTimeout(actions.loadFields(),1000);

//Adición de los eventos a las variables de Objetos (botones).
sendBTN.addEventListener("click",actions.sendParams.bind(actions,emailUser,account,description,category,
						Iframe,likes,views));
clearDAOBTN.addEventListener("click",actions.clearDAO.bind(actions));
registryBTN.addEventListener("click",ls.getAll.bind(ls));

//Para utilizar el LocalStorage al llenar el registro use el evento focusout una variante de focus que se mencionó en clase
emailUser.addEventListener("focusout",ls.setUserEmail.bind(ls));
account.addEventListener("focusout",ls.setAcount.bind(ls));
description.addEventListener("focusout",ls.setDescription.bind(ls));
category.addEventListener("focusout",ls.setCategory.bind(ls));
Iframe.addEventListener("focusout",ls.setIframe.bind(ls));
likes.addEventListener("focusout",ls.setLikes.bind(ls));
views.addEventListener("focusout",ls.setViews.bind(ls));

