import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login.page";
import { Home } from "../pages/home.page";

export function UserRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
