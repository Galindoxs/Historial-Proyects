package programLibraries;

public class WebResponse {

	private boolean status;
	private String content;
	private boolean error;
	private String errorMessage;
	
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public boolean isError() {
		return error;
	}
	public void setError(boolean error) {
		this.error = error;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	/**
	 * Se limpia el texto para provocar una respuesta limpia de JSON
	 * */
	
		
	private String clean(String text) {
	text = text.replaceAll("\n", "<br>");
	text = text.replaceAll("\t+", "  ");
	text = text.replaceAll("\"", "\\\\\"");
	
	return text;
	
	}
	
	private String getJson() {			
			
			StringBuilder result = new StringBuilder("{");
			result.append(String.format("\"%s\":%s,", "status", this.status));
			result.append(String.format("\"%s\":\"%s\",", "content", this.content));
			result.append(String.format("\"%s\":%s,", "error",this.error));
			result.append(String.format("\"%s\":\"%s\"", "errorMessage", this.errorMessage));
			result.append("}");
			
			return result.toString();
		}
	
	private String getJSONList() {
	//Crear Un JSON dentro de un JSON, "content":[{"name":"","etc":"etc"}]
		
		
		StringBuilder result = new StringBuilder("{");
		result.append(String.format("\"%s\":%s,", "status", this.status));
		result.append(String.format("\"%s\":%s,", "content", this.content));
		result.append(String.format("\"%s\":%s,", "error",this.error));
		result.append(String.format("\"%s\":\"%s\"", "errorMessage", this.errorMessage));
		result.append("}");
		
		return result.toString();
	}
	
	@Override
	public String toString() {
		
		return getJson();
	}
	
	public String toStringJsonList() {
		return getJSONList();
	}
		
}