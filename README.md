# Automatización - Tottus

Automatización de pruebas en el portal Tottus utilizando JavaScript como lenguaje de programación e incluyendo las herramientas Cucumber, TestCafé y Cucumber Html Reporter.


### Pre-requisitos 📋

* Instalar [NodeJS](https://nodejs.org/es/).
* Instalar [Google Chrome](https://www.google.com/chrome/).
* Instalar [Internet Explorer](https://support.microsoft.com/es-es/help/17621/internet-explorer-downloads).

### Ejecución: 🚀

* Descargar el proyecto desde el repositorio. Ir a "Clone or download" y elegir la opción "Download ZIP".
* Descomprimir el .zip en una carpeta a elección.
* Abrir la Consola de comandos de Windows y situarse sobre la raíz del proyecto.
* Ejecutar el siguiente comando:

	**_npm install_**

* Una vez instaladas las dependencias, ejecutar:
     * Para ejecutar el test en Google Chrome: **_npm run test-chrome_**
     * Para ejecutar el test en Internet Explorer: **_npm run test-ie_** 
     * Para ejecutar el test en Google Chrome y generar el reporte: **_npm run test-chrome-report_**
     * Para ejecutar el test en Internet Explorer  y generar el reporte: **_npm run test-ie-report_**

* Si has ejecutado el test con el reporte, al finalizar el test se genera un archivo "report.json" en la carpeta "reports". Para generar el reporte en formato HTML y visualizarlo desde un navegador es necesario ejecutar el siguiente comando:
	
	**_npm run reporte-html_**
	
