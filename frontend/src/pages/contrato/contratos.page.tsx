import { useState, useEffect } from "react";
import { Search, Plus, Loader2, ChevronLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import workwise_logo from "../../assets/workwise_logo.svg";
import icon_menu from "../../assets/icon_menu.svg";
import { AddEmployeeModal } from "./AddEmployeeModal";

interface Employee {
  id: number;
  name: string;
  cpf: string;
  status: string;
}

export default function Contratos() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/home");
  };

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false); // Controle do modal

  // Função para adicionar novos funcionários
  const handleAddEmployee = (newEmployee: Employee) => {
    setEmployees((prev) => [...prev, { ...newEmployee, id: prev.length + 1 }]);
  };


  useEffect(() => {
    const exampleEmployees: Employee[] = [
      { id: 1, name: "João Silva", cpf: "xxx.xxx.xxx-xx", status: "Ativo" },
      { id: 2, name: "Maria Oliveira", cpf: "xxx.xxx.xxx-xx", status: "Ativo" },
      { id: 3, name: "Pedro Henrique Mello", cpf: "xxx.xxx.xxx-xx", status: "Desligado" },
      { id: 4, name: "Ana Santos", cpf: "xxx.xxx.xxx-xx", status: "Desligado" },
    ];

    setTimeout(() => {
      setEmployees(exampleEmployees);
      setIsFetching(false);
    }, 1000);
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="w-full flex justify-between items-center bg-purple-300 z-50">
        {/* Logo WorkWise que abre o menu */}
        <div className="relative">
          {/* Checkbox para o menu */}
          <input type="checkbox" id="menu" className="hidden peer" />

          {/* Logo como botão do menu */}
          <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />

          {/* Lista do menu */}
          <ul className="absolute top-0 right-0 left-[-380px] w-[370px] bg-white shadow-lg rounded-lg p-4 min-h-screen transition-transform duration-300 ease-in-out peer-checked:translate-x-[370px]">
            <div className="flex flex-col min-h-screen bg-white">
              {/* Header */}
              <header className="p-6 flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-2">
                  <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
                  <h1 className="text-xl font-semibold">WorkWise</h1>
                </div>
                <p className="text-sm text-muted-foreground">O futuro do RH</p>
              </header>

              {/* Navigation Menu */}
              <nav className="flex-1 flex flex-col pl-0 space-y-50">
                {/* Navigation Links */}
                <div>
                  {[
                    { name: "Tela Inicial", route: "/home"},
                    { name: "Contratos", route: "/contratos" },
                    { name: "Avaliações", route: "/avaliacoes" },
                    { name: "Férias", route: "/ferias" },
                    { name: "Banco de Horas", route: "/banco-de-horas" },
                    { name: "Configurações", route: "/configuracoes" },
                    { name: "SAC", route: "/sac" }
                  ].map(({ name, route }) => (
                    <Link
                      key={name}
                      to={route}
                      className="w-[355px] h-[50px] pl-[50px] pr-[140px] py-[22px] bg-white justify-start items-center gap-2.5 inline-flex  hover:text-purple-600 transition"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </nav>
                  
      </div>
    
  </ul>

          <label
            htmlFor="menu"
            className="cursor-pointer absolute left-[0px] top-[390px] flex-col justify-center items-center inline-flex transition-all duration-300 ease-in-out peer-checked:translate-x-[370px]"
          >
            <div className="w-[42px] h-[150px] px-[13px] py-[59px] pl-0 bg-white rounded-tr-[30px] rounded-br-[30px] justify-start items-center gap-2.5 inline-flex">
              <img src={icon_menu} alt="Abrir/Fechar menu" className="h-150" />
            </div>
          </label>
        </div>
      </div>

      {/* Main content */}
      <div className="flex p-6 space-x-6">
        {/* Content Section */}
        <div className="flex-grow bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
          <div className="relative flex-grow mr-4 z-10">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                className="pl-10 w-full"
                placeholder="Pesquisar funcionários..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {isFetching ? (
            <div className="flex justify-center items-center h-64 bg-white">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
            </div>
          ) : (
            <ul className="space-y-2">
              <li className="bg-purple-300 p-4 rounded-md">
                <div className="grid grid-cols-3 gap-4 font-semibold">
                  <div>Nome</div>
                  <div>CPF</div>
                  <div>Status</div>
                </div>
              </li>
              {filteredEmployees.map((employee) => (
                <li
                  key={employee.id}
                  className="bg-gray-100 p-4 rounded-md cursor-pointer  hover:bg-white hover:text-purple-600 transition shadow md"
                  onClick={() => navigate("/contratos/detalhes")}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>{employee.name}</div>
                    <div>{employee.cpf}</div>
                    <div>{employee.status}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Button Section */}
        <div className="flex justify-end items-start">
          <Button variant="primary" className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 transition shadow md" onClick={() => setShowModal(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Novo Funcionário
          </Button>
        </div>
      </div>

      {showModal && (
  <AddEmployeeModal
    onClose={() => setShowModal(false)} // Fechar o modal
    onSubmit={handleAddEmployee} // Adicionar funcionário
  />
)}

    </div>
  );
}
