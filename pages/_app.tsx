import type { AppProps } from 'next/app'
import { store } from '@/statemangment/store'
import { Provider } from 'react-redux'
import AuthManger from "@/authmanger/authmanger";
//import "@/assets/css/style.css";
import Layout from "@/components/Layout";
import 'react-phone-number-input/style.css'
import 'swiper/css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <AuthManger component={Component}>
                    <Component {...pageProps} />
                </AuthManger>
            </Layout>
        </Provider>
    )
}

export default MyApp
