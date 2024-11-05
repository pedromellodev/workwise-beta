import { useEffect } from "react";
import { useAuthContext } from "../cli/AuthContext";
import workwise_logo from "../assets/workwise_logo.svg";

export function Home() {
	const { auth, isLoggedIn } = useAuthContext();
	const user = isLoggedIn ? auth : null;

	useEffect(() => {
		if (isLoggedIn) {
			console.log("Usuário autenticado:", user);
		} else {
			console.log("Usuário não autenticado");
		}
	}, [isLoggedIn]);

	return (
		<div className="h-screen bg-gradient-to-b from-purple-600 to-blue-400 overflow-hidden flex flex-col items-center">
			{/* Navbar */}
			<div className="w-full p-3 flex justify-between items-center bg-purple-400">
				<img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
			</div>

			{/* Temperatura/Data/Dia da semana */}
			<div className="absolute top-20 right-4 text-white text-right">
				<p className="text-sm font-medium">27°C | 06/08/2024</p>
				<p className="text-xs text-gray-200">Terça-feira</p>
			</div>

			{/* Conteúdo principal */}
			<div className="flex w-5/6 mt-8 gap-8">
				{/* Quadro de Lembretes */}
				<div className="w-1/2">
					<h1 className="text-xl font-semibold text-white">
						Bem-vindo(a) de volta, {user ? user.username : "Usuário"}!
					</h1>
					<p className="text-sm text-gray-200">Já conferiu suas notificações?</p>

					<div className="bg-white shadow-lg rounded-lg p-6 mt-4" style={{ height: "350px" }}>
						<h2 className="text-lg font-bold text-purple-600">Quadro de Lembretes</h2>
						<ul className="mt-4 space-y-4">
							<li className="flex justify-between text-gray-700">
								<span>Hoje: Reunião Workwise</span>
								<span>10:00</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Utilizados com Frequência */}
				<div className="flex flex-col w-1/2 items-center justify-end mb-4">
					<h2 className="text-lg font-bold text-black mb-4">Utilizados com frequência</h2>
					<div className="grid grid-cols-3 gap-4">
						<div className="flex flex-col items-center text-white">
							<div className="bg-white p-4 rounded-full">
								<img src="/path/to/icon.svg" alt="Banco de Horas" className="w-12 h-12" />
							</div>
							<p className="mt-2">Banco de Horas</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}