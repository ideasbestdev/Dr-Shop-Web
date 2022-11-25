import { ReactNode, useEffect, useState } from "react";
import { PageUrls, TOKEN_KEY_NAME } from "@/utils/index";
import { useDispatch, useSelector } from "react-redux";
import { getUserState, setAuthenticated, setAuthUser, setUser } from "@/statemangment/slice/userSlice";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/helpers/index";
import { UserService } from '@/services/index';
import { ServerResModel, UserResModel, UserStateModel } from '@/models/index';
import Cookies from "js-cookie";
import { UserModel } from '@/models/index';

interface Children {
    children: ReactNode;
    component: any;
}

export default function AuthManger({ component, children }: Children) {

    const dispatch = useDispatch();
    const { currentuser } = useSelector(getUserState);
    const route = useRouter();

    useEffect(function () {
        async function getUserData() {
            const userService: UserService = new UserService();
            const response: ServerResModel = await userService.getUserInfo();
            if (response.success) {
                const userResponse: UserResModel = response.data.user;
                const user: UserStateModel = {
                    currentuser: userResponse.user,
                    isAuthenticated: true,
                };
                dispatch(setAuthUser(user));
            } else {
                Cookies.remove(TOKEN_KEY_NAME);
                const user: UserStateModel = {
                    currentuser: null,
                    isAuthenticated: false,
                };
                dispatch(setAuthUser(user));
            }
        }
        getUserData();

        if (!isAuthenticated() && component.auth) {
            route.push(PageUrls.LOGIN);
        }
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