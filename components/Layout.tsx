import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAlertState } from "@/statemangment/slice/alertSlice";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/styledcomponents/index";
import { Alert, Footer, Header } from "./shared";
import { AssetsImages } from '@/utils/index';

interface PageComponent {
    children: ReactNode;
}

export default function Layout({ children }: PageComponent) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Alert />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    );
}
