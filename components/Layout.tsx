import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlertState } from "@/statemangment/slice/alertSlice";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/styledcomponents/index";
import { Alert, Footer, Header } from "./shared";
import { AssetsImages, DEVICEID_KEY_NAME } from '@/utils/index';
import { getGlobalState, setCurrentPage } from "@/statemangment/slice/globalSlice";
import Cookies from 'js-cookie';
import { getDeviceId, uuidv4 } from '@/helpers/index';
import { VerificationPop } from "./popups";
import { UserService } from '@/services/userService';

interface PageComponent {
    children: ReactNode;
    component: any;
}

export default function Layout({ component, children }: PageComponent) {
    const { showVerificationPop } = useSelector(getGlobalState);

    useEffect(function () {
        getDeviceId();
        //  if (!localStorage.getItem("cart_key")) {
        //      localStorage.setItem("cart_key", uuidv4())
        //  }
    }, [])
    useEffect(function () {
        // const userServce = new UserService();
        // userServce.verifcate();
        //        console.log(component.class);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Alert />
            <Header />
            <main className={`${component?.class ? component.class : ""}`}>
                {children}
            </main>
            <VerificationPop show={showVerificationPop} />
            <Footer />
        </ThemeProvider>
    );
}
