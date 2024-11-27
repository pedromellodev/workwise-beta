import { useQuery } from "@tanstack/react-query";
import { getFuncionario, getFuncionarios } from "../../http/funcionarios/queriesFuncionarios";

//Querys prontos para evitar repetição de criação de dados de funcionarios

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