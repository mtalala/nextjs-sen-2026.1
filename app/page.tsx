"use client";

import { useState } from "react";
import { FolderArchive } from "lucide-react";

export default function Home() {
  const [statusText, setStatusText] = useState("_");

  const mission = {
    message: "Olá, Terra! Recebemos sua mensagem e estamos prontos para conhecê-los!",
  };

  const handleContact = () => {
    setStatusText("Enviando mensagem...");

    setTimeout(() => {
      setStatusText("Recebendo resposta...");

      setTimeout(() => {
        setStatusText(`Mensagem recebida: ${mission.message}`);
      }, 1200);

    }, 1200);
  };

  return (
    <div
      className="flex flex-col items-center h-screen w-screen bg-cover bg-center p-10"
      style={{ backgroundImage: "url('/unsplashspace.jpg')" }}
    >
      <h1 className="text-white text-5xl font-bold">Missão Espacial</h1>

      <div className="w-[800px] bg-[#262629] rounded-[24px] mt-10 px-8 py-8 space-y-4">
        <p className="text-white text-sm font-semibold">Upload de Arquivo</p>

        <div className="flex items-center gap-2 bg-[#414141] rounded-[7px] w-fit py-[10px] px-[15px]">
          <div className="bg-[#787878] px-[10px] py-[10px] rounded-[6px]">
            <FolderArchive className="text-white" />
          </div>
          <p className="text-white text-sm font-semibold">
            MensagemDaTerra.jpg
          </p>
        </div>

        <button
          onClick={handleContact}
          className="text-white text-sm font-semibold py-2 px-3 bg-green-700 rounded-[8px]"
        >
          Fazer contato
        </button>
      </div>

      <div className="w-[800px] h-[300px] bg-[#2f2e33] mt-10 border border-[#8f8f8f] px-[10px] py-[10px]">
        <p className="text-white text-sm font-semibold">
          {statusText}
        </p>
      </div>
    </div>
  );
}