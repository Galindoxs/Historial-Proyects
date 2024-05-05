package fileManager;


import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import programLibraries.Configuration;

public class FileManager {
	
	private static void write(String model) {
		File f = new File(model);
	}

	public static FileManagerResponse write(String model, String csvRow) {
		
		File f = new File(model);
		FileManagerResponse response = new FileManagerResponse();
		 try {
			 FileWriter w = new FileWriter(f,true);
			 BufferedWriter bw = new BufferedWriter(w);
			 bw.write(csvRow);
			 bw.close();
			 response.setStatus(true);
			 response.setContent("Se guardo el contenido");

			 return response;
		 }catch(IOException error) {}
		 
		 response.setStatus(false);
		 response.setContent("No se guardo el contenido");

		 read(model);
		return response;
	}
	
	public static FileManagerResponse read(String model) {

		FileManagerResponse response = new FileManagerResponse();
		
		try {
			
			BufferedReader br = new BufferedReader(new FileReader(model));
			String line;			
			StringBuilder str = new StringBuilder("[");
			
			 while ((line = br.readLine()) != null) {
	        	 String[] fields = line.split(",");
	        	 
	        	 str.append("{");
	        	 str.append(String.format("\"emailUser\":\"%s\",",fields[0] ));
	        	 str.append(String.format("\"acount\":\"%s\",",fields[1] ));
	        	 str.append(String.format("\"description\":\"%s\",",fields[2] ));
	        	 str.append(String.format("\"category\":\"%s\",",fields[3]));
	        	 str.append(String.format("\"Iframe\":\"%s\",",fields[4].replaceAll("([\"])", "@")));
	        	 str.append(String.format("\"likes\":\"%s\",",fields[5] ));
	        	 str.append(String.format("\"views\":\"%s\"",fields[6] ));
	        	 str.append("},");
			}
	         str.append("{\"final\":\"Termino el registro\"}");
         br.close();
	            
         response.setStatus(true);
         response.setContent(str.toString());
        
         return response;
	         
		}catch(IOException ex) {
			write(Configuration.DATA_MODEL);
			response.setStatus(false);
			response.setContent("No hay registro");
			return response;
		}
        
        
		
	}
	
	
	public static FileManagerResponse clear(String oldModel,String model) {
		
		File f = new File(oldModel);
		FileManagerResponse response = new FileManagerResponse();
		
		 try {
			 
			 FileWriter w = new FileWriter(f);
			 w.flush();
			 w.close();
	
			 FileManager.write(model);
			
			 response.setStatus(true);

			 return response;
			 
		 }catch(IOException error) { 
			 response.setStatus(false);
			 response.setContent("Algo salio mal "+error.toString());
			 return response;
		 }
	}
	
}


