/**
 * 
 */ 
 class LocalStorage{

	//Setters
	
	setUserEmail(event){
	window.localStorage.setItem("emailUser",document.querySelector("input#emailUser").value);	 
 	}
 	
 	setAcount(event){
		window.localStorage.setItem("account",document.querySelector("input#account").value);		 
	 }

	setDescription(event){
		window.localStorage.setItem("description",document.querySelector("textarea#description").value);		
	} 	
	
	setCategory(event){
		window.localStorage.setItem("category",document.querySelector("select#category").value);		
	}
	
	setIframe(event){
		window.localStorage.setItem("Iframe",document.querySelector("input#Iframe").value);		
	}
	
	setLikes(event){
		window.localStorage.setItem("likes",document.querySelector("input#likes").value);		
	}
	
	setViews(event){
		window.localStorage.getItem("views",document.querySelector("input#views").value);		
	}
	
	//Getters
	
	getUserEmail(){
		document.querySelector("input#emailUser").value = window.localStorage.getItem("emailUser");	 
 	}
 	
 	getAcount(){
		document.querySelector("input#account").value = window.localStorage.getItem("account");		 
	 }

	getDescription(){
		document.querySelector("textarea#description").value = window.localStorage.getItem("description");		
	} 	
	
	getCategory(){
		document.querySelector("select#category").value = window.localStorage.getItem("category");		
	}
	
	getIframe(){
		document.querySelector("input#Iframe").value = window.localStorage.getItem("Iframe");		
	}
	
	getLikes(){
		document.querySelector("input#likes").value = window.localStorage.getItem("likes");		
	}
	
	getViews(){
		document.querySelector("input#views").value = window.localStorage.getItem("views");		
	}
	
	getAll(){
		
		if(window.localStorage.length > 0){
			
			this.getUserEmail();
			this.getAcount();
			this.getCategory();
			this.getDescription();
			this.getIframe();
			this.getLikes();
			this.getViews();
		}
	}
	
	clear(){
		window.localStorage.clear();
	}
 }	 
 
 
 
 