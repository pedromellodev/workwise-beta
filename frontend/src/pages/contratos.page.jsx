import { PlusIcon } from "lucide-react";
import { ListaFunc } from "../components/func/lista.func";
import { useFuncionariosData } from "../components/hooks/useFuncionarioData";
import { Button } from "../components/ui/button";
import { SearchBar } from "../components/func/search.func";
import workwise_logo from "../assets/workwise_logo.svg"; // Certifique-se de que este caminho esteja correto

export function Contratos() {
  const { data: employees, isFetching, refetch } = useFuncionariosData();

  if (!employees) {
    return null;
  }

  return (
    <>
      <header>
        <div className="h-screen bg-gradient-to-b from-purple-600 to-blue-400 overflow-hidden flex flex-col items-center">
          {/* Navbar */}
          <div className="w-full p-3 flex justify-between items-center bg-purple-400">
            <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
          </div>
        </div> {/* Fechamento da div principal no header */}
      </header>

      <main>
        <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-400 p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl text-white font-bold">Funcionários</h1>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Buscar funcionário"
                className="p-2 border rounded-lg focus:outline-none"
              />
              <button className="p-2 bg-white rounded-lg shadow-md">
                🔍
              </button>
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <Button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 flex items-center space-x-2">
              <PlusIcon className="w-4 h-4" />
              <span>Novo Funcionário</span>
            </Button>
          </div>

          {isFetching ? (
            <p className="text-white text-center">Carregando...</p>
          ) : (
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="p-4 text-left">Nome</th>
                  <th className="p-4 text-left">CPF</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
                  >
                    <td className="p-4">{employee.name}</td>
                    <td className="p-4">{employee.cpf}</td>
                    <td className="p-4">{employee.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}
