import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import "../styles/header.css";
import "../styles/register.css";
import "sweetalert2/src/sweetalert2.scss";

import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
