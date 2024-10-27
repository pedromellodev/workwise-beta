import workwise_logo from "../assets/workwise_logo.svg";
import { FormsLogin } from "../components/func/login.func";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../cli/AuthContext";

export function Login() {
	const { isLoggedIn } = useAuthContext();
	const navigate = useNavigate();
	if (isLoggedIn) {
		navigate("/home");
	}

	return (
		<div className="h-screen flex">
			<div className="w-1/4 bg-gradient-to-b from-blue-400 to-purple-600 flex flex-col justify-center text-white p-8">
				<h2 className="text-2xl font-semibold mb-2">Esqueceu a senha?</h2>
				<p className="mb-4">Recupere-a aqui</p>
				<button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-purple-600 transition">
					Recuperar senha
				</button>
			</div>

			<div className="flex flex-grow items-center justify-center bg-gray-100">
				<div className="bg-white p-12 rounded-lg shadow-md w-3/4 max-w-lg flex flex-col items-center gap-6">
					<img src={workwise_logo} alt="WorkWise Logo" className="h-16 mb-4" />
					<h1 className="text-3xl font-medium text-center">Seja bem-vindo(a)!</h1>
					<FormsLogin />
				</div>
			</div>
		</div>
	);
}
