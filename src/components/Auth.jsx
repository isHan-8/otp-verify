import React, { useState, useRef } from "react";
import firebase from "../firebase";

const Auth = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [verificationId, setverificationId] = useState("");
  const recaptchaRef = useRef(null);

  const handleSendOtp = () => {
    if (recaptchaRef.current) {
        recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>'
     }
    const verifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, verifier)
      .then((cofirmationResult) => {
        setverificationId(cofirmationResult.verificationId);
        //    logic after sending or verifying otp
      })

      .catch((error) => {
        console.error("Error Sending otp:", error);
      });
  };

  return (
    <div>
      <h1> Phone OTP Authentication </h1>
      <div ref={recaptchaRef}></div>
      <input
        type="tel"
        placeholder="+916392472195"
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
    </div>
  );
};

export default Auth;
