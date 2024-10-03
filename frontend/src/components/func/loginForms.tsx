// biome-ignore lint/style/useImportType: <Sinceramente, ainda não sei>
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "../../http/auth/auth-service";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { useAuthContext } from "../../cli/AuthContext";
import { useNavigate } from "react-router-dom";
import CSRFToken from "./CSRFToken";

type forms = {
	cpf: string;
	username: string;
	password: string;
};

export function FormsLogin() {
	const { register, handleSubmit } = useForm<forms>();
	const { setAuth, isLoggedIn } = useAuthContext();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<forms> = async (data: forms) => {
		try {
			console.log(data);
			const response = await userLogin(data);
			if (response.data.error) {
				alert(response.data.error);
			} else {
				const responseBody = response.data.user;
				setAuth(responseBody.username, responseBody.is_staff);
				console.log(isLoggedIn);
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
		<div className="flex flex-col items-center justify-center gap-2">
			<form onSubmit={handleSubmit(onSubmit)}>
				<CSRFToken />
				<div className="flex flex-col items-center justify-center gap-9">
					<input
						id="username"
						className="rounded py-2 px-4 w-80"
						type="text"
						placeholder="joao"
						{...register("username")}
					/>
					<input
						className="rounded py-2 px-4 w-80"
						type="password"
						placeholder="sua senha"
						{...register("password")}
					/>
					<input
						className="rounded py-2 px-4 w-80"
						type="text"
						placeholder="seu cpf"
						{...register("cpf")}
					/>
				</div>
				<div className="flex justify-between w-80">
					<a
						href="www.youtube.com"
						className="text-sm text-blue-500 hover:text-blue-700"
					>
						Esqueci minha senha
					</a>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<Button className="mt-2" type="submit" disabled={isLoading}>
						Logar
					</Button>
				</div>
			</form>
		</div>
	);
}
