// "use client";

// import { useState, useEffect } from "react";
// import { 
//   ExternalLink, 
//   Image as ImageIcon,
//   Calendar,
//   FolderOpen,
//   ArrowUpDown, 
//   ArrowLeft,
//   Search,
// } from "lucide-react";
// import Link from 'next/link';
// import AOS from 'aos'; 
// import 'aos/dist/aos.css';

// // --- DATA GALERI (Path Lokal) ---
// const galleryAlbums = [
//   { 
//     id: 1, 
//     title: "HUT GMI ke-58", 
//     date: "2022", 
//     category: "HUT", 
//     cover: "/img/covergaleri/id1.JPG", 
//     driveLink: "https://drive.google.com/drive/folders/1hLX5Eed34IixfFe-U1Hu4_pWvx8Nga0o?usp=sharing" 
//   },
//   { 
//     id: 2, 
//     title: "Thanksgiving Day", 
//     date: "2022", 
//     category: "Thanksgiving", 
//     cover: "/img/covergaleri/id2.JPG", 
//     driveLink: "https://drive.google.com/drive/folders/1GM0j5huAPqDzHqWMA3UGYLljVca53mbK?usp=share_link" 
//   },
//   { 
//     id: 3, 
//     title: "Natal Umum", 
//     date: "2022", 
//     category: "Natal", 
//     cover: "/img/covergaleri/id3.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1XQeM38qVH0R_afL3Cx7yJu1OaC0-XjuA?usp=share_link" 
//   },
//   { 
//     id: 4, 
//     title: "Paskah", 
//     date: "2023", 
//     category: "Paskah", 
//     cover: "/img/covergaleri/id4.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1KmCErFue0WhQaepwuNIHX22JY4lrzGN2?usp=sharing" 
//   },
//   { 
//     id: 5, 
//     title: "Thanksgiving Day", 
//     date: "2023", 
//     category: "Thanksgiving", 
//     cover: "/img/covergaleri/id5.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1V0vi4BnwE_Gqm6nF-Wf_3-hHzSYLfThj?usp=sharing" 
//   },
//   { 
//     id: 6, 
//     title: "Natal Sekolah Minggu", 
//     date: "2023", 
//     category: "Natal", 
//     cover: "/img/covergaleri/id6.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1-0QMs-X_b0VwzxqIERntt6E8-xAirUIq" 
//   },
//   { 
//     id: 7, 
//     title: "Natal Umum", 
//     date: "2023", 
//     category: "Natal", 
//     cover: "/img/covergaleri/id7.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1s720KLsATWOWQwz-LA0VAb3JFO2J50oL?usp=sharing" 
//   },
//   { 
//     id: 8, 
//     title: "Paskah", 
//     date: "2024", 
//     category: "Paskah", 
//     cover: "/img/covergaleri/id8.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/14iOIvdL9qC0Odfq9UALFG4bLoDNgF005" 
//   },
//   { 
//     id: 9, 
//     title: "Retreat Gereja", 
//     date: "2024", 
//     category: "Kegiatan", 
//     cover: "/img/covergaleri/id9.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1_TDeLu9h_t0pl5Ulyhk3jlfUaq5b-KIq?usp=sharing" 
//   },
//   { 
//     id: 10, 
//     title: "HUT GMI ke-60", 
//     date: "2024", 
//     category: "HUT", 
//     cover: "/img/covergaleri/id10.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1Q05x1eySXOuNwKhKCVMUGK-FnF4pxPJe?usp=sharing" 
//   },
//   { 
//     id: 11, 
//     title: "Thanksgiving Day", 
//     date: "2024", 
//     category: "Thanksgiving", 
//     cover: "/img/covergaleri/id11.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1JH8imD4b8IeiBEBPecu1vCEtWQe8NKwS?usp=sharing" 
//   },
//   { 
//     id: 12, 
//     title: "Natal Sekolah Minggu", 
//     date: "2024", 
//     category: "Natal", 
//     cover: "/img/covergaleri/id12.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1LwEZHbHNB8QORi36J-mE5tIpJhUSA2_J?usp=sharing" 
//   },
//   { 
//     id: 13, 
//     title: "Natal P3MI", 
//     date: "2024", 
//     category: "Natal", 
//     cover: "/img/covergaleri/id13.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/11DZcH7bO0o3pDtFKtLWdHuh7rDfwBC3o" 
//   },
//   { 
//     id: 14, 
//     title: "Natal Umum", 
//     date: "2024", 
//     category: "Natal", 
//     cover: "/img/covergaleri/id14.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1CBM98jrE4ahS93TpN0K1DzC1qLBfuqVD?usp=sharing" 
//   },
//   { 
//     id: 15, 
//     title: "Paskah", 
//     date: "2025", 
//     category: "Paskah", 
//     cover: "/img/covergaleri/id15.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1DI2SamcCayWwS_VHdmQCzomoxVWKe9P3?usp=sharing" 
//   },
//   { 
//     id: 16, 
//     title: "HUT GMI ke-61", 
//     date: "2025", 
//     category: "HUT", 
//     cover: "/img/covergaleri/id16.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1AnJdMZFjhtXw_-7aroL12SCsdM1roKzB?usp=sharing" 
//   },
//   { 
//     id: 17, 
//     title: "Thanksgiving Day", 
//     date: "2025", 
//     category: "Thanksgiving", 
//     cover: "/img/covergaleri/id17.JPG",  
//     driveLink: "https://drive.google.com/drive/folders/1VIO8_AB2ygJWbBR2aEyZfMYRYauNH0U9?usp=sharing" 
//   },
// ];

