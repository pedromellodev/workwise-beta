import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { Home } from "../pages/homePage";
import { ContratosPage } from "../pages/contratosPage";
import { DetalhesFuncionario } from "../pages/detalhesPage";

export function AdminRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contratos" element={<ContratosPage />} />
					<Route path="/contratos/Pedro" element={<DetalhesFuncionario />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
