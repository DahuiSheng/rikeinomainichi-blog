import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import usePageView from "../components/_common/hooks/usePageView";

function MyApp({ Component, pageProps }: AppProps) {
    usePageView()
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
