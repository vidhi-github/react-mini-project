import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./WeatherSearch.css";

export default function WeatherSearch({updateInfo}){

    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="407327cef93c632e2549e6440178f6a7";

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
    
            let jsonResponse = await response.json();
            let result ={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelslike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    };

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        console.log(newInfo);
        }catch(err){
            setError(true);
        }  
    }

     return(
        <>
        <div className="Search">
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br><br></br>
            <Button variant="contained" type="submit">
                Search
            </Button>
            {error && <p style={{color:"red"}}>No such place found in our API.</p>}
        </form>
        </div>
        </>
     )
}