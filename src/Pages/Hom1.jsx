import React from "react";
import Services from "./Services";
function Home1() {
  return (
    <>
   

      <div className="container">
        <div className="home1">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.684xw:0.577xh;0.0321xw,0.281xh&resize=1200:*"
            alt="car"
          />
          <p className="image-text">
            Make Your <span>Car</span> Shine
          </p>
          <div className="text-area">
            <p className="text1">Make Your Car Shine With Our Service.</p>
            <p className="text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              enim non cumque minus cupiditate debitis natus? Aliquam atque
              reiciendis odit!
            </p>
            <button className="btn1">Gallery</button>
          </div>
        </div>
        <Services />
        
      </div>
    </>
  );
}
export default Home1;
