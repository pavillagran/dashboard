//import { criptoS } from './obtenerDatos.js';       // NO FUNCIONA CHART SI SE IMPORTAN
//import datagrafico from './main.js'





//async function chart (){             // con async
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Bitcoin", "Ethereum", "Ripple"],
      datasets: [
        {
          label: "Valor en dólares",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [19798,5267,734]          // AGREGAR DATA 
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Valor en dólares.'
      }
    }
})

// }    del async