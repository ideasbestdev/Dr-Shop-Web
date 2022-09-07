import { ReactNode, useEffect, useState } from "react";
import { auth, PageUrls } from "@/utils/index";
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
            }

            setLoading(false);
        });

    }, []);

    return (
        <>
            <div style={{ display: `${loading ? "none" : "block"}` }}>
                {children}
            </div>
            <div style={{ display: `${loading ? "block" : "none"}` }}>Loading...</div>
        </>
    )
}