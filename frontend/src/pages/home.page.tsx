import { useEffect, useState } from "react";
import { useAuthContext } from "../cli/AuthContext";
import workwise_logo from "../assets/workwise_logo.svg";
import contratos_icon from "../assets/contratos_icon.svg";
import banco_horas_icon from "../assets/banco_horas_icon.svg"
import avaliacoes_icon from "../assets/avaliacoes_icon.svg"; 
import icon_menu from "../assets/icon_menu.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Bell, ChevronLeft, Edit } from "lucide-react";
import { LogoutIcon } from "@heroicons/react/outline";


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
    <div className="h-screen bg-gradient-to-b from-blue-400 to-roxo-primario overflow-hidden flex flex-col items-center">
<div className="w-full p-1 flex justify-between items-center bg-white">
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
        <nav className="flex-1 flex flex-col px-4 space-y-60">
          {/* Navigation Links */}
          <div>
            {[
              "Tela Inicial",
              "Contratos",
              "Avaliações",
              "Férias",
              "Banco de Horas",
            ].map((item) => (
              <button
                key={item}
                className="w-[313px] h-[73px] pl-[50px] pr-[140px] py-[22px] bg-white border border-[#3f3f3f] justify-start items-center gap-2.5 inline-flex"
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            {[
              "Configurações",
              "SAC",
            ].map((item) => (
              <button
                key={item}
                className="w-[313px] h-[73px] pl-[50px] pr-[140px] py-[22px] bg-white border border-[#3f3f3f] justify-start items-center gap-2.5 inline-flex"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </div>

    </ul>
      {/* Botão para abrir/fechar o menu */}
      <label htmlFor="menu" className="cursor-pointer absolute left-0 top-[390px] flex-col justify-center items-center inline-flex transition-all duration-300 ease-in-out peer-checked:translate-x-[370px]">
    <div className="w-[42px] h-[150px] px-[13px] py-[59px] bg-white rounded-tr-[30px] rounded-br-[30px] justify-start items-center gap-2.5 inline-flex">
      <img src={icon_menu} alt="Abrir/Fechar menu" className="h-150" />
    </div>
  </label>
  
</div>

        {/* Ícone de Logout */}
        <LogoutIcon 
          onClick={handleLogout} 
          className="h-6 w-6 text-black-500 cursor-pointer hover:scale-110 duration-300 ease-in-out" 
          title="Logout"
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
      <div className="flex w-5/6 mt-8 gap-8">
        {/* Quadro de Lembretes */}
        <div className="w-1/2">
          <h1 className="text-xl font-semibold text-white">
            Bem-vindo(a) de volta, {user ? user.username : "Usuário"}!
          </h1>
          <p className="text-sm text-gray-200">Já conferiu suas notificações?</p>

          <div className="bg-white shadow-lg rounded-lg p-6 mt-4" style={{ height: "350px" }}>
            <h2 className="text-lg font-bold text-purple-600">Quadro de Lembretes</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex justify-between text-gray-700">
                <span>Hoje:</span>
                <span>Reunião Workwise</span>
                <span>10:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Utilizados com Frequência */}
        <div className="flex flex-col w-1/2 items-center justify-end mb-4">
          <h2 className="font-bold text-white mb-4">Utilizados com frequência</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Ícone Contratos */}
            <div className="flex flex-col items-center text-white hover:scale-110 duration-300 ease-in-out">
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/contratos")}
                title="Contratos"
              >
                <img src={contratos_icon} alt="Contratos" className="w-12 h-12" />
              </div>
              <p className="mt-2">Contratos</p>
            </div>


            <div className="flex flex-col items-center text-white hover:scale-110 duration-300 ease-in-out" >
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/banco-horas")} 
                title="Banco de Horas"
              >
                <img src={banco_horas_icon} alt="Banco de Horas" className="w-12 h-12" />
              </div>
              <p className="mt-2">Banco de Horas</p>
            </div>

            {/* Novo Ícone (Outro) */}
            <div className="flex flex-col items-center text-white hover:scale-110 duration-300 ease-in-out">
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/contratos/detalhes")}  // Substitua com a rota correspondente
                title="Outro"
              >
                <img src={avaliacoes_icon} alt="Outro Ícone" className="w-12 h-12" />
              </div>
              <p className="mt-2">Avaliações</p>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
}
