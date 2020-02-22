const store = {
    apiKey: "f64fa3a06baf6798c7ec58e3a2abf2b4",
    locationName: "Brooklyn,nyc"
  }
  let weatherApp;
  window.onload = async function(){
    weatherApp = new Weather(store);
    await weatherApp.init();
    console.log(weatherApp.data.current)
  }