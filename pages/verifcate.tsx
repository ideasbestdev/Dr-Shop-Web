import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { auth, baseUrl, DoctorController, PageUrls, TOKEN_KEY_NAME } from '@/utils/index';
import { UserService } from '@/services/index';
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { faL } from '@fortawesome/free-solid-svg-icons';

function verifcate() {

    const router = useRouter();
    const userService: UserService = new UserService();
    var t = true;
    useEffect(() => {
        /* if (t) {
             t = false;
             const url = baseUrl + DoctorController + localStorage.getItem("id") + "/" + localStorage.getItem("user_uuid") + "/verify-email?email=hussein-cheaitou@hotmail.com" + "&callback=http://localhost:3000/verifcate"
             console.log(url);
             signInWithEmailAndPassword(auth, "hussein-cheaitou@hotmail.com", "12345678")
                 .then(async (userCredential) => {
                     const actionCodeSettings = {
                         url: url,
                         handleCodeInApp: true,
                     };
                     sendEmailVerification(userCredential.user, actionCodeSettings);
 
                 });
         }*/

        //   userService.verifcate(url);
        /*  if (router.query.email != undefined) {
              if (localStorage.getItem(TOKEN_KEY_NAME)) {
                  alert(localStorage.getItem(TOKEN_KEY_NAME));
              }
              router.replace(PageUrls.HOME);
  
          }*/
    }, [])//router.query


    return (
        <div></div>
    )
}

export default verifcate