import { ReactNode } from "react";
import { Alert } from "./Alert";
import { useSelector } from "react-redux";
import { getAlertState } from "@/statemangment/slice/alertSlice";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/styledcomponents/index";
import Header from "./Header";

interface PageComponent {
    children: ReactNode;
}

export default function Layout({ children }: PageComponent) {
    // const { message } = useSelector(getAlertState);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Alert />
            <Header />
            {children}
        </ThemeProvider>
    );
}
