import { useQuery } from "@tanstack/react-query";
import { getFuncionario, getFuncionarios } from "../../http/funcionarios/queriesFuncionarios";

export const useFuncionarioData = (nomeFuncionario: string) => {
	return useQuery({
		queryKey: ["funcionario", nomeFuncionario],
		queryFn: () => getFuncionario(nomeFuncionario),
		staleTime: 1000 * 60,
	});
};

export const useFuncionariosData = () => {
	return  useQuery({
		queryKey: ["funcionarios"],
		queryFn: getFuncionarios,
		staleTime: 1000 * 60,
	});
}