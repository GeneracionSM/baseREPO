import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>Genaració SM</title>
			</Head>
			<div className="container">
				<div className="row">
					<div id="img-start" className="div col-lg-6">
						<div>
							<Image src="/logo.svg" width="200" height="200" />
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
										className="btn btn-secondary padding padding-2"
									>
										Inicia Sessió
									</button>
									<a
										id="b-register"
										className="btn btn-outline-secondary padding padding-2"
										href="#"
										role="button"
									>
										Regístra't
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<br />
				Alumnos de la Escuela Politécnica Superior - Universitat de les
				Illes Balears &copy
			</footer>
		</>
	);
}
