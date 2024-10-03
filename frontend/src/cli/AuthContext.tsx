// biome-ignore lint/style/useImportType: <explanation>
import { createContext, ReactNode, useContext, useState } from "react";
import Cookies from "universal-cookie";

export type User = {
	is_staff: boolean;
	username: string;
};

type AuthContextType = {
	isLoggedIn: boolean;
	auth: User | null;
	setAuth: (username: string, is_staff: boolean) => void;
	logout: () => void;
};

type AuthContextProviderProps = {
	children?: ReactNode | undefined;
};

const cookies = new Cookies();

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

export function AuthProvider(props: AuthContextProviderProps) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [auth, setAuth] = useState<User | null>(null);

	const updateAuth = async (
		username: string,
		is_staff: boolean,
	) => {
		setAuth({ username, is_staff});
		setIsLoggedIn(true);
		// const token = await cookies.get('token');
		// cookies.set("authToken", token, {
		// 	path: "/",
		// 	expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
		// });
	};

	const logout = async () => {
		// Your logout logic here
		cookies.remove("authToken", { path: "/" });

		setIsLoggedIn(false);
		setAuth(null);
	};

	const value = {
		isLoggedIn,
		auth,
		setAuth: updateAuth,
		logout: logout,
	};
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
}

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};
