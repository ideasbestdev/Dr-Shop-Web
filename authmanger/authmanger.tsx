import { ReactNode, useEffect } from "react";
import { PageUrls, TOKEN_KEY_NAME } from "@/utils/index";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isAuthenticatedHelper } from "@/helpers/index";
import { UserService } from '@/services/index';
import { AppConfigModel, FirstRequestModel, ServerResModel } from '@/models/index';
import Cookies from "js-cookie";
import { setCurrentPage, setFirstRequest } from "@/statemangment/slice/globalSlice";

interface Children {
    children: ReactNode;
    component: any;
}

export default function AuthManger({ component, children }: Children) {

    const dispatch = useDispatch();
    const route = useRouter();



    useEffect(function () {
        async function getUserData() {
            const userService: UserService = new UserService();
            const response: ServerResModel = await userService.getUserInfo();
            if (response.success) {
                const appResponse: FirstRequestModel = response.data;
                if (appResponse != null) {
                    if (component.goToHome && appResponse.user == null) {
                        route.push(PageUrls.HOME);
                    }
                } else {
                    Cookies.remove(TOKEN_KEY_NAME);
                }
                dispatch(setFirstRequest(appResponse));

            }
        }
        getUserData();
        if (!isAuthenticatedHelper() && component.auth) {
            route.push(PageUrls.LOGIN);
        }
    }, []);

    // useEffect(function () {
    //     dispatch(setCurrentPage(component.componentName));
    // }, [component])

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