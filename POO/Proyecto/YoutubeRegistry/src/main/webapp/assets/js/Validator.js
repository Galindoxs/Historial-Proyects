

class Validator{
	static clean(text){
		/**
		 * Esta parte limpia el texto escrito por el usuario, quitando cualquier
		 * codigo malicioso en el FrontEnd
		*/
		text = `${text}`.trim().replace(/[<>{}[\];"'`~&()]+/g,"");
		
		return text;
	}
}