import React from "react";
import { useNavigate } from "react-router-dom";

const home01Pic = "/images/home01.png";
const chr01Img = '/images/chr01.png'
const chr02Img = '/images/chr02.png'
const chr03Img = '/images/chr03.png'
const chr04Img = '/images/chr04.png'

export default () => {
  const navigate = useNavigate();

  const playButtonClick = () => {
    navigate("/game");
  }

  const scoreButtonClick = () => {
    navigate("/scoreboard");
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <img src={home01Pic} alt="welcomeImage" width="300px" />
      <h1> WHERE IS WALDO? </h1>
      <h5>Try to find these 4 characters from a photo, be as soon as possible</h5>

      <div className='d-flex'>
        <img src={chr01Img} className='m-2 border border-black' />
        <img src={chr02Img} className='m-2 border border-black' />
        <img src={chr03Img} className='m-2 border border-black' />
        <img src={chr04Img} className='m-2 border border-black' />
      </div>

      <button type="button" className="btn btn-danger" onClick={playButtonClick}>Play Now</button>

      <hr />
      <button type="button" className="btn btn-success" onClick={scoreButtonClick}> Scoreboard </button>

    </div>
  )
};