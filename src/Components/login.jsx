import { useState } from "react";

function Login() {
  // let navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    var mail1 = localStorage.getItem("mail");
    var pass1 = localStorage.getItem("password");
    if (mail1 === mail) {
      if (pass1 === pass) {
        alert("login");
        // navigate("/");
      } else {
        alert("Invalid Password");
      }
    } else {
      alert("Invalid Email");
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="form-area">
          <div className="text">
            <a href="/login" className="login-btn1">
              LOGIN HERE
            </a>
          </div>

          <form onSubmit={onSubmit}>
            {/* <label>Email:</label> */}
            <input
              type="email"
              name="username"
              value={mail}
              placeholder="Email"
              onChange={(e) => setMail(e.target.value)}
            />
            <br />
            {/* <label>Password:</label> */}
            <input
              type="password"
              name="password"
              value={pass}
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            {/* <div className="checkbox_area">
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox"
                checked="checked"
                required
              ></input>
              Keep Me Signed In
            </div> */}
            <button type="submit" className="login-btn2">
              LOGIN
            </button>
            <div className="forgot_area">
              Don't have an account? <br />
              <a href="/signup" className="login-btn3">
                SIGN UP
              </a>{" "}
              Here
            </div>
            login With
            <div className="social_area">
              <a href="/login/google" className="google-logo">
                <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" />
              </a>
              <a href="/login/facebook" className="facebook-logo">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" />
              </a>
              <a href="/login/twitter" className="twitter-logo">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" />
              </a>
              <a href="/login/github" className="github-logo">
                <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
