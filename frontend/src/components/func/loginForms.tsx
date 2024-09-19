// biome-ignore lint/style/useImportType: <Sinceramente, ainda não sei>
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "../../http/auth/auth-service";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
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
		<div className="flex flex-col items-center justify-center gap-2">
			<form onSubmit={handleSubmit(onSubmit)}>
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
					<Button className="mt-2" type="submit" disabled={isFetching}>
						Logar
					</Button>
				</div>
			</form>
		</div>
	);
}
