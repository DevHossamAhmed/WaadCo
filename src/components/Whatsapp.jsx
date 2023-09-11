import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Whatsapp = () => {
  return (
    <div
      className="whatsapp bg-green-500 w-[60px]  
        h-[60px] flex items-center justify-center text-[40px]
          text-white gap-1 my-5 rounded-full cursor-pointer
          bottom-4 fixed right-6 z-50
          "
    >
      <a href="https://api.whatsapp.com/send?phone=%2B966547237753&data=ARAHPgNzZAmtaoaz-8IlNU3cPBA4r1_ScoyP1r0PtX5jZrKEsq8dCbQyUU1x3rwCNpL9k-WFqmC7zOHChURDMiht0qaCFe0K2AZ5eh6SBBTwGEXLI_JavfPAz3JBdiI-xxpIBQP2C8CL64Q8TojQk4cu7A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1vHCKiRWNaMiF1bbbg3uW0WtE3Rl1bAJMC4FwDT4NTYXR3iSACD7hWL6A">
        <AiOutlineWhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
