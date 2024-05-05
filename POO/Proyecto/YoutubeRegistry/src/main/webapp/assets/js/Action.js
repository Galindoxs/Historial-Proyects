

class Action{

	constructor(dynamicContent, videoModal, toast){
		
		this.titlecounter = new Counter("title");
		this.userCounter = new Counter("user");
		this.descriptionCounter = new Counter("description");
		
		this.dynamicContent = dynamicContent;
		this.videoModal = videoModal;
		this.toast = toast;
		
		this.numberEducative = 0;
 		this.numberCientific = 0;
		this.numberEntreteinment = 0;
 		this.numberOther = 0;
 		 
		this.xhr = new XMLHttpRequest();
		this.ls = new LocalStorage();
	}	
	
	
	//Función que gestionar una respuesta al crear un registro o al borrarlo usando toast de Bootstrap
	processResponseRegistry(readystatechangeEvent){
	
		if(this.xhr.readyState == XMLHttpRequest.DONE && this.xhr.status == 200){
			
			try{
				
				let jsonText = this.xhr.responseText;
				let json = JSON.parse(jsonText);
				
				let toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.querySelector("#liveToast"));
				this.toast.innerHTML = json.content;
				toastBootstrap.show();				
				
				
			}catch(error){
				this.toast.innerHTML = "Ocurrio un error"+error;
				toastBootstrap.show();
			}		
		}else
		
			if(this.xhr.readyState == XMLHttpRequest.DONE){
				this.toast.innerHTML = "No cargo adecuadamente el registro";
				toastBootstrap.show();
			}	
			
		}
		
		processResponse(readystatechangeEvent){
	
		if(this.xhr.readyState == XMLHttpRequest.DONE && this.xhr.status == 200){
			
			try{
				
				let jsonText = this.xhr.responseText;				
				let json = JSON.parse(jsonText);
				
				//this.dynamicContent.innerHTML = json.content[0].emailUser;
				let videoCount = json.content.length;
				numberCount.innerHTML = videoCount-1;
				
				this.counterVideos(json);	
				this.createList(json);			
				
				
				
			}catch(error){}		
		}else
		
			if(this.xhr.readyState == XMLHttpRequest.DONE){
				
			}	
		}
	
	sendParams(emailUser,account,description,category,
						Iframe,likes,views,clickEvent){
		 
		 //Aplicar Validaciones sobre los campos de entrada
		 this.xhr.open("POST", `programLibraries/RegistryWrite`, true);
		 this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		 this.xhr.addEventListener("readystatechange", this.processResponseRegistry.bind(this));
		 this.xhr.send(`emailUser=${emailUser.value}&account=${account.value}&description=${description.value}&category=${category.value}&Iframe=${Iframe.value}&likes=${likes.value}&views=${views.value}`);
		 this.ls.clear();
	 }
	
	//peticiones del contenido en un intervalo de tiempo
	 loadFields(){
		 
		 this.xhr.open("POST", `programLibraries/LoadCards`, true);
		 this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		 this.xhr.addEventListener("readystatechange", this.processResponse.bind(this));
		 this.xhr.send("update=true");	 
		 		
	
	}
	
	clearDAO(clickEvent){
		
		 this.xhr.open("POST", `programLibraries/RegistryClear`, true);
		 this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		 this.xhr.addEventListener("readystatechange", this.processResponseRegistry.bind(this));
		 this.xhr.send("clear=true");

	}
	
	counterVideos(json){
		
			for(let i=0; i<json.content.length; i++){
					 if(json.content[i].category == "Educativo"){
						 this.numberEducative++;
					 }else if(json.content[i].category == "Científico"){
						 this.numberCientific++;
					 }else if(json.content[i].category == "Entretenimiento"){
						 this.numberEntreteinment++;
					 }else if(json.content[i].category == "Otros"){
						 this.numberOther++;
					 }
				 }	
			let educative = document.querySelector("#numberEducative");
			let cientific = document.querySelector("#numberCientific");
			let enterteiment = document.querySelector("#numberEntreteinment");
			let other = document.querySelector("#numberOther");
			
			educative.innerHTML += this.numberEducative;
			cientific.innerHTML += this.numberCientific;
			enterteiment.innerHTML += this.numberEntreteinment;
			other.innerHTML += this.numberOther;	
		
	}
	
	createList(json){
				
				for(let i=0; i<json.content.length-1 ; i++){
					
					let videoList = document.createElement("div");
					videoList.classList = "alert alert-light";
					videoList.role = "alert";
									
					let title =document.createElement("h1");
					title.id = `${this.titlecounter}`;
					title.classList = "display-5";
					
					let user = document.createElement("p");
					user.id = `${this.userCounter}`;
					user.classList = "lead";
					
					let description = document.createElement("p");
					description.id = `${this.descriptionCounter}`;
					
					videoList.append(title);
					videoList.append(user);
					videoList.append(description);
					
					let divbutton = document.createElement("div");
					divbutton.classList = "d-grid gap-2";
					
					let button = document.createElement("button");
					button.innerText = "Ver Video";
					button.classList = "btn btn-success text-center";
					button.dataset.bsToggle = "modal";
					button.dataset.bsTarget="#videoModal";
					button.type = "button";			
					button.id = "button"+i;		
					divbutton.appendChild(button);
					
					videoList.append(document.createElement("br"));
					videoList.append(divbutton);
					
					this.dynamicContent.appendChild(videoList);
					
					title.innerText = (i+1)+"- " +json.content[i].acount.replace(/[~]/g,",")+" ( Video de "+json.content[i].category+")";
					user.innerText = "Responsable: "+json.content[i].emailUser;
					description.innerText = json.content[i].description.replace(/[~]/g,",");
					
					button.addEventListener("click",this.showVideoModal.bind(this,json.content[i].emailUser,json.content[i].acount,json.content[i].category,json.content[i].Iframe,json.content[i].description,json.content[i].likes,json.content[i].views));	
				}
					
	}
	
	showVideoModal(emailUser,acount,category,Iframe,description,likes,views,clickEvent){
		
		let titleVideoModal = document.querySelector("#titleVideoModal");
		titleVideoModal.innerHTML = "Video de tipo "+category+": "+acount+" / "+emailUser;
		
		let IframeVideoModal = document.querySelector("#IframeVideoModal");
		Iframe = Iframe.replace(/[*]/g,";");
		IframeVideoModal.innerHTML = Iframe.replace(/[@]/g,"\"");
		
		let descriptionVideoModal = document.querySelector("#descriptionVideoModal");
		description.replace(/[*]/g,";");
		descriptionVideoModal.innerHTML = description.replace(/[~]/g,",");
		
		let likeVideoModal = document.querySelector("#likeVideoModal");
		likeVideoModal.innerHTML = "Likes: "+likes.replace(/[~]/g,",");
	
		let viewVideoModal = document.querySelector("#viewVideoModal");
		viewVideoModal.innerHTML = "Views: "+views.replace(/[~]/g,",");
	}
	
	replace(jsonText){
		jsonText = jsonText.replace(/[@]/g,"\"");
		jsonText = jsonText.replace(/[~]/g,",");
		return jsonText;
	}
}