// const categories = ["Semua", ...new Set(galleryAlbums.map(item => item.category))];

// export default function GalleryPage() {
//   const [selectedCategory, setSelectedCategory] = useState("Semua");
//   const [sortOrder, setSortOrder] = useState("desc");
//   const [searchQuery, setSearchQuery] = useState(""); 
//   const [filteredAlbums, setFilteredAlbums] = useState(galleryAlbums);
  
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     setIsAnimating(true); 

//     const timer = setTimeout(() => {
//         let result = galleryAlbums;

//         // Filter Kategori
//         if (selectedCategory !== "Semua") {
//           result = result.filter(item => item.category === selectedCategory);
//         }

//         // Filter Search (Case Insensitive + Trim Spasi)
//         if (searchQuery) {
//           const query = searchQuery.toLowerCase().trim(); // FIX: Trim spasi kiri/kanan
//           result = result.filter(item => 
//             item.title.toLowerCase().includes(query)
//           );
//         }

//         // Sort
//         result = [...result].sort((a, b) => {
//           const yearA = parseInt(a.date);
//           const yearB = parseInt(b.date);
//           if (sortOrder === "desc") {
//             return yearB - yearA || b.id - a.id;
//           } else {
//             return yearA - yearB || a.id - b.id;
//           }
//         });

//         setFilteredAlbums(result);
        
//         // Selesai transisi
//         setTimeout(() => {
//             setIsAnimating(false);
//             AOS.refresh(); 
//         }, 50);

//     }, 300); 

//     return () => clearTimeout(timer);
//   }, [selectedCategory, sortOrder, searchQuery]);

//   return (
//     <main className="min-h-screen bg-base-100 pt-22 pb-20 px-4 md:px-8 relative">
      
//       {/* TOMBOL KEMBALI */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <Link href="/" className="inline-flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors group font-medium">
//           <div className="p-2 rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors">
//              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
//           </div>
//           Kembali ke Beranda
//         </Link>
//       </div>

//       {/* HEADER */}
//       <div className="text-center mb-10" data-aos="fade-down">
//         <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
//           Galeri <span className="text-primary">Momen</span>
//         </h1>
//         <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
//           Kumpulan album dokumentasi perjalanan pelayanan dan sukacita GMI Bahtera Bandung Timur.
//         </p>
//       </div>

//       {/* CONTROLS (Filter, Search, Sort) */}
//       <div className="max-w-7xl mx-auto mb-8" data-aos="fade-up">
//         <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-base-200/50 p-4 rounded-3xl backdrop-blur-sm">
          
//           {/* Tab Kategori */}
//           <div className="flex flex-wrap gap-2 w-full xl:w-auto">
//             {categories.map((cat, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border
//                   ${selectedCategory === cat 
//                     ? "bg-base-100 text-primary shadow-sm border-transparent dark:bg-base-300" 
//                     : "bg-transparent border-transparent hover:bg-base-100/50 text-base-content/70"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Search & Sort */}
//           <div className="flex flex-col sm:flex-row w-full xl:w-auto gap-4">
             
//              {/* Search Bar */}
//              <div className="relative w-full sm:w-64">
//                 <input 
//                   type="text" 
//                   placeholder="Cari album..." 
//                   className="input input-bordered w-full rounded-full pl-10 focus:outline-none focus:border-primary bg-base-100 text-base-content placeholder:text-base-content/50"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 text-base-content" size={18} />
//              </div>

