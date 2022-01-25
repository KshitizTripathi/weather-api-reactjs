import React, { useEffect, useState } from 'react';
import "../css/styles.css";
const Tempapp = () => {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7af9ab6b8e6d921c4209b38d6ca0ce77`
            const response=await fetch(url);
           
            const resJson=await response.json();
             console.log(resJson);
            setCity(resJson.main); 
        }

        fetchApi();
    },[search])
  return(
      <>
        <div className='box'>
            <div className='inputData'>
                <input type="search" className='inputField'
                onChange={(event)=>{
                    setSearch(event.target.value)
                }} />
            </div>

            {!city ? (
                <p className='errorMsg'>No data found</p>
            ):(
                <div>
                <div className='info'>
                <h2 className='location'>
                <i class="fas fa-street-view">{search}</i>
                </h2>
                <h1 className='temp'>
                    {city.temp}°C
                </h1>
                <h3 className='tempmin_max'>{city.temp_min}° C | {city.temp_max}° C</h3>
            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div> 
            </div> 
            )

            }
           
            
        </div>
      </>
  )
};

export default Tempapp;
