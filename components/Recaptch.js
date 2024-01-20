import React, { useEffect } from 'react'
import {  RecaptchaVerifier } from "firebase/auth";
import { auth } from '@/utils/index';

function Recaptch() {
    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            'expired-callback': () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          }, auth);

          recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
          });
          const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);

    }, [])
    
  return (
    <div style={{zIndex: "4", position: "relative"}} id="recaptcha-container">recaptch</div>
  )
}

export default Recaptch