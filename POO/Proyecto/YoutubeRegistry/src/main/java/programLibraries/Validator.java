package programLibraries;

public class Validator {
	public static String clean(String text) {
		text = String.format("%s", text).trim().replaceAll("[<>{}\\[\\];\"'`~&()]+", "");
		return text;
	}

}
