import { useEffect, useState } from "react";
import { useAuthContext } from "../cli/AuthContext";
import workwise_logo from "../assets/workwise_logo.svg";
import contratos_icon from "../assets/contratos_icon.svg";
import banco_horas_icon from "../assets/banco_horas_icon.svg";
import avaliacoes_icon from "../assets/avaliacoes_icon.svg";
import icon_menu from "../assets/icon_menu.svg"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bell, ChevronLeft, Edit } from "lucide-react";

export function Home() {
  const { logout, auth, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  // Usuário autenticado
  const user = isLoggedIn ? auth : null;

  // Função de Logout
  const handleLogout = () => {
    logout(); // Função que desloga o usuário
    navigate("/contratos");
  };

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
    <div className="h-screen bg-gradient-to-b from-purple-600 to-blue-400 overflow-hidden flex flex-col items-center">
      <div className="w-full p-3 flex justify-between items-center bg-purple-400">
        <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
        <Bell className="w-[33px] h-[35px]" />
      </div>

      <div className="flex w-full mt-10 mx-auto gap-10 relative">

      <div className="w-20 h-[827px] pr-[11px] py-[337px] justify-start items-center gap-3 inline-flex">
        <div className="w-[42px] h-[150px] flex-col justify-center items-center inline-flex">
          <button className="w-[50px] h-[150px] px-[13px] py-[59px] bg-white rounded-tr-[30px] rounded-br-[30px] justify-start items-center gap-2.5 inline-flex">
            <img src={icon_menu} alt="Menu" className="w-[100px] h-[100px]" />
          </button>
        </div>
      </div>

  <div className="flex flex-col gap-10 ml-10"> 
    {/* Conteúdo principal */}
    <div className="flex gap-10">
      <ul>
        <h1 className="text-3xl font-semibold text-white">
          Bem-vindo(a) de volta, {user ? user.username : "Usuário"}!
        </h1>
        <p className="text-base text-gray-200">Já conferiu suas notificações?</p>
      </ul>
    </div>
    <div className="h-[650px] max-h-[650px] w-full max-w-[600px] bg-white border border-[#1f1f1f] rounded-lg overflow-hidden shadow-lg">
      <div className="bg-purple-500 p-4">
        <h2 className="text-center text-[#1f1f1f] text-xl font-normal">Quadro de Lembretes</h2>
      </div>
      <div className="p-4 h-[400px] overflow-y-auto">
        {/* Conteúdo do quadro de lembretes aqui */}
      </div>
    </div>
  </div>

  <div className="min-h-50 w-20">
    {/* Temperatura/Data/Dia da semana */}
    <div className="absolute top-0 right-10 text-white text-right">
      <div className="w-[125px] h-[98.44px] flex-col justify-start items-center gap-[3px] inline-flex">
        <div className="justify-start items-center gap-[7px] inline-flex">
          <div className="w-[42px] h-[42px] relative">
            <div className="w-full h-full bg-yellow-400 rounded-full" aria-hidden="true" />
          </div>
        </div>
        <div className="h-[53.44px] flex-col justify-start items-center flex">
          <div className=" text-center text-white text-2xl leading-[19.80px]">
            {weatherData.temperature}
          </div>
          <div className="h-[16.72px] text-center text-white text-base">{weatherData.date}</div>
          <div className="h-[26.72px] text-center text-white text-base">{weatherData.weekday}</div>
        </div>
      </div>
    </div>

    <div className="absolute top-[160px] flex-col items-start">
    <h1 className="font-bold text-[25px] text-white mb-10">Utilizados com frequência</h1>
      <div className="grid grid-cols-3 gap-20">
        {/* Cards */}
        <div className="w-15 h-15 px-[30px] pt-5 pb-[30px] bg-white rounded border border-[#3f3f3f] flex flex-col justify-center items-center gap-4">
          <div
            className="bg-white p-4 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate("/banco-horas")}
            aria-label="Banco de Horas">
            <img src={banco_horas_icon} alt="Banco de Horas" className="w-12 h-12" />
          </div>
          <div className="text-center text-[#1f1f1f] text-base font-normal leading-tight">
            Banco de Horas
          </div>
        </div>
        <div className="w-35 h-35 px-[30px] pt-5 pb-[25px] bg-white rounded border border-[#3f3f3f] flex flex-col justify-center items-center gap-4">
          <div
            className="bg-white p-4 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate("/banco-horas")}
            aria-label="Banco de Horas">
            <img src={avaliacoes_icon} alt="Banco de Horas" className="w-12 h-12" />
          </div>
          <div className="text-center text-[#1f1f1f] text-base font-normal leading-tight">
            Banco de Horas
          </div>
        </div>
        <div className="w-35 h-35 px-[30px] pt-5 pb-[25px] bg-white rounded border border-[#3f3f3f] flex flex-col justify-center items-center gap-4">
          <div
            className="bg-white p-4 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate("/banco-horas")}
            aria-label="Banco de Horas">
            <img src={contratos_icon} alt="Banco de Horas" className="w-12 h-12" />
          </div>
          <div className="text-center text-[#1f1f1f] text-base font-normal leading-tight">
            Banco de Horas
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
