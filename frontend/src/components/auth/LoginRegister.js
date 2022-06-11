import React, { useRef, useState, useEffect } from "react";
import MailOutlieIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import "./LogingRegister.css";
import { Face } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors, register } from "../../redux/actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

// import { GoogleLogin } from "react-google-login";
// import Icon from "./Icon";

function LoginRegister() {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated, navigate, error, alert]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftNaturalForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftNaturalForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  // const googleSuccess = async (res) => {
  //   // console.log(res);
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;
  //   try {
  //     dispatch({ type: "AUTH", data: { result, token } });
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const googleFailure = (err) => {
  //   console.log(err);
  //   console.log("google sign in fail. try again");
  // };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="LoginSignupContainer">
            <div className="LoginSignupBox">
              <div>
                <div className="login_signup_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form ref={loginTab} className="loginForm" onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlieIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Login" className="loginBtn" />
              </form>

              <form
                className="signupForm"
                ref={registerTab}
                encType="multipart/form-date"
                onSubmit={registerSubmit}
              >
                <div className="signupName">
                  <Face />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signupEmail">
                  <MailOutlieIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signupPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signupBtn" />
                {/* <GoogleLogin
                  clientId="119440947940-l6fm3iqffgm6ul1srt22skv9sgmf9fc8.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="googleBtn btn-primary"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      starticon={<Icon />}
                    >
                      Google Sign In
                    </button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                /> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginRegister;
