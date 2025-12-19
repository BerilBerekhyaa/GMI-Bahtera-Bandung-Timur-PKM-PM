// "use client";

// import React, { useState, useEffect } from "react";
// import { FileDown, MessageCircle } from "lucide-react"; 

// const FloatingWarta = ({ onPrayerClick }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   // --- LOGIC SCROLL ---
//   useEffect(() => {
//     const toggleVisibility = () => {
//       // Hitung tinggi total dokumen dikurangi tinggi layar (scrollable area)
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const currentScroll = window.scrollY;

//       // Ambang batas (Threshold) adalah setengah dari total scroll (50%)
//       const halfPage = totalHeight / 3.14;

//       if (currentScroll > halfPage) {
//         // Jika scroll sudah lewat setengah -> HILANG
//         setIsVisible(false);
//       } else {
//         // Jika masih di bagian atas -> MUNCUL
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   // --- STYLING ---
//   const buttonBaseClass = "w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 active:scale-90 hover:scale-110";
//   const iconSize = "w-5 h-5";
//   const tooltipClass = "absolute right-14 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm whitespace-nowrap pointer-events-none border border-white/10";

//   return (
//     // CONTAINER UTAMA
//     // Kita mainkan class opacity & translate di sini berdasarkan state isVisible
//     <div 
//       className={`fixed bottom-6 right-6 flex flex-col gap-3 z-[90] items-end transition-all duration-500 ease-in-out ${
//         isVisible 
//           ? "opacity-100 translate-y-0 pointer-events-auto" // Muncul
//           : "opacity-0 translate-y-20 pointer-events-none"   // Hilang ke bawah
//       }`}
//     >
      
//       {/* === TOMBOL 1: Warta Jemaat === */}
//       <div className="group relative flex items-center">
//         <span className={tooltipClass}>Unduh Warta</span>
//         <a 
//           href="https://s.id/warta-gmi-bahtera" 
//           target="_blank"
//           className={`${buttonBaseClass} bg-[#0ea5e9] hover:bg-[#0284c7] text-white`}
//           aria-label="Unduh Warta Jemaat"
//         >
//           <FileDown className={iconSize} strokeWidth={2.5} />
//         </a>
//       </div>

//       {/* === TOMBOL 2: Pojok Doa === */}
//       <div className="group relative flex items-center">
//         <span className={tooltipClass}>Butuh Doa?</span>
//         <button 
//           onClick={onPrayerClick} 
//           className={`${buttonBaseClass} bg-[#64748b] hover:bg-[#475569] text-white border-2 border-white`}
//           aria-label="Pojok Doa"
//         >
//           <MessageCircle className={iconSize} strokeWidth={2.5} />
//         </button>
//       </div>

//     </div>
//   );
// };

// export default FloatingWarta;

"use client";

import { useState, useEffect } from "react";
import { MessageCircle, FileText, ArrowUp, ExternalLink } from "lucide-react";

export default function FloatingWarta({ onPrayerClick }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showWartaModal, setShowWartaModal] = useState(false);

  // 1. LOGIC SCROLL (Tukar Tombol Warta <-> Arrow Up)
  useEffect(() => {
    const toggleVisibility = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const threshold = totalHeight / 3.14;

      if (currentScroll > threshold) {
        setIsVisible(false); // Muncul Arrow Up
      } else {
        setIsVisible(true);  // Muncul Warta & Doa
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 2. LOGIC KUNCI SCROLL PAGE SAAT MODAL WARTA DIBUKA
  useEffect(() => {
    if (showWartaModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [showWartaModal]);

  // Fungsi Scroll ke Atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fungsi Konfirmasi Buka Link
  const confirmOpenWarta = () => {
    window.open("https://s.id/warta-gmi-bahtera", "_blank");
    setShowWartaModal(false);
  };

  return (
    <>
      {/* === CONTAINER TOMBOL FLOATING === */}
      <div className="fixed bottom-6 right-6 z-50">
        
        {/* === GROUP 1: WARTA & POJOK DOA (Muncul saat isVisible = TRUE) === */}
        <div 
          className={`flex flex-col items-end gap-3 transition-all duration-500 ease-in-out transform origin-bottom-right ${
            isVisible 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 translate-y-10 scale-50 pointer-events-none"
          }`}
        >
          {/* Tombol Pojok Doa */}
          <button
            onClick={onPrayerClick}
            // Responsive: Mobile (Bulat, No Text) | Desktop (Lonjong, Text)
            className="btn btn-secondary text-white shadow-lg btn-circle md:btn-md md:w-auto md:px-6 md:rounded-full animate-bounce-slow"
          >
            <MessageCircle size={20} /> 
            <span className="hidden md:inline ml-2">Pojok Doa</span>
          </button>

          {/* Tombol Warta Jemaat (Sekarang memicu Modal) */}
          <button
            onClick={() => setShowWartaModal(true)}
            className="btn btn-primary text-white shadow-lg btn-circle md:btn-md md:w-auto md:px-6 md:rounded-full"
          >
            <FileText size={20} /> 
            <span className="hidden md:inline ml-2">Warta Jemaat</span>
          </button>
        </div>


        {/* === GROUP 2: ARROW UP (Muncul saat isVisible = FALSE) === */}
        <button
          onClick={scrollToTop}
          // Responsive Posisi: Mobile (Bawah) | Desktop (Naik sejajar Pojok Doa)
          className={`btn btn-circle btn-primary text-white shadow-lg absolute right-0 
            bottom-0 md:bottom-[60px] 
            transition-all duration-500 ease-in-out transform ${
            !isVisible 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 translate-y-10 scale-50 pointer-events-none"
          }`}
        >
          <ArrowUp size={24} />
        </button>

      </div>

      {/* === MODAL KONFIRMASI WARTA === */}
      {showWartaModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-base-100 rounded-2xl w-full max-w-sm shadow-2xl relative flex flex-col overflow-hidden animate-in zoom-in-95">
            <div className="p-6 text-center">
               <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                 <FileText size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">Unduh Warta Jemaat?</h3>
               <p className="text-base-content/70 mb-6">
                 Anda akan diarahkan ke penyimpanan Google Drive untuk melihat/mengunduh Warta Jemaat terbaru.
               </p>
               <div className="flex gap-3">
                 <button 
                   onClick={() => setShowWartaModal(false)} 
                   className="btn btn-ghost flex-1"
                 >
                   Batal
                 </button>
                 <button 
                   onClick={confirmOpenWarta} 
                   className="btn btn-primary text-white flex-1 gap-2"
                 >
                   Buka <ExternalLink size={16}/>
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}