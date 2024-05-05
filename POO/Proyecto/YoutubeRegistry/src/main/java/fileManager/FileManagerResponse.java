package fileManager;

public class FileManagerResponse {
	
	private boolean status; 
	private String error;
	private String content;

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	public boolean isStatus() {
		return status;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getError() {
		return error;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content+"]";
	}	
	
}
