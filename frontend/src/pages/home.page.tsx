import { useEffect, useState } from "react";
import { useAuthContext } from "../cli/AuthContext";
import { Link } from 'react-router-dom';
import workwise_logo from "../assets/workwise_logo.svg";
import contratos_icon from "../assets/contratos_icon.svg";
import banco_horas_icon from "../assets/banco_horas_icon.svg"
import avaliacoes_icon from "../assets/avaliacoes_icon.svg"; 
import icon_menu from "../assets/icon_menu.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Bell, ChevronLeft, Edit } from "lucide-react";
import { LogoutIcon } from "@heroicons/react/outline";
import { Button } from "../components/ui/button";
import { Card} from "../components/ui/card";
import { ChevronDown } from 'lucide-react';


export function Home() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  // Função de Logout
  const handleLogout = () => {
    setTimeout(() => {
      logout();
      navigate("/");
      }, 800);
  };

  const { auth, isLoggedIn } = useAuthContext();
  const user = isLoggedIn ? auth : null;

  const [weatherData, setWeatherData] = useState({
    temperature: "",
    date: new Date().toLocaleDateString(),
    weekday: new Date().toLocaleString("pt-BR", { weekday: "long" }),
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=bcd545c643064e78aa7142754240511&q=SAO_PAULO&lang=pt`
        );
        const temp = response.data.current.temp_c + "°C";
        setWeatherData({
          ...weatherData,
          temperature: temp,
          date: new Date().toLocaleDateString(),
          weekday: new Date().toLocaleString("pt-BR", { weekday: "long" }),
        });
      } catch (error) {
        console.error("Erro ao buscar dados climáticos:", error);
      }
    }
    fetchWeather();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 overflow-hidden flex flex-col items-center">

<div className="w-full p-1 flex justify-between items-center bg-purple-300">
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
<nav className="flex-1 flex flex-col pl-0 px-4 space-y-60">
  {/* Navigation Links */}
  <div>
    {[
      { name: "Tela Inicial", route: "/home" },
      { name: "Contratos", route: "/contratos" },
      { name: "Avaliações", route: "/avaliacoes" },
      { name: "Férias", route: "/ferias" },
      { name: "Banco de Horas", route: "/banco-de-horas" },
    ].map(({ name, route }) => (
      <Link
        key={name}
        to={route}
        className="w-[355px] h-[73px] pl-[50px] pr-[140px] py-[22px] bg-white border border-[#3f3f3f] justify-start items-center gap-2.5 inline-flex"
      >
        {name}
      </Link>
    ))}
  </div>
  <div>
    {[
      { name: "Configurações", route: "/configuracoes" },
      { name: "SAC", route: "/sac" },
    ].map(({ name, route }) => (
      <Link
        key={name}
        to={route}
        className="w-[355px] h-[73px] pl-[50px] pr-[140px] py-[22px] bg-white border border-[#3f3f3f] justify-start items-center gap-2.5 inline-flex"
      >
        {name}
      </Link>
    ))}
  </div>

  
</nav>

      </div>
    
    </ul>
      {/* Botão para abrir/fechar o menu */}
      <label htmlFor="menu" className="cursor-pointer absolute left-[0px] top-[390px] flex-col justify-center items-center inline-flex transition-all duration-300 ease-in-out peer-checked:translate-x-[370px]">
    <div className="w-[42px] h-[150px] px-[13px] py-[59px] pl-0 bg-white rounded-tr-[30px] rounded-br-[30px] justify-start items-center gap-2.5 inline-flex">
      <img src={icon_menu} alt="Abrir/Fechar menu" className="h-150" />
    </div>
  </label>
  
  
  
</div>

        {/* Ícone de Logout */}
        <LogoutIcon 
          onClick={handleLogout} 
          className="h-6 w-6 text-black-500 cursor-pointer hover:scale-110 duration-300 ease-in-out" 
        />
        
</div>


      {/* Temperatura/Data/Dia da semana */}
      <div className="absolute top-20 right-4 text-white text-right">
        <p className="text-sm font-medium">
          {weatherData.temperature} | {weatherData.date}
        </p>
        <p className="text-xs text-gray-200">{weatherData.weekday}</p>
      </div>

      {/* Conteúdo principal */}
      <div className="flex w-5/6 mt-10 gap-40">

      <div className="w-5/6 space-y-2">
        <h1 className="text-3xl font-semibold text-white">
          Bem-vindo(a) de volta, {user ? user.username : "Usuário"}!
        </h1>
        <p className="text-lg text-gray-200">Já conferiu suas notificações?</p>



                  {/* Quadro de Lembretes */}
              <Card className="w-full max-w-2xl">
      <div className="bg-purple-500 py-5">
        <h2 className="text-2xl font-medium text-center text-black">Quadro de Lembretes</h2>
      </div>
      <div className="p-8 space-y-12">
        {/* Hoje */}
        <div className="space-y-4">
          <h3 className="text-2xl font-medium border-b pb-2">Hoje</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">{'>>'}</span>
                  <span>Reunião WorkWise</span>
                </div>
                <span>10:00</span>
              </div>
            ))}
          </div>
          <Button className="w-full text-gray-400 hover:text-gray-600">
            <span>Vizualizar mais</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Próximos três dias */}
        <div className="space-y-4">
          <h3 className="text-2xl font-medium border-b pb-2">Próximos três dias</h3>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">{'>>'}</span>
                  <span>Reunião WorkWise</span>
                </div>
                <span>10:00</span>
              </div>
            ))}
          </div>
        </div>

        {/* Próximos sete dias */}
        <div className="space-y-4">
          <h3 className="text-2xl font-medium border-b pb-2">Próximos sete dias</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-3">
                <span className="text-gray-500">{'>>'}</span>
                <span>Reunião WorkWise</span>
              </div>
              <span>10:00</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
        </div>

       {/* Utilizados com Frequência */}
<div className="flex flex-col w-1/2 items-center justify-end mb-4">
  <h2 className="font-bold text-3xl text-black mb-4">Utilizados com frequência</h2>
  <div className="grid grid-cols-3 gap-8">
    {/* Ícone Contratos */}
    <div className="flex flex-col items-center text-white hover:scale-110 duration-300 ease-in-out">
      <div
        className="bg-white p-4 rounded-full cursor-pointer"
        onClick={() => navigate("/contratos")}
        title="Contratos"
      >
        <img src={contratos_icon} alt="Contratos" className="w-12 h-12" />
      </div>
      <p className="mt-4 text-lg font-semibold">Contratos</p>
    </div>

    {/* Ícone Banco de Horas */}
    <div className="flex flex-col items-center text-white hover:scale-110 duration-300 ease-in-out">
      <div
        className="bg-white p-4 rounded-full cursor-pointer"
        onClick={() => navigate("/banco-horas")}
        title="Banco de Horas"
      >
        <img src={banco_horas_icon} alt="Banco de Horas" className="w-12 h-12" />
      </div>
      <p className="mt-4 text-lg font-semibold">Banco de Horas</p>
    </div>

    {/* Novo Ícone (Outro) */}
    <div className="flex flex-col items-center text-white hover:scale-110 duration-300 ease-in-out">
      <div
        className="bg-white p-4 rounded-full cursor-pointer"
        onClick={() => navigate("/contratos/detalhes")}
        title="Outro"
      >
        <img src={avaliacoes_icon} alt="Outro Ícone" className="w-12 h-12" />
      </div>
      <p className="mt-4 text-lg font-semibold">Avaliações</p>
    </div>
  </div>
</div>
</div>




    </div>
  );
}
