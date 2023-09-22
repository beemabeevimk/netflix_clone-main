import React, { useEffect, useState } from "react";
import {API_KEY,imageUrl} from '../constants/constants'
import axios from "../../axios";
import "./Banner.css";


const Banner = () => {
  const [movie, Setmovie] = useState([]);

  useEffect(() => {
   axios.get('trending/all/week?api_key=01c73e693baa9ec20094002c88a2c58c&language=en-US').then((resp)=>{
    
    Setmovie(resp.data.results[0])
   console.log(resp.data.results)  })
}, [])

  return ( 
    
    <div className="banner"  style={{backgroundImage:`url(${movie? imageUrl+ movie.backdrop_path : ""})`}}>
      <div className="content">
        <h1 className="title">{movie?movie.title:""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
       { movie?movie.overview:""}
        </h1>
      </div>

      <div className="fade_bottom"> </div>
    </div>
  
  );
};

export default Banner;
