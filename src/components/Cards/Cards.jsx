import React from "react";
import style from "./Cards.module.css";


import photo1 from "../../assets/man.jpg";
import photo2 from "../../assets/astronaut-diving-digital-art.jpg";
import photo3 from "../../assets/full-shot-astronaut-wearing-equipment.jpg";
import photo4 from "../../assets/spaceman-riding-horse-outer-space.jpg";
import photo5 from "../../assets/spaceman-.jpg";
import photo6 from "../../assets/3d-rendering-astronaut.jpg";
export default function Cards() {


  const photoClick = e => {
   

    console.log('photo');
  };




  return (
    <>
 
  <div className="col-md-4 col-sm-12">
        <div class="card">
          <img src={photo1} alt="" onClick={photoClick }  />
        </div>
      </div>

      <div className="col-md-4 col-sm-12">
        <div class="card">
          <img src={photo2} alt="" onClick={photoClick } />
        </div>
      </div>

      <div className="col-md-4 col-sm-12">
        <div class="card">
          <img src={photo3} alt="" onClick={photoClick }  />
        </div>
      </div>

      <div className="col-md-4 col-sm-12">
        <div class="card">
          <img src={photo4} alt="" onClick={photoClick }   />
        </div>
      </div>

      <div className="col-md-4 col-sm-12">
        <div class="card">
          <img src={photo5} alt=""  onClick={photoClick } />
        </div>
      </div>

      <div className="col-md-4 col-sm-12">
        <div class="card">
          <img src={photo6} alt=""  onClick={photoClick } />
        </div>
      </div>
    </>
  );
}
