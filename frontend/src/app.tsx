import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { Home } from "./pages/homePage";
import { useAuthContext } from "./components/cli/AuthContext";
// import { useContext } from "react";
// import { AuthContext } from "./components/cli/AuthContext";

export function App() {
	const { auth } = useAuthContext();
	console.log(auth);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
