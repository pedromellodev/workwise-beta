import { useEffect } from "react";
import { useAuthContext } from "../cli/AuthContext";
// import { useSessionTimeout } from "../components/cli/AuthSession";

export function Home() {
	const { auth, isLoggedIn } = useAuthContext();
	const user = isLoggedIn ? auth : null;
	// console.log(isLoggedIn);
	// console.log(user);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isLoggedIn) {
			console.log(isLoggedIn);
			console.log("Usuário autenticado:", user);
		} else {
			console.log("nn sei mais");
		}
	}, [isLoggedIn]);

	return (
		<div className="h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex flex-col items-center">
			<div className="w-full p-6 flex justify-between items-center bg-purple-200">
				<div>
				<h1 className="text-xl font-semibold text-white">Bem-vindo(a) de volta, [Nome do Usuário]!</h1>
				<p className="text-sm text-gray-200">Já conferiu suas notificações?</p>
				</div>
				<div className="text-right text-white">
				<p className="text-sm font-medium">27°C | 06/08/2024</p>
				<p className="text-xs text-gray-200">Terça-feira</p>
				</div>
			</div>

			<div className="flex w-5/6 mt-8 gap-8">
				<div className="bg-white shadow-lg rounded-lg p-6 w-1/2">
				<h2 className="text-lg font-bold text-purple-600">Quadro de Lembretes</h2>
				<ul className="mt-4 space-y-4">
					<li className="flex justify-between text-gray-700">
					<span>Hoje: Reunião Workwise</span>
					<span>10:00</span>
					</li>
				</ul>
				</div>

				<div className="flex flex-col w-1/2">
				<h2 className="text-lg font-bold text-white mb-4">Utilizados com frequência</h2>
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
