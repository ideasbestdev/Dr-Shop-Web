import type { AppProps } from 'next/app'
import { store } from '@/statemangment/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import AuthManger from "@/authmanger/authmanger";
import Layout from "@/components/Layout";
import 'react-phone-number-input/style.css'
import 'swiper/css';
import "swiper/css/pagination";
import "../assets/css/animate.css";
import Script from 'next/script';
import 'react-intl-tel-input/dist/main.css';
import { getGlobalState, setCurrentPage } from '@/statemangment/slice/globalSlice';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
            <Layout component={Component}>
                <AuthManger component={Component}>
                    <Component {...pageProps} />
                </AuthManger>
                <Script src='/static/script.js' />
            </Layout>
        </Provider>
    )
}

export default MyApp
