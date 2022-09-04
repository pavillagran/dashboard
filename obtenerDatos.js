import fetch from 'node-fetch';

// FUNCION ASINCRONA CON FECTH
async function getCriptos(){
   try{
        let response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=70f4934c699f362a4bb070dbbd51e7421bf255c9&ids=BTC&per-page=100&page=1%22`);
        //let [data]= await response.json();
        const data = await response.json()
        // map a cada dato relevante de la API
        const nameCoin = data.map((x) => x.name)
        const idCoin = data.map((x) => x.id)
        const priceCoin = data.map((x) => x.price)
        const priceCoinDate = data.map((x) => x.price_date)
        const priceHigh = data.map((x) => x.high)
        const priceHightDate = data.map((x) => x.high_timestamp)
        const coinStatus = data.map((x) => x.status)

        const importanteApi =  {name: nameCoin, moneda: idCoin, precio: priceCoin, fecha: priceCoinDate, max: priceHigh,fechamax: priceHightDate, estado: coinStatus } 
        console.log(importanteApi)
        const datosgrafico = {priceCoin,priceHigh } 
        return datosgrafico  // solo precio y precio mas alto , variable 3 tiene todo lo importante de la consulta a la API.
      }catch(error){
    console.log(error)   // enseña el error si conecta mal 
   } 
  }
  

  
 export let criptoS = await getCriptos();    // obtener datos


//https://api.nomics.com/v1/currencies/ticker?key=70f4934c699f362a4bb070dbbd51e7421bf255c9&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=${Coin}



