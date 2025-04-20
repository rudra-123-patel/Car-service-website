import { useState } from "react";
import { useNavigate } from "react-router";

function SignUp() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassWord] = useState("");
  const [mnumber, setMnumber] = useState("");

  const saveData = (e) => {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("mail", mail);
    localStorage.setItem("password", password);
    localStorage.setItem("mnumber", mnumber);

    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <div className="form-area">
          <div className="text">
            <a
              href="/"
              style={{ borderBottom: "2px solid red", padding: "5px" }}
            >
              SIGN UP
            </a>
            <a href="/login">LOGIN</a>
          </div>

          <form onSubmit={saveData}>
            <label style={{ paddingTop: "10px" }}>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="mail"
              value={mail}
              placeholder="rjp123@gmail.com"
              onChange={(e) => setMail(e.target.value)}
            ></input>
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassWord(e.target.value)}
            ></input>
            <br />
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mnumber"
              value={mnumber}
              placeholder="Enter your mobile number"
              onChange={(e) => setMnumber(e.target.value)}
            ></input>
            <br />
            <div className="checkbox_area">
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox"
                required
              ></input>
              I agree to the terms and conditions
            </div>
            <button type="submit">REGISTER</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;
