const API_Key = `98ea02ef5951c86423881c9bb0ae6640`

const searchTempareture = () => {
    const input = document.getElementById('city_seach_field')
    const city = input.value;
    input.value='';


        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
        fetch(url).then(res=>res.json()).then(data=>addingData(data))

        const updateInformation=(id,text)=>{
            document.getElementById(id).innerText=text;
        }

    const addingData = data => {
        console.log(data);
        updateInformation('theCity',data.name);
        updateInformation('theTemp',data.main.temp);
        updateInformation('conditions',data.weather[0].main);

        // set atribute
        const url=` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById('theIcon').setAttribute('src',url)
        
  



       
    }

}




