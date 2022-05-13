import React ,  {useEffect,useState} from "react";
import { ListGroup, Card,ListGroupItem} from 'react-bootstrap';
import download from './download.jpg';


const Temp=()=>{
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("London");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bae24473c949fae120fe83935b4fd8d1`
            const response=await fetch(url);
            const resjson=await response.json();
            setcity(resjson.main);
            console.log(resjson.main)
        };
        fetchApi();
    },[search])
    return(
        <>
        <div className="App">
        <div className="App">
            <h4 style={{color:'brown'}}>WHEATHER APPLICATION</h4>
        <div>
        <input type="search" value={search} onChange={(event)=>{setsearch(event.target.value)}}  className="search"
        style={{marginTop:'30px',width:'285px',height:'40px',borderRadius:'20px',borderBlockWidth:'5px'}}/>
        </div>
        
        { !city ? (
                
                <h4 style={{color:'red'}}>city not found...</h4>
            ) : 
          
             (

  <Card className="cardstyle">
  <Card.Img variant="top" src={download} className="image"/>
  <Card.ImgOverlay>

    <Card.Title><h3> {search}</h3></Card.Title>
    <div style={{marginTop:'35px'}}>
    <h1>{Math.round(city.temp-273)} C</h1>
    <h5 style={{color:'red'}}>Feels like: {Math.round(city.feels_like-273)} C</h5>

    <h5 style={{color:'blue'}}> Pressure : {city.pressure}</h5>
    <h5 style={{color:'green'}}> Humidity : {city.humidity}</h5>
    </div>
    </Card.ImgOverlay>

  
</Card>
              
            ) }
            </div>
            </div>
        </>
    )

}
export default Temp;