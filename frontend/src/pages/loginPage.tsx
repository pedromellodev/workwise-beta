import workwise_logo from "../assets/workwise_logo.svg";
import { Button } from "../components/ui/button";
import { useQuery } from "@tanstack/react-query";
// biome-ignore lint/style/useImportType: <Sinceramente, ainda não sei>
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { userLogin } from "../http/auth/auth-service";

type formData = {
	username: string;
	password: string;
};

export function LoginPage() {
	const { register, handleSubmit } = useForm<formData>();
	const [userType, setUserType] = useState<string | null>(null);
	// const navigate = useNavigate();

	const onSubmit: SubmitHandler<formData> = async (data: formData) => {
		try {
			console.log(data);
			const response = await userLogin(data);

			setUserType(response.userType);
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const { isFetching } = useQuery({
		queryKey: ["funcionarios"],
		queryFn: () => onSubmit,
		staleTime: 1000 * 60,
		gcTime: 1000 * 60,
	});

	console.log(isFetching);
	console.log(useState);
	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center">
				<div className="h-3/5 w-3/6 bg-slate-200 flex flex-col items-center justify-center gap-8">
					<div className="flex flex-col items-center justify-center">
						<img src={workwise_logo} alt="WorkWise Logo" />
						<h1 className="text-3xl font-medium leading-relaxed max-w-80 text-center">
							Bem-Vindo(a)!
						</h1>
					</div>

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
				</div>
			</div>
		</>
	);
}
