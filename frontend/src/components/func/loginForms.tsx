// biome-ignore lint/style/useImportType: <Sinceramente, ainda não sei>
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "../../http/auth/auth-service";
import { useQuery } from "@tanstack/react-query";
// biome-ignore lint/style/useImportType: <explanation>
import { useAuthContext, User } from "../cli/AuthContext";

type formData = {
	username: string;
	password: string;
};

export function FormsLogin() {
	const { register, handleSubmit } = useForm<formData>();
	const { auth, setAuth } = useAuthContext();
	const onSubmit: SubmitHandler<formData> = async (data: formData) => {
		try {
			console.log(data);
			const response: User = await userLogin(data);
			console.log(response.is_staff);
			console.log(response.username);
			setAuth(response.username, response.is_staff);
			// console.log(auth?.is_admin);
			// console.log(auth?.is_admin);
			// console.log(auth?.username);
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const { isFetching } = useQuery({
		queryKey: ["user"],
		queryFn: () => onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
		<div className="flex flex-col items-center">
			<label htmlFor="email" className="block text-sm font-medium text-gray-700">
			Email
			</label>
			<input
			type="email"
			id="email"
			className="w-4/5 p-3 mt-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
			required
			/>
		</div>
		<div className="flex flex-col items-center">
			<label htmlFor="password" className="block text-sm font-medium text-gray-700">
			Senha
			</label>
			<input
			type="password"
			id="password"
			className="w-4/5 p-3 mt-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
			required
			/>
		</div>
		<div className="flex justify-center">
			<button
			type="submit"
			className="w-4/5 py-3 mt-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
			>
			Entrar
			</button>
		</div>
		</form>
	);
};
