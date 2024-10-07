import Cookies from "universal-cookie";
import { useCallback, useEffect } from "react";
import { useAuthContext } from "./AuthContext";

const cookies = new Cookies();

export function useSessionTimeout() {
	const { logout } = useAuthContext();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const logoutCallback = useCallback(logout, [logout]);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const token = cookies.get("authToken");

		if (!token) {
			logoutCallback(); // Desconecta o usuário se o token não estiver presente
		} else {
			// Opcional: defina um timer para monitorar quando o token vai expirar
			const expirationTime = new Date(cookies.get("authTokenExpires"));
			const now = new Date();

			const timeout = expirationTime.getTime() - now.getTime();
			setTimeout(() => logoutCallback(), timeout);
		}
	}, [cookies, logoutCallback]);
}

// To add cookies to your authentication system, you can use the universal-cookies library, which you've already imported. Here's how you can modify your code to set and get cookies:

// In your AuthProvider component:

// Update the updateAuth function to set a cookie when the user logs in:
// typescript
// Edit
// Copy code
// const updateAuth = async (username: string, is_staff: boolean, token: string) => {
//   setAuth({ username, is_staff, token });
//   setIsLoggedIn(true);
//   cookies.set("authToken", token, {
//     path: "/",
//     expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // expires in 24 hours
//   });
// };
// This sets a cookie named authToken with the token value, which will expire in 24 hours.

// Update the logout function to remove the cookie when the user logs out:
// typescript
// Edit
// Copy code
// const logout = async () => {
//   // Your logout logic here
//   cookies.remove("authToken", { path: "/" });
//   setIsLoggedIn(false);
//   setIsLoggingOut(true);
//   setAuth(null);
// };
// This removes the authToken cookie when the user logs out.

// To verify the token on page load:

// You can add a useEffect hook to your AuthProvider component to check for the presence of the authToken cookie and verify it with your backend API when the component mounts:

// typescript
// Edit
// Copy code
// useEffect(() => {
//   const token = cookies.get("authToken");
//   if (token) {
//     // Verify the token with your backend API
//     fetch("/api/verify-token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ token }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.isValid) {
//           updateAuth(data.username, data.is_staff, token);
//         } else {
//           cookies.remove("authToken", { path: "/" });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }, []);
// This code checks for the presence of the authToken cookie, and if it exists, sends a request to your backend API to verify the token. If the token is valid, it updates the authentication state with the user data. If the token is invalid, it removes the cookie.

// That's it! With these changes, your authentication system should now use cookies to store user data.
