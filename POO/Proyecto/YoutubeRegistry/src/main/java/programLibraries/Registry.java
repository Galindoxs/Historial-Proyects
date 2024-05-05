package programLibraries;

import fileManager.FileManagerResponse;
import fileManager.FileManager;
import jakarta.servlet.http.HttpServletRequest;

public class Registry {
	
	static DAOCSV dao = new DAOCSV();
	
	public static WebResponse write(HttpServletRequest request) {
		
		WebResponse webResponse = new WebResponse();
		
		
		if(
			request.getParameter(Configuration.PARAM_REQUEST_EMAILUSER) !=null &&
			request.getParameter(Configuration.PARAM_REQUEST_ACCOUNT) !=null &&
			request.getParameter(Configuration.PARAM_REQUEST_DESCRIPTION) !=null&&
			request.getParameter(Configuration.PARAM_REQUEST_CATEGORY) !=null&&
			request.getParameter(Configuration.PARAM_REQUEST_IFRAME) !=null&&
			request.getParameter(Configuration.PARAM_REQUEST_LIKES) !=null&&
			request.getParameter(Configuration.PARAM_REQUEST_VIEWS) !=null
				) {
			
			String emailUser = request.getParameter(Configuration.PARAM_REQUEST_EMAILUSER);
			String account = request.getParameter(Configuration.PARAM_REQUEST_ACCOUNT);
			String description = request.getParameter(Configuration.PARAM_REQUEST_DESCRIPTION);
			String category = request.getParameter(Configuration.PARAM_REQUEST_CATEGORY);
			String Iframe = request.getParameter(Configuration.PARAM_REQUEST_IFRAME);
			String likes = request.getParameter(Configuration.PARAM_REQUEST_LIKES);
			String views = request.getParameter(Configuration.PARAM_REQUEST_VIEWS);
			
			FileManagerResponse response = dao.write(emailUser,account,description,category,
					Iframe,likes,views);
			boolean status = response.isStatus();
			
			webResponse.setStatus(status);
			if(!status) {
				
				webResponse.setError(true);
				webResponse.setErrorMessage(response.getError());
			}else {
				webResponse.setError(false);
				webResponse.setContent("Se ha guardado correctamente.");
			}
		}else {
			
			webResponse.setStatus(false);
			webResponse.setError(true);
			webResponse.setErrorMessage("No se ha podido guardar adecuadamente");
		}
			return webResponse;
	}

	public static WebResponse read(HttpServletRequest request) {
		WebResponse webResponse = new WebResponse();
		
		FileManagerResponse response = dao.read();
		
		if(request.getParameter(Configuration.PARAM_REQUEST_UPDATE) !=null) {
			
			boolean status = response.isStatus();
			webResponse.setStatus(status);
		
				if(!status) {
					webResponse.setError(true);
					webResponse.setErrorMessage("No se ha podido capturar los datos :(");
				}else {
					webResponse.setError(false);
					webResponse.setContent(response.getContent());	
				}
		}
		
		return webResponse;
	}
	
	
	public static WebResponse clear(HttpServletRequest request) {
		WebResponse webResponse = new WebResponse();
		FileManagerResponse response = dao.clear();
		
		if(request.getParameter(Configuration.PARAM_REQUEST_CLEAR) !=null) {
			
			boolean status = response.isStatus();
			webResponse.setStatus(status);
			
			if(!status) {
				
				webResponse.setError(true);
				webResponse.setErrorMessage(response.getError());
			}else {
				webResponse.setError(false);
				webResponse.setContent("Se ha Borrado la data correctamente.");
			}
		}else {
			webResponse.setStatus(false);
			webResponse.setError(true);
			webResponse.setErrorMessage("No se ha Borrado");
		}
			return webResponse;
	}
		
}
