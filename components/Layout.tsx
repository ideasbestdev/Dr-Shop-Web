import { ReactNode } from "react";
import { Alert } from "./alert";
import { useSelector } from "react-redux";
import { getAlertState } from "@/statemangment/slice/alertSlice";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/styledcomponents/index";

interface PageComponent {
    children: ReactNode;
}

export default function Layout({ children }: PageComponent) {
    const { message } = useSelector(getAlertState);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Alert />
            <main>{children}</main>
        </ThemeProvider>
    );
}
