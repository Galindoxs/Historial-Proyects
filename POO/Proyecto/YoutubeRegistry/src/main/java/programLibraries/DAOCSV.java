package programLibraries;

import fileManager.FileManager;
import fileManager.FileManagerResponse;

public class DAOCSV {
	
	private String model;
	
	public DAOCSV() {
		model = Configuration.DATA_MODEL;
	}
	
	public FileManagerResponse write(String emailUser, String account, String description, 
			String category, String Iframe, String likes, String views) {
		
		String csvRow = String.format("%s,%s,%s,%s,%s,%s,%s\n", replace(emailUser), replace(account), replace(description), replace(category), Iframe, replace(likes), replace(views));
		
		return FileManager.write(this.model, csvRow);
	}
	
	public FileManagerResponse read() {
		return FileManager.read(model);
	}
	
	public FileManagerResponse clear() {
		
		String oldModel = this.model;
		 model = "Removido_El_"+AdminFechas.getFechaActualString()+".csv";
		 FileManagerResponse result = FileManager.clear(oldModel, model);
		return result;
	}
	
	private static String replace(String array) {
		String result = array.replaceAll("([\"])", "@");
		result = array.replaceAll("([,])", "~");
		result = array.replaceAll("([;])","*" );
		result.trim();
		return result;
	}
}

