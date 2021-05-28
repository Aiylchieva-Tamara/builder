// import React from "react";
// import axios from "../../axios";
// import { start, auth } from "../../store/actions/auth";
// import withAxios from "../withAxios";
// import classes from "./Auth.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useLocation } from "react-router-dom";
// import Button from "../UI/Button/Button";

// export default withAxios(() => {
//   const dispatch = useDispatch();
//   const { loading, error, token } = useSelector(state => state.auth);
//   const location = useLocation();

//   const formSubmitted = (event) => {
//     dispatch(start());

//     const data = new FormData(event.target);
//     const method = event.nativeEvent.submitter.innerText === "Sign in"
//       ? "signin" : "signup";
//     dispatch(auth(method, data.get('email'), data.get('password')));

//     event.preventDefault();
//   }

//   let formOutput = "Loading...";
//   if (!loading) {
//     formOutput = (
//       <form onSubmit={formSubmitted}>
//         <h1>Welcome</h1>
//         <input type="email" placeholder="E-mail" name="email" required />
//         <input type="password" placeholder="Password" name="password" required minLength="6" />
//       <div className={classes.Buttons}>
     
//           <Button>Sign in</Button>
//         <Button>Sign up</Button>
//       </div>
      
//       </form>
//     );
//   }

//   let errorOutput = null;
//   if (error) {
//     errorOutput = <h4 className = {classes.error}>{error.message}</h4>;
//   }

//   const [,redirect] = location.search.split('?');
//   let redirectOutput = null;
//   if (token !== null) {
//     redirectOutput = <Redirect to={"/" + redirect ? redirect : "/"} />;
//   }

//   return (
//     <div className={classes.Auth}>
//       {errorOutput}
//       {formOutput}
//       {redirectOutput}
//     </div>
//   );
// }, axios);
import classes from "./Auth.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { auth, start } from "../../store/actions/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const { token, error, loading } = useSelector(state => state.auth);
  const [method, setMethod] = useState("signin");

  const submitCallback = (event) => {
    event.preventDefault();

    dispatch(start());

    const data = new FormData(event.target);

    dispatch(auth(method, data.get('email'), data.get('password')));
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <h4 style={{ color: "red" }}>{error}</h4>;
  }

  let redirectOutput = null;
  if (token) {
    redirectOutput = <Redirect to="/" />
  }

  return (
    <div className={classes.Auth}>
      <div className={classes.h1}>
      <h1>Welcome</h1>
      </div>
      {errorOutput}
      <form onSubmit={submitCallback}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <div >
        <button onClick={() => setMethod("signin")} disabled={loading}>Sign in</button>
        <button onClick={() => setMethod("signup")} disabled={loading}>Sign up</button>
        </div>
      </form>
      {redirectOutput}
    </div>
  );
}
 
export default Auth;