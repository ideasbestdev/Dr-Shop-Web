import type { AppProps } from 'next/app'
import { store } from '@/statemangment/store'
import { Provider } from 'react-redux'
import AuthManger from "@/authmanger/authmanger";
//import "@/assets/css/style.css";
import Layout from "@/components/Layout";
import 'react-phone-number-input/style.css'
import 'swiper/css';
//import "animate.css/animate.min.css";
import "../assets/css/animate.css";
import { useEffect } from 'react';
import { Head } from 'next/document';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
            <Layout>
                <AuthManger component={Component}>
                    <Component {...pageProps} />
                </AuthManger>
                <Script src='/static/script.js' />
            </Layout>
        </Provider>
    )
}

export default MyApp
