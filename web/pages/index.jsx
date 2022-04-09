import Head from "next/head";
import Image from "next/image";
import React from 'react';
import Footer from '../components/footer';
import Inicio from '../components/inicio';


export default function Login() {
    return (
        <>
            <Head>
                <title>Genaració SM</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div id="img-start" className="div col-lg-6">
                        <div>
                            <Image
                                src="/logo.svg"
                                width="550"
                                height="550"
                                alt="logo"
                            />
                        </div>
                        <div id="d-subtitle">
                            SM t'ajuda a comunicar-te i compartir les teves
                            obres amb les persones que formen part del món de
                            l'art.
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
           
        </>
    );
}
