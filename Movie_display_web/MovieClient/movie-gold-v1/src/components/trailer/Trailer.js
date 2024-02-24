import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './Trailer.css';

import React from 'react'

const Trailer = () => {

  const { key } = useParams();

  return (
    <div className="react-player-container">
        {key ? <ReactPlayer controls={true} playing={true} url = {`https://www.youtube.com/watch?v=${key}`} 
        width = '100%' height='100%' />:null}
    </div>
  );
}

export default Trailer;
