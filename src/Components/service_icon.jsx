import React from "react";

function ServiceIcon(props) {
  const { icon, title, text } = props;
  return (
    <div className="service-icon">
      <div className="icon">
        <img src={icon} alt="service icon" />
      </div>
      <div className="text">
        <p className="p1">{title}</p>
        <p className="p2">{text}</p>
      </div>
    </div>
  );
}
export default ServiceIcon;
