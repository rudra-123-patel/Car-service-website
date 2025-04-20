import React from "react";
import ServiceIcon from "../Components/service_icon";

function Services() {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h1>About</h1>
          <p>We provide the best services</p>

        </div>
        <div className="about-content">
          <div className="services-list">
            <ServiceIcon
              icon="https://cdn-icons-png.flaticon.com/128/2077/2077502.png"
              title="Car Wash"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
            />
            <ServiceIcon
              icon="https://cdn-icons-png.flaticon.com/128/2077/2077502.png"
              title="Car Wash"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
            />
            <ServiceIcon
              icon="https://cdn-icons-png.flaticon.com/128/2077/2077502.png"
              title="Car Wash"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
            />
            <ServiceIcon
              icon="https://cdn-icons-png.flaticon.com/128/2077/2077502.png"
              title="Car Wash"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
            />
            <ServiceIcon
              icon="https://cdn-icons-png.flaticon.com/128/2077/2077502.png"
              title="Car Wash"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
            />
            <ServiceIcon
              icon="https://cdn-icons-png.flaticon.com/128/2077/2077502.png"
              title="Car Wash"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
