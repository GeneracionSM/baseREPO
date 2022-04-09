import Head from "next/head";
import Image from "next/image";
import React from 'react';
import Footer from '../components/footer';


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

                    <div className="offset-lg-1 col-lg-4 form">
                        <div className="shadow-lg p-4 mb-5 bg-body rounded">
                            <form name="f-login" method="post">
                                <div id="form">
                                    <label for="username">Usuari:</label>
                                    <input
                                        id="i-username"
                                        name="username"
                                        className="form-control padding"
                                        placeholder="Usuari"
                                        required
                                    />
                                    <label for="password">Contrassenya:</label>
                                    <input
                                        id="i-password"
                                        type="password"
                                        name="password"
                                        className="form-control padding"
                                        placeholder="Contrassenya"
                                        required
                                    />
                                    <button
                                        id="b-login"
                                        type="submit"
                                        className="my-btn btn btn-secondary padding padding-2"
                                    >
                                        Inicia sessió
                                    </button>
                                    &nbsp;
                                    <a
                                        id="b-register"
                                        className="my-outline-btn btn btn-outline-secondary padding padding-2"
                                        href="#"
                                        role="button"
                                    >
                                        Registra't
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
            <Footer></Footer>
            </footer>
            
        </>
    );
}
