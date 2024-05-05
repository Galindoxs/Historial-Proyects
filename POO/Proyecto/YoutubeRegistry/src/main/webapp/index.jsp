<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="name" content="egalindoa@unah.hn">
		<meta name="version" content="0.1.4">
		<meta name="date" content="2023/12/7">
		<meta name="since" content="2023/11/29">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Registro de Videos Youtube</title>
		<link rel="stylesheet" href="assets/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/css/style.css">
		<link rel="icon" href="assets/icon/pixil-frame.png">
	</head>
	<body>
	
	<div class="container ">
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid shadow p-3 mb-2 bg-body-tertiary rounded ">
				<a class="navbar-brand">Registro Videos - Eduardo Galindo</a>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item dropdown dropend"><a class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Inicio </a>
							<ul class="dropdown-menu">
								<li><button type="button" id="registryBTN" class="dropdown-item  list-group-item-action list-group-item-success" data-bs-toggle="modal" data-bs-target="#registryModal"> Crear Registro</button></li>
								<li><button	type="button" id="clearDAOBTN" class="dropdown-item list-group-item-action list-group-item-danger"	type="button">Limpiar Modelo Datos</button></li>
							</ul></li>
						<li class="nav-item"><button id="aboutBTN" class="nav-link active" data-bs-toggle="modal" data-bs-target="#aboutModal" aria-current="page">Acerca de</button></li>
					</ul>
				</div>
			</div>
		</nav>
	</div> 
	
	<div id="cards" class="container">
		<div class="row p-3">
			<div id="counterCard" class="card card-body col col-lg-3 rounded" style="height:215px;">
				<div class="row">
					<div class="col">
						<p class="lead text-center" style="color: white;">Número de Videos</p>
					</div>
				</div>
				<div class="col">
					<p id="numberCount" class="lead text-center position-absolute top-50 start-50 translate-middle">0</p>
				</div>
			</div>
			<div id="academicCard" class="card card-body col-4 col-lg-3 rounded">
				<p  class="text-center" style="color: white;">Académico</p>
				<div id="card" class="alert alert-light" role="alert">
					<p id="numberEducative" class="text-center" style="height:5px;">video de tipo educativo </p>
				</div>
				<div id="card" class="alert alert-light" role="alert">
					<p id="numberCientific" class="text-center" style="height:5px;">video de tipo cientifico </p>
				</div>
			</div>
			<div id="noAcademicCard" class="card card-body col-4 col-lg-3 rounded" >
				<p class="text-center" style="color: white;">No Educativo</p>
				<div id="card" class="alert alert-light" role="alert">
					<p id="numberEntreteinment" class="text-center" style="height:5px;">video de tipo entretenimiento </p>
				</div>
				<div id="card" class="alert alert-light" role="alert">
					<p id="numberOther" class="text-center" style="height:5px;">video de tipo otro </p>
				</div>
			</div>
		</div>
	</div>
	
	<div  class="container">
		<div id="dynamicContent" class="rounded p mb">
			
			
		</div>
	</div>
	
	
	<div id="registryModal" class="modal fade" tabindex="-1" aria-hidden="true">
	  <div class="modal-dialog modal-xl modal-dialog-scrollable">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h1 class="modal-title fs-5">Crear un nuevo registro de video</h1>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
	      	<p class="lead">Ingrese la información para el registro del video</p>
	        <div class="mb-2">
            	<label class="col-form-label">Responsable quien realiza el registro (email)</label>
            	<input type="text" id="emailUser" class="form-control" placeholder="Ejemplo: usuario@gmail.com">
          	</div>
          	<div class="mb-3">
            	<label class="col-form-label">Nombre del Canal de Youtube</label>
            	<input type="text" id="account" class="form-control" placeholder="Nombre del Canal de Youtube">
          	</div>
          	<div class="input-group mb-3">
          		<div class="form-floating">
	          		<textarea type="text" id="description" class="form-control" placeholder="Descripción del video" style="height: 100px"></textarea>
	            	<label for="description" class="col-form-label">Descripción del video</label>
          		</div>
       		</div>
           	<div class="form-floating">
		      <select class="form-select" id="category">	        
		        <option value="Educativo">Educativo</option>
		        <option value="Científico">Científico</option>
		        <option value="Entretenimiento">Entretenimiento</option>
		        <option value="Otros">Otros</option>
		      </select>
		      <label for="category">Categoria</label>
		    </div>
		    <div class="mb-3">
            	<label class="col-form-label">Iframe del video</label>
            	<input type="text" id="Iframe" class="form-control" placeholder="Código del video">
          	</div>
          	<div class="mb-3">
            	<label class="col-form-label">Número de likes</label>
            	<input type="number" id="likes" class="form-control" placeholder="Número de likes">
          	</div>
          	<div class="mb-3">
            	<label class="col-form-label">Número de visitas</label>
            	<input type="text" id="views" class="form-control" placeholder="Número de visitas">
          	</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
	        <button id="sendBTN"type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
	      </div>
	    </div>
	  </div>
	</div>				
	
		
	<div id="aboutModal" class="modal fade" tabindex="-1" aria-hidden="true">
	  <div class="modal-dialog modal-lg modal-dialog-scrollable">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h1 class="modal-title display-6">Registro Videos</h1>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
	         <p>Eduardo José Galindo Aguilar	 2018-100-6498</p>
	         <p>egalindoa@unah.hn</p>
	         <p>Programación Orientada a Objetos IS410 1000 - José Inestroza - 8/12/2023</p>
	         <br>
			<p class="lead">En esta página puede hacer un registro de
				videos de Youtube manualmente ingresando los datos del video junto
				con la url para visualizarlo.</p>
			<p class="lead">El registro se hace mediante el menú inicio,
				dandole al botón de ¨Crear Registro . Se abrirá una ventana donde se
				le pedirán sus datos y los del video que desea subir, los videos registrados aparecen 
				en la pantalla principal debajo del conteo de videos y categorias, 
				navegué por la página y revise lo que guste.</p>
			<p class="lead">El menú de inicio tiene el botón Borrar Registro, 
				cuidado, se perderán todos los videos y deberá
				ingresarlos desde cero.</p>
			<br>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-outline-info" data-bs-dismiss="modal">OK</button>
	      </div>
	    </div>
	  </div>
	</div>				
	
	<div id="videoModal" class="modal fade" tabindex="-1" aria-hidden="true">
	  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h1 id="titleVideoModal" class="modal-title display-6"></h1>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
	      	<div id="IframeVideoModal" class="text-center"></div>
	      </div>
	      
	      <div class="text-center">
	        <p id="descriptionVideoModal"></p>
	      	
	      	<div class="row">
	      		<div class="col col-6 text-center">
	      			<p id="likeVideoModal"></p>
	      		</div>
	      		<div class="col col-6 text-center">
	      			<p id="viewVideoModal"></p>
	      		</div>
	      	</div>
	      	
	      </div>
	    </div>
	  </div>
	</div>			
	
	<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body" class="text-center" style="height:40px;">
	<strong id="toastMessage"></strong>    
    </div>
  </div>
</div>
		
	<script src="assets/js/LocalStorage.js"></script>
	<script src="assets/js/Counter.js"></script>
	<script src="assets/js/Validator.js"></script>
	<script src="assets/js/Action.js"></script>
	<script src="assets/js/main.js"></script>
	<script src="assets/js/bootstrap.bundle.min.js"></script>
	
</body>
</html>