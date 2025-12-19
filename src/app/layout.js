import { Lato } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; 
import ProtectContent from "./components/ProtectContent"; // Import ini sudah benar

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

// --- SEO & OPEN GRAPH OTOMATIS OLEH NEXT.JS ---
export const metadata = {
  title: "GMI Bahtera Bandung Timur - Bahtera Keluarga Allah",
  description: "Website resmi GMI Bahtera Bandung Timur. Jadwal ibadah, lokasi, warta jemaat, dan pelayanan kasih.",
  openGraph: {
    type: "website",
    url: "https://gmibahtera.org/", // Ganti domain asli jika sudah ada
    title: "GMI Bahtera Bandung Timur",
    description: "Melayani dengan kasih, bertumbuh dalam iman. Temukan jadwal ibadah dan warta jemaat di sini.",
    images: [{
      url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMI Bahtera Bandung Timur",
    description: "Melayani dengan kasih, bertumbuh dalam iman.",
    images: ["https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${lato.variable} scroll-smooth`} suppressHydrationWarning>
      {/* UPDATE DI SINI:
         1. Menambahkan class 'select-none' untuk mencegah blok teks.
      */}
      <body className="font-sans antialiased overflow-x-hidden select-none">
        
        {/* UPDATE DI SINI:
         2. Memanggil komponen pelindung agar klik kanan & shortcut mati.
        */}
        <ProtectContent />

        {/* Panggil ClientLayout untuk membungkus konten */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}