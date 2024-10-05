import workwise_logo from "../assets/workwise_logo.svg";
import { FormsLogin } from "../components/func/loginForms";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../cli/AuthContext";

export function Login() {
	const { isLoggedIn } = useAuthContext();
	const navigate = useNavigate();
	if (isLoggedIn) {
		() => navigate("/home");
	}
	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center">
				<div className="h-4/5 w-4/6 bg-slate-200 flex flex-col items-center justify-center gap-8">
					<div className="flex flex-col items-center justify-center">
						<img src={workwise_logo} alt="WorkWise Logo" />
						<h1 className="text-3xl font-medium leading-relaxed max-w-80 text-center">
							Bem-Vindo(a)!
						</h1>
					</div>
					<FormsLogin />
				</div>
			</div>
		</>
	);
}
