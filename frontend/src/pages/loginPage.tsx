import workwise_logo from "../assets/workwise_logo.svg";
import { FormsLogin } from "../components/func/loginForms"

// export interface User {
// 	success: string,
// }
// export interface LoginData {
// 	username: string;
// 	password: string;
// 	}
// export interface LoginResponse {
// 	token: string;
// 	user: User;
// }

// export default function Login() {
// 	const [loginData, setLoginData] = React.useState<LoginData>({ username: '',

export function LoginPage() {
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