//              {/* Sort Dropdown */}
//              <div className="flex items-center gap-2 w-full sm:w-auto">
//                <select 
//                   className="select select-bordered w-full sm:w-auto rounded-full focus:outline-none focus:border-primary bg-base-100 text-base-content"
//                   value={sortOrder}
//                   onChange={(e) => setSortOrder(e.target.value)}
//                >
//                  <option value="desc">Terbaru</option>
//                  <option value="asc">Terlama</option>
//                </select>
//             </div>
//           </div>

//         </div>
        
//         <div className="mt-4 px-2 text-sm opacity-60">
//            Menampilkan {filteredAlbums.length} album
//         </div>
//       </div>

//       {/* ALBUM GRID (GRID LAYOUT FIX) */}
//       {/* Menggunakan GRID (grid-cols-*) alih-alih columns-* agar layout urut kiri-ke-kanan */}
//       <div 
//         className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
//       >
//         {filteredAlbums.map((album, idx) => (
//           <div 
//             key={album.id} 
//             className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-base-200 flex flex-col h-full"
//             data-aos="fade-up"
//             data-aos-delay={idx * 50} 
//           >
//             <Link href={album.driveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
              
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img 
//                   src={album.cover} 
//                   alt={album.title} 
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   loading="lazy"
//                 />
                
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
//                   <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white border border-white/30">
//                       <ExternalLink size={32} />
//                   </div>
//                 </div>
//               </div>

//               <div className="p-5 bg-base-100 border-t border-base-200 relative z-20 flex-1 flex flex-col justify-between">
//                 <div>
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="badge badge-primary badge-outline text-xs font-bold uppercase tracking-wider">{album.category}</span>
                    
//                     <div className="flex items-center gap-2 text-sm font-semibold text-base-content/80">
//                       <Calendar size={16} /> {album.date}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
//                      {album.title}
//                   </h3>
//                 </div>
                
//                 <p className="text-sm opacity-60 mt-4 flex items-center gap-2">
//                   <FolderOpen size={14}/> Lihat di Google Drive
//                 </p>
//               </div>

//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {!isAnimating && filteredAlbums.length === 0 && (
//         <div className="text-center py-20 opacity-50" key="empty" data-aos="fade-in">
//           <ImageIcon size={64} className="mx-auto mb-4"/>
//           <p>Tidak ada album yang ditemukan untuk pencarian ini.</p>
//           <button 
//             onClick={() => {setSearchQuery(""); setSelectedCategory("Semua");}}
//             className="mt-4 btn btn-sm btn-outline"
//           >
//             Reset Filter
//           </button>
//         </div>
//       )}

//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { 
  ExternalLink, 
  Image as ImageIcon,
  Calendar,
  FolderOpen,
  ArrowUpDown, 
  ArrowLeft,
  Search,
} from "lucide-react";
import Link from 'next/link';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

