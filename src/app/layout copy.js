"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
// MENAMBAHKAN ICON: Heart & MessageCircle
import { Instagram, Youtube, Phone, Moon, Sun, Heart, MessageCircle } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({ children }) {
  // Default theme 'light' untuk menghindari error hydration
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    // Ambil tema dari localStorage setelah website tampil (Client Side)
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "business" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Logic Background Logo: Dark Mode = White, Light Mode = Ice White (#F0F8FF)
  const logoBgClass = theme === "business" ? "bg-white" : "bg-[#F0F8FF]";

  return (
    // suppressHydrationWarning
    <html lang="id" data-theme={theme} className={`${lato.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden flex flex-col min-h-screen">
        
        {/* === HEADER / NAVBAR === */}
        <div className="navbar bg-base-100/95 backdrop-blur-md shadow-sm fixed top-0 z-50 transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center px-4">
            
            {/* BRANDING: LOGO + JUDUL LENGKAP */}
            <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
              <div className={`${logoBgClass} rounded-full p-1.5 w-10 h-10 flex items-center justify-center shadow-md border border-base-300 transition-colors duration-300`}>
                <img src="/img/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg md:text-xl text-primary leading-tight">
                GMI Bahtera<br className="md:hidden"/> Bandung Timur
              </span>
            </a>
            
            {/* NAVIGASI & TOGGLE */}
            <div className="flex items-center gap-6">
              <ul className="menu menu-horizontal px-1 hidden md:flex font-semibold text-base gap-2">
                <li><a href="/#jadwal">Jadwal</a></li>
                <li><a href="/#lokasi">Lokasi</a></li>
                <li><a href="/galeri">Galeri</a></li> {/* SUDAH DIKEMBALIKAN */}
              </ul>

              {/* TOGGLE SWITCH MODE */}
              <div 
                onClick={toggleTheme} 
                className={`w-14 h-7 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-300 shadow-inner ${theme === 'business' ? 'bg-primary' : 'bg-gray-300'}`}
              >
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'business' ? 'translate-x-7' : 'translate-x-0'}`}>
                   {theme === 'business' ? (
                     <Moon size={12} className="text-primary" />
                   ) : (
                     <Sun size={12} className="text-yellow-500" />
                   )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* KONTEN UTAMA */}
        <div className="flex-grow">
            {children}
        </div>

        {/* === FOOTER (GAYA ASLI BASE-200) === */}
        <footer className="footer p-10 bg-base-200 text-base-content mt-10 border-t border-base-300">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Kolom 1: Identitas */}
            <nav>
              <div className="flex items-center gap-2 mb-4">
                <div className={`${logoBgClass} rounded-full p-1.5 w-10 h-10 flex items-center justify-center shadow-sm border border-base-300 transition-colors duration-300`}>
                  <img src="/img/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-lg">GMI BAHTERA BANDUNG TIMUR</span>
              </div>
              <p className="opacity-70">Melayani dengan kasih, bertumbuh dalam iman.</p>
            </nav> 

            {/* Kolom 2: Sosmed */}
            <nav>
              <h6 className="footer-title opacity-100 text-primary">Media Sosial</h6> 
              <a href="https://instagram.com/berilberekhya" target="_blank" className="flex items-center gap-2 link link-hover hover:text-primary transition-colors">
                <Instagram size={20} /> @GMI Bahtera Bandung Timur
              </a>
              <a href="https://youtube.com/@GMIBahteraBandungTimur" target="_blank" className="flex items-center gap-2 link link-hover hover:text-primary transition-colors">
                <Youtube size={20} /> GMI Bahtera Bandung Timur
              </a>
            </nav> 

            {/* Kolom 3: Kontak (Beril Berekhya) */}
            <nav>
              <h6 className="footer-title opacity-100 text-primary">Hubungi Kami</h6> 
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                   <div className="bg-green-600 text-white p-2 rounded-full shadow-md">
                     <MessageCircle size={18} />
                   </div>
                   <div>
                     <p className="font-bold text-base">Beril Berekhya</p>
                     <p className="text-sm opacity-70">+62 823-9143-0073</p>
                   </div>
                </div>
                <a href="https://wa.link/v5467w" target="_blank" className="btn btn-sm btn-outline btn-success gap-2 w-fit mt-1">
                  <Phone size={14} /> Chat WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </footer>

        {/* === FOOTER BAGIAN BAWAH (COPYRIGHT & CREDIT) === */}
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
             <aside className="items-center grid-flow-col">
                <p>© 2025 Pelayanan Masyarakat & Gereja. All rights reserved.</p>
             </aside> 
             <nav className="md:place-self-center justify-self-end">
               <div className="flex items-center gap-1 text-sm opacity-80">
                 Developed with Next.js. OneManArmy by <span className="font-bold text-primary">Beril Berekhya</span>
               </div>
             </nav>
          </div>
        </footer>

      </body>
    </html>
  );
}