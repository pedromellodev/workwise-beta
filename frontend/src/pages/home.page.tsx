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

	return <h1>Receba, {user?.username}</h1>;
}
