import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    const INIT_URL="https://cdn.pixabay.com/photo/2015/08/30/11/17/shore-914149_1280.jpg";
    
    let COLD_URL="https://cdn.pixabay.com/photo/2018/01/18/09/29/winter-3089890_1280.jpg";
    let HOT_URL="https://www.shutterstock.com/shutterstock/photos/360422789/display_1500/stock-photo-standalone-trees-during-a-very-hot-summer-360422789.jpg";
    let RAIN_URL="https://cdn.pixabay.com/photo/2023/06/01/16/49/castle-8033915_1280.jpg";

    return(
        <>
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
                    }
                    title="weather"
                 />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                        info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                    }
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C.
                        </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
        </>
    )
}