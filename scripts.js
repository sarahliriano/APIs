class Weather {
    
    constructor(options){
      // api.openweathermap.org/data/2.5/weather?q={city name},{state}
      this.config = {
        API_KEY: options.apiKey || "f64fa3a06baf6798c7ec58e3a2abf2b4",
        CURRENT_WEATHER_URL: "https://api.openweathermap.org/data/2.5/weather",
        LOCATION_NAME: options.locationName || 'Brooklyn,nyc',
        UNITS:'imperial'
      }
      
      
      
      this.data = {
        current: {},
        desc:{},
        feels:{},

      };
    }
  
    async init(){
      this.initializeForm();
      await this.update();
    }
  
    /**
     * initialize the form behavior
     */
    initializeForm(){
      const $form = document.querySelector('.form__container');
      
      $form.addEventListener('submit', async (e) => {
        e.preventDefault();
        this.config.LOCATION_NAME = encodeURI(e.target.location.value);
        await this.update();
      })
    }
    async getCurrentWeather(){
        try{
          const {CURRENT_WEATHER_URL,LOCATION_NAME,UNITS, API_KEY} = this.config;
          const requestURL = `${CURRENT_WEATHER_URL}?q=${LOCATION_NAME}&units=${UNITS}&APPID=${API_KEY}`
          const data = await fetch(requestURL);
          this.data.current = await data.json();  
        } catch(err){
          alert(err);
        }
        
      }
      
      /**
       * Render the current data
       * @param {*} currentData 
       */
      renderCurrentWeather(currentData){
        
        if(currentData.message){
          alert(`uh-oh! Looks like you formatted your city name incorrectly or that city does not exist. \n\n For example: \n ❤️ correct: vancouver,canada \n ✖️ incorrect: vancouver,bc`)
        }
    
        const currentTemp = Math.round(currentData.main.temp);
        const currentFeelsLikeTemp = Math.round(currentData.main.feels_like);
        const location = currentData.name;
        const desc = currentData.weather[0].description
        let icon = currentData.weather[0].icon;
        document.getElementById('desc_img').src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        
        
        const el = `
        <section class="current">
          <p class="current__location">${location}</p>
          <h2 class="current__temperature">${currentTemp}°</h2>
        </section>
        `
        const el1 = `
        <section class="desc">
          <p class="current__description">${desc}</p>
       
        </section>
        `
        const el2 = `
        <section class="feels">
        <p class="current_feels_text"> Feels Like </p>
          <p class="current__feels">${currentFeelsLikeTemp}°</p>
        </section>
        `
        
        const $currentEl = this.createElementFromText(el);
        const $current = document.querySelector(".current");
        $current.replaceWith($currentEl)

        const $currentEl1 = this.createElementFromText(el1);
        const $desc = document.querySelector(".desc");
        $desc.replaceWith($currentEl1)

        const $currentEl2 = this.createElementFromText(el2);
        const $feels = document.querySelector(".feels");
        $feels.replaceWith($currentEl2)

        this.showClothes(currentFeelsLikeTemp);
        this.backgroundChange;

      }
      
      

      async update(){
        await this.getCurrentWeather();
        this.renderCurrentWeather(this.data.current)
        
      }
    
      

      /**
       * Creates an HTML element from a string
       * @param {*} textEl 
       */
      createElementFromText(textEl){
        let $currentEl = document.createElement('div')
        $currentEl.innerHTML = textEl;
        $currentEl = $currentEl.firstElementChild;
        
        return $currentEl;
      }
      
      
    showClothes(temp) {
        
        if (temp < 38) {
            console.log('cold');
            document.getElementById('fall').style.visibility = 'hidden';
            document.getElementById('rain').style.visibility = 'hidden';
            document.getElementById('summer').style.visibility = 'hidden';
            document.getElementById('winter').style.visibility = 'visible';
        }
        else if (temp > 39 && temp < 50) {
            console.log('mild');
            document.getElementById('rain').style.visibility === 'hidden';
            document.getElementById('winter').style.visibility === 'hidden';
            document.getElementById('summer').style.visibility === 'hidden';
            document.getElementById('fall').style.visibility === 'visible';
        }
        else if (temp > 50) {
            console.log('warm');
            document.getElementById('rain').style.visibility === 'hidden';
            document.getElementById('winter').style.visibility === 'hidden';
            document.getElementById('fall').style.visibility === 'hidden';
            document.getElementById('summer').style.visibility === 'visible';}
        }

       
       
        backgroundChange(color) {
            if (currentFeelsLikeTemp > 50){
                    color = "pink";
                    console.log('pink');
            }
            else { color = "blue";
            console.log('BLUE');
            }
            document.body.style.background = color;
            }
    }