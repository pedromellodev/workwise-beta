// biome-ignore lint/style/useImportType: <explanation>
import { createContext, ReactNode, useContext, useState } from "react";

export type User = {
	is_staff: boolean;
	username: string;
};

type AuthContextType = {
	isLoggedIn: boolean;
	isLoggingOut: boolean;
	auth: User | null;
	setAuth: (username: string, is_staff: boolean) => void;
	login: () => void;
	logout: () => void;
};

type AuthContextProviderProps = {
	children?: ReactNode | undefined;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

export function AuthProvider(props: AuthContextProviderProps) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoggingOut, setIsLoggingOut] = useState(false);
	const [auth, setAuth] = useState<User | null>(null);

	const updateAuth = (username: string, is_staff: boolean) => {
		setAuth({ username, is_staff });
	};
	const login = () => {
		// Your login logic here
		setIsLoggedIn(true);
	};
	const logout = () => {
		// Your logout logic here
		setIsLoggedIn(false);
		setIsLoggingOut(true);
		// You can also reset the auth state here
		setAuth(null);
	};
	const value = {
		isLoggedIn,
		isLoggingOut,
		auth,
		setAuth: updateAuth,
		login: login,
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

// That's a great idea! Having separate states for login and logout can make your authentication logic more robust and easier to manage.

// You can add two separate states to your AuthContext:

// typescript
// Edit
// Copy code
// interface AuthContextType {
//   isLoggedIn: boolean;
//   isLoggingOut: boolean;
//   auth: User | null;
//   setAuth: (user: User) => void;
//   login: () => void;
//   logout: () => void;
// }

// const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [isLoggingOut, setIsLoggingOut] = useState(false);
// const [auth, setAuth] = useState<User | null>(null);

// const login = () => {
//   // Your login logic here
//   setIsLoggedIn(true);
// };

// const logout = () => {
//   // Your logout logic here
//   setIsLoggedIn(false);
//   setIsLoggingOut(true);
//   // You can also reset the auth state here
//   setAuth(null);
// };
// Then, you can use these states in your components to conditionally render different UI elements based on the user's authentication status.

// For example, you can use isLoggedIn to show a logout button only when the user is logged in:

// typescript
// Edit
// Copy code
// {isLoggedIn && <button onClick={logout}>Logout</button>}
// And you can use isLoggingOut to show a loading indicator or a message while the user is logging out:

// typescript
// Edit
// Copy code
// {isLoggingOut && <p>Logging out...</p>}
// Remember to update your AuthContext provider to include these new states and functions:

// typescript
// Edit
// Copy code
// <AuthContext.Provider value={{ isLoggedIn, isLoggingOut, auth, setAuth, login, logout }}>
//   {/* Your app components here */}
// </AuthContext.Provider>
// By having separate states for login and logout, you can create a more robust and user-friendly authentication experience for your users.
