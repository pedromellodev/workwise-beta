import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login.page";
import { Home } from "../pages/home.page";
import { Contratos } from "../pages/contratos.page";
import { Detalhes } from "../pages/detalhes.page";

export function AdminRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contratos" element={<Contratos />} />
					<Route path="/contratos/:nomeFuncionario" element={<Detalhes />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
