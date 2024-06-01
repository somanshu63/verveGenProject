import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || password === "") {
      setError("input fields can't be empty");
    } else {
      if (!emailRegex.test(email)) {
        setEmailError("email is not valid");
      } else {
        setEmail("");
        setPassword("");
        login();
      }
    }
  }
  function login() {
    fetch(`https://vervegenproject.onrender.com/users/login`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then((user) => {
        console.log(user);
        props.setUser(user);

        history.push("/dashboard");
      })
      .catch((errors) => {
        setError(errors);
      });
  }
  return (
    <div className="flex loginContainer justify-center items-center ">
      <div className="w-1/5">
        <h1 className="text-2xl text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
          ></input>
          {emailError ? (
            <p className="text-base tracking-widest text-red-500 pt-4">
              {emailError}
            </p>
          ) : (
            ""
          )}
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password"
          ></input>
          {error ? (
            <p className="text-base tracking-widest text-red-500 pt-4">
              {error}
            </p>
          ) : (
            ""
          )}{" "}
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
