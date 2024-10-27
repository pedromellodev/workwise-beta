import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "../../http/auth/auth-service";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { useAuthContext } from "../../cli/AuthContext";
import { useNavigate } from "react-router-dom";
import CSRFToken from "./CSRFToken";

type forms = {
	email: string;
	password: string;
};

export function FormsLogin() {
	const { register, handleSubmit } = useForm<forms>();
	const { setAuth, isLoggedIn } = useAuthContext();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<forms> = async (data: forms) => {
		try {
			const response = await userLogin(data);
			if (response.data.error) {
				alert(response.data.error);
			} else {
				const responseBody = response.data.user;
				setAuth(responseBody.username, responseBody.is_staff);
				navigate("/home");
			}
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const { isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: () => onSubmit,
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 w-full">
			<CSRFToken />
			<div className="w-full flex flex-col gap-4">
				<label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
				<input
					id="email"
					className="rounded-md py-2 px-4 w-full border border-gray-300"
					type="text"
					placeholder="Digite seu email"
					{...register("email")}
				/>
				<label htmlFor="password" className="text-sm font-semibold text-gray-700">Senha</label>
				<input
					id="password"
					className="rounded-md py-2 px-4 w-full border border-gray-300"
					type="password"
					placeholder="Digite sua senha"
					{...register("password")}
				/>
			</div>
			<Button className="bg-purple-500 text-black py-2 px-6 rounded-md hover:bg-purple-600 transition w-full" type="submit" disabled={isLoading}>
				Entrar
			</Button>
		</form>
	);
}
