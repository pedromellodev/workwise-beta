import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { Home } from "../pages/homePage";

export function UserRouter() {
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