// --- DATA GALERI (Path Lokal) ---
const galleryAlbums = [
  { 
    id: 1, 
    title: "HUT GMI ke-58", 
    date: "2022", 
    category: "HUT", 
    cover: "/img/covergaleri/id1.JPG", 
    driveLink: "https://drive.google.com/drive/folders/1hLX5Eed34IixfFe-U1Hu4_pWvx8Nga0o?usp=sharing" 
  },
  { 
    id: 2, 
    title: "Thanksgiving Day", 
    date: "2022", 
    category: "Thanksgiving", 
    cover: "/img/covergaleri/id2.JPG", 
    driveLink: "https://drive.google.com/drive/folders/1GM0j5huAPqDzHqWMA3UGYLljVca53mbK?usp=share_link" 
  },
  { 
    id: 3, 
    title: "Natal Umum", 
    date: "2022", 
    category: "Natal", 
    cover: "/img/covergaleri/id3.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1XQeM38qVH0R_afL3Cx7yJu1OaC0-XjuA?usp=share_link" 
  },
  { 
    id: 4, 
    title: "Paskah", 
    date: "2023", 
    category: "Paskah", 
    cover: "/img/covergaleri/id4.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1KmCErFue0WhQaepwuNIHX22JY4lrzGN2?usp=sharing" 
  },
  { 
    id: 5, 
    title: "Thanksgiving Day", 
    date: "2023", 
    category: "Thanksgiving", 
    cover: "/img/covergaleri/id5.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1V0vi4BnwE_Gqm6nF-Wf_3-hHzSYLfThj?usp=sharing" 
  },
  { 
    id: 6, 
    title: "Natal Sekolah Minggu", 
    date: "2023", 
    category: "Natal", 
    cover: "/img/covergaleri/id6.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1-0QMs-X_b0VwzxqIERntt6E8-xAirUIq" 
  },
  { 
    id: 7, 
    title: "Natal Umum", 
    date: "2023", 
    category: "Natal", 
    cover: "/img/covergaleri/id7.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1s720KLsATWOWQwz-LA0VAb3JFO2J50oL?usp=sharing" 
  },
  { 
    id: 8, 
    title: "Paskah", 
    date: "2024", 
    category: "Paskah", 
    cover: "/img/covergaleri/id8.JPG",  
    driveLink: "https://drive.google.com/drive/folders/14iOIvdL9qC0Odfq9UALFG4bLoDNgF005" 
  },
  { 
    id: 9, 
    title: "Retreat Gereja", 
    date: "2024", 
    category: "Retreat", 
    cover: "/img/covergaleri/id9.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1_TDeLu9h_t0pl5Ulyhk3jlfUaq5b-KIq?usp=sharing" 
  },
  { 
    id: 10, 
    title: "HUT GMI ke-60", 
    date: "2024", 
    category: "HUT", 
    cover: "/img/covergaleri/id10.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1Q05x1eySXOuNwKhKCVMUGK-FnF4pxPJe?usp=sharing" 
  },
  { 
    id: 11, 
    title: "Thanksgiving Day", 
    date: "2024", 
    category: "Thanksgiving", 
    cover: "/img/covergaleri/id11.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1JH8imD4b8IeiBEBPecu1vCEtWQe8NKwS?usp=sharing" 
  },
  { 
    id: 12, 
    title: "Natal Sekolah Minggu", 
    date: "2024", 
    category: "Natal", 
    cover: "/img/covergaleri/id12.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1LwEZHbHNB8QORi36J-mE5tIpJhUSA2_J?usp=sharing" 
  },
  { 
    id: 13, 
    title: "Natal P3MI", 
    date: "2024", 
    category: "Natal", 
    cover: "/img/covergaleri/id13.JPG",  
    driveLink: "https://drive.google.com/drive/folders/11DZcH7bO0o3pDtFKtLWdHuh7rDfwBC3o" 
  },
  { 
    id: 14, 
    title: "Natal Umum", 
    date: "2024", 
    category: "Natal", 
    cover: "/img/covergaleri/id14.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1CBM98jrE4ahS93TpN0K1DzC1qLBfuqVD?usp=sharing" 
  },
  { 
    id: 15, 
    title: "Paskah", 
    date: "2025", 
    category: "Paskah", 
    cover: "/img/covergaleri/id15.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1DI2SamcCayWwS_VHdmQCzomoxVWKe9P3?usp=sharing" 
  },
  { 
    id: 16, 
    title: "HUT GMI ke-61", 
    date: "2025", 
    category: "HUT", 
    cover: "/img/covergaleri/idhut61.jpeg",  
    driveLink: "https://drive.google.com/drive/folders/1AnJdMZFjhtXw_-7aroL12SCsdM1roKzB?usp=sharing" 
  },
  { 
    id: 17, 
    title: "Thanksgiving Day", 
    date: "2025", 
    category: "Thanksgiving", 
    cover: "/img/covergaleri/id17.JPG",  
    driveLink: "https://drive.google.com/drive/folders/1VIO8_AB2ygJWbBR2aEyZfMYRYauNH0U9?usp=sharing" 
  },
];

