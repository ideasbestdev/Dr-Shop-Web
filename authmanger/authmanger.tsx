import { ReactNode, useEffect, useState } from "react";
import { auth, PageUrls, TOKEN_KEY_NAME } from "@/utils/index";
import { useDispatch, useSelector } from "react-redux";
import { getUserState, setUser } from "@/statemangment/slice/userSlice";
import { UserModel } from "@/models/index";
import { useRouter } from "next/router";

interface Children {
    children: ReactNode;
    component: any;
}

export default function AuthManger({ component, children }: Children) {

    const dispatch = useDispatch();
    const { currentuser } = useSelector(getUserState);
    const route = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        setLoading(true);
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                authUser.getIdToken().then(function (token) {
                    localStorage.setItem(TOKEN_KEY_NAME, token);
                });
            } else {
                localStorage.removeItem(TOKEN_KEY_NAME);
            }
            /*  if (authUser && authUser.emailVerified) {
                  const user: UserModel = {
                      email: authUser.email,
                      uid: authUser.uid,
                  };
  
                  dispatch(setUser(user));
  
                  if (component.goToHome) {
                      route.push(PageUrls.HOME);
                  }
  
              } else {
                  if (component.auth) {
                      route.push(PageUrls.LOGIN);
                  }
              }*/
            setLoading(false);
        });
    }, []);

    return (
        <>
            {children}
        </>
    )
}

{
    /*            <main style={{ display: `${loading ? "none" : "block"}` }}>
                {children}
            </main>
            <div style={{ display: `${loading ? "block" : "none"}` }}>Loading...</div> */
}