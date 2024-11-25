import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login.page";
import { Home } from "../pages/home.page";
import Contratos from "../pages/contrato/contratos.page";
import  Detalhes  from "../pages/contrato/detalhespessoal.page";
import Avaliacoes from "../pages/contrato/avaliacoes";

export function AdminRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contratos" element={<Contratos />} />
					<Route path="/contratos/detalhes" element={<Detalhes />} />
					<Route path="/avaliacoes" element={<Avaliacoes />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
