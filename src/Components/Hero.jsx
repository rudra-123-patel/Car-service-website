import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Hero() {
  let navigate = useNavigate();

  const [name, setName] = useState("");

  useEffect(() => {
    var a = localStorage.getItem("name");
    setName(a);
  });

  const logIn = () => {
    navigate("/login");
  };

  const logOut = () => {
    localStorage.clear();
    setName("");
    navigate("/");
  };
  return (
    <>
      {/* <div className="text_area">
        <h1>Sentence</h1>

        <Timer />
        <div className="sentence_div">
          <p className="sentence_area">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            obcaecati fugit eos vero quam rem quidem nam quae voluptatum ducimus
            maiores rerum molestias assumenda, maxime a! Molestiae dolore iure
            ipsam?
          </p>
        </div>
      </div> */}
      {/* <h1>Home</h1> */}

      <div id="mydiv">{name}</div>
      {/* <ChangePwd /> */}

      <button onClick={logIn}>Login</button>
      <button onClick={logOut}>Logout </button>
      {/* <button onClick={changePwd}>Change pass</button> */}
    </>
  );
}

export default Hero;
