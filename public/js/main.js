const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const temp_status =document.getElementById('temp_status');
const temp =document.getElementById('temp');
const datahide =document.querySelector('.middle_layer');
const city_name = document.getElementById('city_name');
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal ==""){
        city_name.innerText =`please write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=85f3910e4ba281dadef3cac532b2f91a`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData =[data];
           
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
        
            const tempMood = arrData[0].weather[0].main;
           // console.log(data);
           //condition  to check sunny or cloudy
         
           if(tempMood =="Clear"){
            temp_status.innerHTML =
            "<i class = 'fas fa-sun' style='color:#eccc68;'></i>"
           }else if(tempMood =="Clouds"){
            temp_status.innerHTML =
            "<i class = 'fas fa-cloud' style='color:#f1f2f6;'></i>"
           }else if(tempMood =="Rain"){
            temp_status.innerHTML =
            "<i class = 'fas fa-cloud-rain' style='color:#a4b0be;'></i>"
           }else {
            temp_status.innerHTML =
            "<i class = 'fas fa-cloud' style='color:#f1f2f3f6;'></i>"
           }
           datahide.classList.remove('data_hide');
         }catch{
            city_name.innerText =`please enter the city name properly`;
            datahide.classList.add('data_hide');
          }
        
    }
}

submitBtn.addEventListener('click', getInfo);