const categories = ["Semua", ...new Set(galleryAlbums.map(item => item.category))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredAlbums, setFilteredAlbums] = useState(galleryAlbums);
  
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Init AOS agar animasi jalan saat pertama load
    AOS.init({
        duration: 800,
        once: true,
      });

    setIsAnimating(true); 

    const timer = setTimeout(() => {
        let result = galleryAlbums;

        // Filter Kategori
        if (selectedCategory !== "Semua") {
          result = result.filter(item => item.category === selectedCategory);
        }

        // Filter Search (Case Insensitive + Trim Spasi)
        if (searchQuery) {
          const query = searchQuery.toLowerCase().trim();
          result = result.filter(item => 
            item.title.toLowerCase().includes(query)
          );
        }

        // Sort
        result = [...result].sort((a, b) => {
          const yearA = parseInt(a.date);
          const yearB = parseInt(b.date);
          if (sortOrder === "desc") {
            return yearB - yearA || b.id - a.id;
          } else {
            return yearA - yearB || a.id - b.id;
          }
        });

        setFilteredAlbums(result);
        
        // Selesai transisi
        setTimeout(() => {
            setIsAnimating(false);
            AOS.refresh(); 
        }, 50);

    }, 300); 

    return () => clearTimeout(timer);
  }, [selectedCategory, sortOrder, searchQuery]);

  return (
    // Tambahkan overflow-hidden di sini agar glow tidak bocor keluar
    <main className="min-h-screen bg-base-100 pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      
      {/* === BACKGROUND AMBIENCE & GRID === */}
      {/* Grid Pattern (Sangat halus) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0"></div>

      {/* Ambience Glow (Kiri Atas - Biru/Primary) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Ambience Glow (Kanan Tengah - Pink/Secondary) */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0 translate-x-1/2 -translate-y-1/2"></div>


      {/* === CONTENT WRAPPER (Agar berada di atas background) === */}
      <div className="relative z-10">
        
        {/* TOMBOL KEMBALI */}
        <div className="max-w-7xl mx-auto mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors group font-medium">
            <div className="p-2 rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Kembali ke Beranda
            </Link>
        </div>

        {/* HEADER */}
        <div className="text-center mb-10" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Galeri <span className="text-primary">Momen</span>
            </h1>
            <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            Kumpulan album dokumentasi perjalanan pelayanan dan sukacita GMI Bahtera Bandung Timur.
            </p>
        </div>

        {/* CONTROLS (Filter, Search, Sort) */}
        <div className="max-w-7xl mx-auto mb-8" data-aos="fade-up">
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 bg-base-200/60 p-4 rounded-3xl backdrop-blur-md border border-base-300/50 shadow-sm">
            
            {/* Tab Kategori */}
            <div className="flex flex-wrap gap-2 w-full xl:w-auto">
                {categories.map((cat, idx) => (
                <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border
                    ${selectedCategory === cat 
                        ? "bg-base-100 text-primary shadow-sm border-transparent dark:bg-base-300" 
                        : "bg-transparent border-transparent hover:bg-base-100/50 text-base-content/70"}`}
                >
                    {cat}
                </button>
                ))}
            </div>

            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row w-full xl:w-auto gap-4">
                
                {/* Search Bar */}
                <div className="relative w-full sm:w-64">
                    <input 
                    type="text" 
                    placeholder="Cari album..." 
                    className="input input-bordered w-full rounded-full pl-10 focus:outline-none focus:border-primary bg-base-100/80 text-base-content placeholder:text-base-content/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 text-base-content" size={18} />
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                <select 
                    className="select select-bordered w-full sm:w-auto rounded-full focus:outline-none focus:border-primary bg-base-100/80 text-base-content"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="desc">Terbaru</option>
                    <option value="asc">Terlama</option>
                </select>
                </div>
            </div>

            </div>
            
            <div className="mt-4 px-2 text-sm opacity-60">
            Menampilkan {filteredAlbums.length} album
            </div>
        </div>

        {/* ALBUM GRID */}
        <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
            {filteredAlbums.map((album, idx) => (
            <div 
                key={album.id} 
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-base-100 border border-base-200 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={idx * 50} 
            >
                <Link href={album.driveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                    src={album.cover} 
                    alt={album.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white border border-white/30">
                        <ExternalLink size={32} />
                    </div>
                    </div>
                </div>

                <div className="p-5 bg-base-100 relative z-20 flex-1 flex flex-col justify-between">
                    <div>
                    <div className="flex justify-between items-start mb-3">
                        <span className="badge badge-primary badge-outline text-xs font-bold uppercase tracking-wider">{album.category}</span>
                        
                        <div className="flex items-center gap-2 text-sm font-bold text-primary">
                        <Calendar size={16} /> {album.date}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2 leading-tight mb-2">
                        {album.title}
                    </h3>
                    </div>
                    
                    <p className="text-sm font-medium opacity-60 mt-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                    <FolderOpen size={16} className="text-primary"/> Buka di Google Drive
                    </p>
                </div>

                </Link>
            </div>
            ))}
        </div>

        {/* Empty State */}
        {!isAnimating && filteredAlbums.length === 0 && (
            <div className="text-center py-20 opacity-50" key="empty" data-aos="fade-in">
            <ImageIcon size={64} className="mx-auto mb-4"/>
            <p>Tidak ada album yang ditemukan untuk pencarian ini.</p>
            <button 
                onClick={() => {setSearchQuery(""); setSelectedCategory("Semua");}}
                className="mt-4 btn btn-sm btn-outline"
            >
                Reset Filter
            </button>
            </div>
        )}
      </div>

    </main>
  );
}