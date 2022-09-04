# dashboard
Proyecto de dashboard index básico HTML en plataforma NodeJS, utilizando Javascript con funcion asíncrona y fetch, retornando datos de una API que alimenta información de criptomonedas. Se usa Chart.js, una libería de JavaScript para despliege de datos obtenidos de la API en el grafico.


API:
https://api.nomics.com/v1/currencies/ticker?key=70f4934c699f362a4bb070dbbd51e7421bf255c9&ids=BTC&per-page=100&page=1%22

DOCUMENTACIÓN DE API:
https://nomics.com/docs/#operation/getCurrenciesTicker


Dependencias de paquetes requeridos:
    chartjs: "^0.3.24",
    node-fetch: "^3.2.10",
    nodemon: "^2.0.19"


INSTALAR USANDO:
npm -i nombre-de-la-dependencia

ejemplo: npm -i chartjs

USAR:
npm start 


El proyecto despliega servidor WEB en puerto 3000 por defecto: 
http://localhost:3000


Autor: Pablo Esteban Villagrán Placencia