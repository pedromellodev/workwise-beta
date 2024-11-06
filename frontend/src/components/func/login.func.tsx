import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "../../http/auth/auth-service";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { useAuthContext } from "../../cli/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CSRFToken from "./CSRFToken";

type forms = {
	email: string;
	password: string;
};

export function FormsLogin() {
	const { register, handleSubmit } = useForm<forms>();
	const { setAuth, isLoggedIn } = useAuthContext();
	const navigate = useNavigate();
	const [showWarning, setShowWarning] = useState(false);

	const onSubmit: SubmitHandler<forms> = async (data: forms) => {
		 if (!data.email || !data.password) {
            setShowWarning(true);
            return;
        }
        try {
            setShowWarning(false);
            const response = await userLogin(data);
            if (response.data.error) {
                alert(response.data.error);
            } else {
                setAuth(response.data.user.username, response.data.user.is_staff);
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

	if (isLoggedIn){
		() => navigate("/home")
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 w-full">
			<CSRFToken />
			<div className="w-full flex flex-col gap-4">
				<label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
				<input
					id="email"
					className="rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
					type="text"
					placeholder="Digite seu email"
					{...register("email")}
				/>
				<label htmlFor="password" className="text-sm font-semibold text-gray-700">Senha</label>
				<input
					id="password"
					className="rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
					type="password"
					placeholder="Digite sua senha"
					{...register("password")}
				/>
			</div>
			 {showWarning && (
                    <p className="text-purple-500 text-sm mt-2 transition-opacity duration-500">
                        Por favor, preencha os dados corretamente.
                    </p>
                )}

			<Button className="mt-3 w-80 bg-purple-500 hover:bg-purple-600 text-white font-semibold text-lg py-2 rounded-lg transition-colors duration-300" type="submit" disabled={isLoading}>
				Entrar
			</Button>
		</form>
	);
}
