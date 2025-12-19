"use client"; // File ini khusus untuk interaksi client

import { useEffect, useState } from "react";
// Saya tambah icon 'Menu' dari lucide-react untuk tombol hamburger
import { Instagram, Youtube, Phone, Moon, Sun, Heart, MessageCircle, Menu } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Jangan lupa import komponen FloatingWarta di sini jika belum (sesuai instruksi sebelumnya)
// Jika FloatingWarta dipasang di page.js, tidak perlu import di sini. 
// Tapi kalau mau global, import di sini. (Asumsi: Mengikuti instruksi terakhir, FloatingWarta ada di page.js)

export default function ClientLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    // Ambil tema dari localStorage
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

  

  const logoBgClass = theme === "business" ? "bg-white" : "bg-[#F0F8FF]";

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* === HEADER / NAVBAR === */}
      <div className="navbar bg-base-100/95 backdrop-blur-md shadow-sm fixed top-0 z-50 transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center px-4">
            
            {/* 1. LOGO & JUDUL (KIRI) */}
            <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
              <div className={`${logoBgClass} rounded-full p-1.5 w-10 h-10 flex items-center justify-center shadow-md border border-base-300 transition-colors duration-300`}>
                <img src="/img/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg md:text-xl text-primary leading-tight">
                GMI Bahtera<br className="md:hidden"/> Bandung Timur
              </span>
            </a>
            
            {/* 2. MENU KANAN (Desktop & Mobile) */}
            <div className="flex items-center gap-4">
              
              {/* MENU DESKTOP (Hanya muncul di md/Laptop ke atas) */}
              <ul className="menu menu-horizontal px-1 hidden md:flex font-semibold text-base gap-2">
                <li><a href="/#jadwal">Jadwal</a></li>
                <li><a href="/#lokasi">Lokasi</a></li>
                <li><a href="/galeri">Galeri</a></li>
              </ul>

              {/* TOMBOL GANTI TEMA (Muncul di Semua Layar) */}
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

              {/* === MENU MOBILE (HAMBURGER) === */}
              {/* Hanya muncul di layar kecil (md:hidden) */}
              <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <Menu size={24} />
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-200">
                  <li><a href="/#jadwal" className="py-3">Jadwal Ibadah</a></li>
                  <li><a href="/#lokasi" className="py-3">Lokasi Gereja</a></li>
                  <li><a href="/galeri" className="py-3">Galeri Foto</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>

      {/* KONTEN UTAMA */}
      <div className="flex-grow">
        {children}
      </div>

      {/* === FOOTER === */}
      <footer className="footer p-10 bg-base-200 text-base-content mt-10 border-t border-base-300">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <nav>
              <div className="flex items-center gap-2 mb-4">
                <div className={`${logoBgClass} rounded-full p-1.5 w-10 h-10 flex items-center justify-center shadow-sm border border-base-300 transition-colors duration-300`}>
                  <img src="/img/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-lg">GMI BAHTERA BANDUNG TIMUR</span>
              </div>
              <p className="opacity-70">Melayani dengan kasih, bertumbuh dalam iman.</p>
            </nav> 
            <nav>
              <h6 className="footer-title opacity-100 text-primary">Media Sosial</h6> 
              <a href="https://instagram.com/p3mibdgtimur" target="_blank" className="flex items-center gap-2 link link-hover hover:text-primary transition-colors">
                <Instagram size={20} /> @P3MI Bahtera Bandung Timur
              </a>
              <a href="https://youtube.com/@GMIBahteraBandungTimur" target="_blank" className="flex items-center gap-2 link link-hover hover:text-primary transition-colors">
                <Youtube size={20} /> GMI Bahtera Bandung Timur
              </a>
            </nav> 
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

<footer className="footer px-10 py-6 border-t bg-base-200 text-base-content border-base-300">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
             <aside className="items-center grid-flow-col text-center md:text-left">
                <p>© 2025 Pelayanan Masyarakat & Gereja. All rights reserved.</p>
             </aside> 
             
             <nav className="md:place-self-center justify-self-end">
               <div className="flex items-center gap-1.5 text-sm opacity-80">
                 {/* Text "Built solo" menekankan One Man Project */}
                 <span>Built solo using</span>
                 
                 {/* Logo Next.js SVG (Inline) */}
                 <span className="tooltip tooltip-primary" data-tip="Next.js">
                   <svg 
                     width="18" 
                     height="18" 
                     viewBox="0 0 180 180" 
                     fill="none" 
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline-block mb-0.5"
                     aria-label="Next.js Logo"
                   >
                     <mask id="mask0_1_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                       <circle cx="90" cy="90" r="90" fill="black"/>
                     </mask>
                     <g mask="url(#mask0_1_2)">
                       {/* Circle Background: Mengikuti warna teks (currentColor) */}
                       <circle cx="90" cy="90" r="90" fill="currentColor" />
                       {/* Huruf N: Mengikuti warna background footer (agar kontras/bolong) */}
                       <path d="M149.508 157.527L69.143 53H54V125H66V66.97L138.767 160.83C142.613 160.054 146.216 158.937 149.508 157.527Z" className="fill-base-200" />
                       <path d="M115 54H127V126H115V54Z" className="fill-base-200" />
                     </g>
                   </svg>
                 </span>

                 <span>by <span className="font-bold text-primary">Beril Berekhya</span></span>
               </div>
             </nav>
          </div>
        </footer>
    </div>
  );
}