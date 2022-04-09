import Swal from 'sweetalert2/dist/sweetalert2.js'




function llamarAlerta(){
        (async () => {
    
            const { value: file } = await Swal.fire({
              title: 'Publicar contingut',
              input: 'file',
              inputAttributes: {
                // 'accept': 'image/*',
                'aria-label': 'Publica el teu art'
              }
            })
            
            if (file) {
              const reader = new FileReader()
              reader.onload = (e) => {
                Swal.fire({
                  title: 'Your uploaded picture',
                  imageUrl: e.target.result,
                  imageAlt: 'The uploaded picture'
                })
              }
              reader.readAsDataURL(file)
            }
            
            })()
    }

export default function muro() {

    
    
    return (
        <>

            <div className="container">
                <div className="row">
                    <div id="img-start" className="div col-lg-6">
                        <div>

                        </div>
                        <div id="d-subtitle">
                            SM t'ajuda a comunicar-te i compartir les teves
                            obres amb les persones que formen part del món de
                            l'art.
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-4">
                        <div className="shadow-lg p-4 mb-5 bg-body rounded form">
                            <form name="f-login" method="post">
                                <div id="form">
                                    <input
                                        id="i-username"
                                        name="username"
                                        className="form-control padding"
                                        placeholder="Usuari"
                                        required
                                    />
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
                                        onClick={()=>llamarAlerta()}
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
            <div className="row">
                <div className="col-8 offset-2 padding-3">
                    Alumnes de la Escola Politècnica Superior - Universitat de les Illes Balears &copy 2022
                </div>
            </div>
            </footer>
        </>
    );
}