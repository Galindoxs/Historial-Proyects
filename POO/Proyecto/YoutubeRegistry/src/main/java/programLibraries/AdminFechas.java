package programLibraries;

import java.text.SimpleDateFormat;
import java.util.Date;


/**
* Clase extraida de un proyecto anterior de las clases de programación*
*
*/

public class AdminFechas {
    
    /**
     * Obtiene fecha actual en el formato yyyy-MM-dd-hh-mm-ss
     * @return 
     */
    public static String getFechaActualString() {
        Date fechaActual = new Date();
        SimpleDateFormat format2 = new SimpleDateFormat("yyyy-MM-dd-hh-mm-ss");
        return format2.format(fechaActual);
    }
	
}

