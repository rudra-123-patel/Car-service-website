import React from "react";
import ServiceIcon from "../Components/service_icon";

function Services() {
  return (
    <>
      <div className="services">
        <p className="header-text">
          <h1>Services</h1>
        </p>
        <div className="services-text">
          <p className="info-text">
            We provide the best services Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem nemo, laborum adipisci similique deserunt
            quod. Tempora tenetur voluptatem minus ex,
          </p>
        </div>
        <div className="services-list">
          <ServiceIcon
            icon="https://cdn-icons-png.flaticon.com/128/2077/2077502.png"
            title="Car Wash"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
          />
          <ServiceIcon
            icon="https://cdn-icons-png.flaticon.com/512/75/75704.png"
            title="Car Checkup"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
          />
          <ServiceIcon
            icon="https://cdn-icons-png.flaticon.com/512/0/429.png"
            title="Car Repair"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
          />
          <ServiceIcon
            icon="https://cdn-icons-png.flaticon.com/128/4870/4870989.png"
            title="Car Polish"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
          />
          <ServiceIcon
            icon="https://cdn-icons-png.flaticon.com/128/3389/3389488.png"
            title="Car Detailing"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
          />
          <ServiceIcon
            icon="https://cdn-icons-png.flaticon.com/128/7600/7600654.png"
            title="Car Alignment"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum."
          />
        </div>
      </div>
    </>
  );
}
export default Services;
