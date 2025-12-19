"use client";

import { useState, useEffect, useCallback } from "react";
import Link from 'next/link';
import { 
  MapPin, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  CheckCircle,
  CalendarDays,
  Quote,
  Send,
  MessageCircle,
  X,
  ExternalLink,
  Map,
  ArrowUp
} from 'lucide-react';

import AOS from 'aos'; 
import 'aos/dist/aos.css';

import FloatingWarta from "./components/FloatingWarta"; 
import { lokasiGereja, jadwalIbadah, classMeeting, majelisGereja } from './data';

// --- DATA GAMBAR BACKGROUND HERO ---
const heroImages = [
  "/img/gerejaheropics/hero8.jpeg", 
  "/img/gerejaheropics/hero1.jpeg", 
  "/img/gerejaheropics/hero10.png", 
  "/img/gerejaheropics/hero4.jpeg", 
  "/img/gerejaheropics/hero5.jpeg", 
  "/img/gerejaheropics/hero6.jpeg", 
  "/img/gerejaheropics/hero7.jpeg",
  "/img/gerejaheropics/hero1.jpeg", 
  "/img/gerejaheropics/hero8.jpeg", 
  "/img/gerejaheropics/hero4.jpeg", 
];

// --- DATA GAMBAR SLIDER SEKOLAH (TK) ---
const schoolImages = [
  "/img/tkpics/tk1.jpeg", 
  "/img/tkpics/tk2.jpeg", 
  "/img/tkpics/tk3.jpeg", 
  "/img/tkpics/tk4.jpeg", 
  "/img/tkpics/tk5.jpeg", 
  "/img/tkpics/tk6.jpeg", 
];

// --- DATABASE AYAT HARIAN ---
const dailyVerses = [
  { text: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.", ref: "Filipi 4:13" },
  { text: "Tuhan adalah gembalaku, takkan kekurangan aku.", ref: "Mazmur 23:1" },
  { text: "Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri.", ref: "Amsal 3:5" },
  { text: "Damai sejahtera Kutinggalkan bagimu. Damai sejahtera-Ku Kuberikan kepadamu.", ref: "Yohanes 14:27" },
  { text: "Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah.", ref: "Filipi 4:6" },
  { text: "Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru.", ref: "Yesaya 40:31" },
  { text: "Pencuri datang hanya untuk mencuri dan membunuh dan membinasakan; Aku datang, supaya mereka mempunyai hidup.", ref: "Yohanes 10:10" },
  { text: "Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal.", ref: "Yohanes 3:16" },
  { text: "Serahkanlah segala kekuatiranmu kepada-Nya, sebab Ia yang memelihara kamu.", ref: "1 Petrus 5:7" },
  { text: "Aku ini tahu rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera.", ref: "Yeremia 29:11" },
  { text: "Kasih itu sabar; kasih itu murah hati; ia tidak cemburu.", ref: "1 Korintus 13:4" },
  { text: "Berbahagialah orang yang membawa damai, karena mereka akan disebut anak-anak Allah.", ref: "Matius 5:9" },
];

export default function Home() {
  const [showCM, setShowCM] = useState(false);
  const [showPrayerModal, setShowPrayerModal] = useState(false);
  
  // State Modal Map
  const [showMapModal, setShowMapModal] = useState(false);
  const [selectedMapUrl, setSelectedMapUrl] = useState("");
  const [selectedJadwalName, setSelectedJadwalName] = useState("");

  // State Slider Sekolah
  const [schoolSlideIndex, setSchoolSlideIndex] = useState(0);

  const [majelisIndex, setMajelisIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [todayVerse, setTodayVerse] = useState(dailyVerses[0]);
  const [prayerName, setPrayerName] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");

  // INIT (AOS & Scroll)
  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(Number(totalScroll / windowHeight));
    }
    window.addEventListener('scroll', handleScroll);

    const date = new Date();
    const dayOfMonth = date.getDate();
    const verseIndex = dayOfMonth % dailyVerses.length; 
    setTodayVerse(dailyVerses[verseIndex]);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- BARU: LOGIC UNTUK MENGUNCI SCROLL BODY SAAT MODAL TERBUKA ---
  useEffect(() => {
    // Jika salah satu modal terbuka...
    if (showCM || showPrayerModal || showMapModal) {
      // ...kunci scroll body
      document.body.style.overflow = "hidden";
    } else {
      // ...jika semua tertutup, kembalikan scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup: Pastikan scroll kembali normal saat komponen di-unmount/pindah halaman
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCM, showPrayerModal, showMapModal]);

  // SLIDER HERO
  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1)), []);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    const duration = currentSlide === 0 ? 7000 : 4000;
    const slideInterval = setTimeout(() => nextSlide(), duration);
    return () => clearTimeout(slideInterval);
  }, [currentSlide, nextSlide]);

  // SLIDER SEKOLAH
  useEffect(() => {
    const duration = schoolSlideIndex === 0 ? 6000 : 3000;
    const timer = setTimeout(() => {
      setSchoolSlideIndex((prevIndex) => 
        prevIndex === schoolImages.length - 1 ? 0 : prevIndex + 1
      );
    }, duration);
    return () => clearTimeout(timer);
  }, [schoolSlideIndex]);

  // RESPONSIVE CARDS
  const [cardsPerView, setCardsPerView] = useState(1); 
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) { setCardsPerView(3); } 
      else if (window.innerWidth >= 768) { setCardsPerView(2); } 
      else { setCardsPerView(1); }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, majelisGereja.length - cardsPerView);
  const nextMajelis = () => setMajelisIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevMajelis = () => setMajelisIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  // HANDLER DOA & MAP
  const handleSendPrayer = (e) => {
    e.preventDefault();
    const message = `Shalom, saya ${prayerName} ingin memohon dukungan doa : ${prayerRequest}`;
    const waLink = `https://wa.me/628128075545?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
    setShowPrayerModal(false);
    setPrayerName("");
    setPrayerRequest("");
  };

  const handleJadwalClick = (mapUrl, jadwalName) => {
    if (!mapUrl) return; 
    setSelectedMapUrl(mapUrl);
    setSelectedJadwalName(jadwalName);
    setShowMapModal(true);
  };

  const confirmOpenMap = () => {
    window.open(selectedMapUrl, '_blank');
    setShowMapModal(false);
  };

  return (
    <main className="min-h-screen bg-base-100 overflow-x-hidden pt-16 relative flex flex-col">
      
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60]" style={{ width: `${scrollProgress * 100}%` }}></div>
      
      {/* === HERO SECTION (GRID + GLOW) === */}
      <div className="hero min-h-[95vh] relative z-10 overflow-hidden group bg-base-300">
        {/* Local Background Hero */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>

        {heroImages.map((img, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        <div className="hero-content text-center text-neutral-content relative z-20" data-aos="fade-up">
          <div className="max-w-4xl px-4">
            <h1 className="mb-4 text-4xl md:text-7xl font-bold font-serif tracking-wide text-white drop-shadow-2xl leading-tight">
              GMI BAHTERA <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 drop-shadow-md">BANDUNG TIMUR</span>
            </h1>
            <h2 className="mb-8 text-xl md:text-2xl font-light text-gray-100 tracking-wider drop-shadow-md">"Bahtera Keluarga Allah"</h2>
            
            <div className="mb-10 bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center gap-2">
                 <Quote size={24} className="text-yellow-400 fill-current opacity-80" />
                 <p className="text-lg md:text-xl font-serif italic leading-relaxed text-gray-100">"{todayVerse.text}"</p>
                 <span className="text-sm font-bold text-primary tracking-widest mt-1">— {todayVerse.ref}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#jadwal" className="btn btn-primary text-white border-none shadow-lg px-8 py-3 h-auto hover:shadow-primary/50 transition-all hover:scale-105">
                <CalendarDays size={20} className="mr-2"/> Jadwal Ibadah
              </Link>
              <Link href="#lokasi" className="btn btn-outline text-white border-white hover:bg-white hover:text-black shadow-lg px-8 py-3 h-auto hover:shadow-white/30 transition-all hover:scale-105">
                <MapPin size={20} className="mr-2"/> Lokasi Kami
              </Link>
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white z-30 opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-all hidden md:flex hover:bg-black/20 hover:scale-110"><ChevronLeft size={48} strokeWidth={1.5} /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white z-30 opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-all hidden md:flex hover:bg-black/20 hover:scale-110"><ChevronRight size={48} strokeWidth={1.5} /></button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {heroImages.map((_, idx) => (
            <button key={idx} onClick={() => goToSlide(idx)} className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${idx === currentSlide ? "bg-white/90 w-4 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/30 w-1.5 hover:bg-white/60"}`} aria-label={`Go to slide ${idx + 1}`} />
          ))}
        </div>
      </div>

      {/* === PENDETA & MAJELIS SECTION (GRID + GLOW) === */}
      <section className="py-20 px-4 relative z-10 overflow-hidden">
        {/* LOCAL BACKGROUND: Glow & Grid untuk Pendeta */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-50 group-hover:opacity-100 blur-lg transition duration-1000"></div>
              <img src="/img/pendeta.png" className="relative rounded-2xl w-64 h-80 object-cover shadow-2xl border-2 border-white/20 bg-gray-300" alt="Pendeta" />
            </div>
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-4xl font-bold mb-2 text-gradient">Pdt. Marihot Hasibuan, M.Th.</h2>
              <div className="badge badge-primary badge-lg badge-outline mb-4">Pimpinan Jemaat</div>
              <p className="text-base-content/70 italic text-lg">"Melayani bukan untuk dilayani, membentuk semua orang percaya menjadi murid Kristus."</p>
            </div>
          </div>
          
          <div data-aos="fade-up">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2"><Users className="text-primary"/> Majelis Gereja</h3>
              <p className="opacity-60 text-sm mt-2">Periode Pelayanan Tahun 2026</p>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 md:px-12">
              <button onClick={prevMajelis} className="absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md btn-ghost hover:bg-base-200 z-10 bg-base-100/50 backdrop-blur shadow-md">
                <ChevronLeft size={24}/>
              </button>
              
              <button onClick={nextMajelis} className="absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md btn-ghost hover:bg-base-200 z-10 bg-base-100/50 backdrop-blur shadow-md">
                <ChevronRight size={24}/>
              </button>

              <div className="overflow-hidden py-4">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${majelisIndex * (100 / cardsPerView)}%)` }}
                >
                  {majelisGereja.map((majelis) => (
                    <div 
                      key={majelis.id} 
                      className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3"
                    >
                      <div className="card bg-base-100/50 backdrop-blur-md border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        <div className="card-body p-6 items-center text-center">
                          <div className="avatar mb-4">
                            <div className="w-32 h-32 md:w-28 md:h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden shadow-xl">
                              <img src={majelis.foto} alt={majelis.nama} className="object-cover w-full h-full" />
                            </div>
                          </div>
                          <div className="min-h-[3.5rem] flex items-center justify-center">
                            <h4 className="font-bold text-lg md:text-xl leading-tight text-base-content px-2">
                              {majelis.nama}
                            </h4>
                          </div>
                          <div className="w-full border-t border-base-300 my-2"></div>
                          <p className="text-primary font-bold font-sans uppercase tracking-wider text-sm">{majelis.jabatan}</p>
                          <p className="text-xs opacity-60 mt-1">{majelis.periode}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === LOKASI GEREJA (SOLID BACKGROUND) === */}
      <section id="lokasi" className="py-20 bg-base-200 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl font-bold text-primary mb-2">Lokasi Ibadah</h2>
            <p className="opacity-70">Kami hadir di dua lokasi untuk menjangkau Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {lokasiGereja.map((lokasi, idx) => (
              <div key={idx} className="card bg-base-100 shadow-xl overflow-hidden flex flex-col h-full border border-base-200" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="h-80 w-full bg-gray-200 relative">
                  <iframe src={lokasi.embedSrc} width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" className="absolute inset-0"></iframe>
                </div>
                <div className="card-body">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                        <h3 className="card-title flex items-center gap-2 text-lg mb-2"><MapPin className="text-red-500 shrink-0" /> {lokasi.nama}</h3>
                        <p className="text-base-content/70 text-sm ml-8 leading-relaxed">{lokasi.alamat}</p>
                    </div>
                    <a href={lokasi.externalLink} target="_blank" className="btn btn-outline btn-primary btn-sm shrink-0 ml-8 md:ml-0 group">
                      Buka di Google Maps <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === JADWAL IBADAH (GRID + GLOW) === */}
      <section id="jadwal" className="py-20 relative z-10 overflow-hidden bg-base-100">
        {/* Local Background Jadwal */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Jadwal Ibadah</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-sm opacity-60">Klik jadwal untuk melihat lokasi di peta</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {jadwalIbadah.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => handleJadwalClick(item.mapLink, item.nama)}
                className="card bg-base-100/80 backdrop-blur-sm border border-base-200 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full md:w-[45%] lg:w-[22%] cursor-pointer active:scale-95" 
                data-aos="zoom-in"
              >
                <div className="card-body p-6 text-center relative">
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                      <ExternalLink size={16} />
                  </div>
                  <h3 className="font-bold text-lg text-primary group-hover:scale-110 transition-transform">{item.nama}</h3>
                  <p className="font-semibold text-xl my-2">{item.waktu}</p>
                  
                  {/* FIX TABLET: Hapus truncate, ganti layout agar text bisa turun */}
                  <div className="flex items-start justify-center gap-1.5 text-xs text-base-content/60 bg-base-200 py-2 px-3 rounded-lg mx-auto mt-auto w-full">
                     <MapPin size={14} className="shrink-0 mt-[2px]" />
                     <span className="leading-snug">{item.lokasi}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* CLASS MEETING BANNER */}
          <div className="relative bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-2xl overflow-hidden group transition-all duration-500 ease-out transform-gpu hover:shadow-primary/50 hover:-translate-y-2" data-aos="fade-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3"><Users size={32} className="opacity-90"/> Class Meeting (CM)</h3>
              <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">Persekutuan hangat di rumah jemaat. Diadakan setiap <span className="font-bold text-yellow-300 bg-white/10 px-2 py-0.5 rounded">Kamis, 19.00 WIB</span></p>
              <button onClick={() => setShowCM(true)} className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] active:scale-95">
                  <span>Lihat Lokasi CM Minggu Ini</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === SEKOLAH / PENDIDIKAN (SOLID BACKGROUND) === */}
      <section className="py-16 bg-base-100 border-t border-base-300 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-10">
             <span className="badge badge-secondary mb-2">Naungan Pelayanan</span>
             <h2 className="text-3xl font-bold text-primary">Pendidikan Kristen Berkualitas</h2>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl mx-auto overflow-hidden border border-base-200 group items-center">
            
            <figure className="lg:w-4/12 w-full relative aspect-square bg-base-200 overflow-hidden shrink-0">
               {schoolImages.map((img, index) => (
                 <img 
                    key={index}
                    src={img} 
                    alt={`Suasana TK Slide ${index + 1}`} 
                    className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${index === schoolSlideIndex ? "opacity-100" : "opacity-0"}`}
                 />
               ))}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden z-10 pointer-events-none"></div>
               <div className="absolute bottom-4 left-4 text-white lg:hidden font-bold text-xl drop-shadow-md z-10">PAUD TK PKMI Methodist</div>
            </figure>

            <div className="card-body lg:w-8/12 p-6 md:p-8 w-full">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="card-title text-2xl md:text-3xl font-bold text-gray-800">PAUD TK PKMI Methodist</h3>
                <div className="badge badge-success gap-1 text-white py-3 px-3 font-semibold shadow-sm"><CheckCircle size={14} /> Akreditasi B</div>
              </div>
              <p className="text-base-content/70 mb-6 text-base md:text-lg leading-relaxed">Mewujudkan generasi penerus yang cerdas, berkarakter Kristus, dan berakhlak mulia. Kami menyediakan lingkungan belajar yang aman, menyenangkan, dan penuh kasih di bawah naungan gereja.</p>
              <div className="mt-auto space-y-6">
                <div className="flex items-start gap-3 text-base-content/80 bg-base-200/50 p-3 rounded-lg">
                   <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                   <span className="text-sm font-medium">Jl. Sanggar Kencana XXVII No.42, Bandung</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link 
                    href="https://wa.link/b7zteq" 
                    target="_blank" 
                    className="btn btn-primary text-white shadow-lg shadow-primary/30 flex-1 h-14 text-base"
                  >
                    <Phone size={20} /> Hubungi Sekolah
                  </Link>
                  <Link 
                    href="https://maps.app.goo.gl/fhcGPtAFAjREzpHE7" 
                    target="_blank" 
                    className="btn btn-outline btn-secondary flex-1 group h-14 text-base"
                  >
                    <MapPin size={20} className="group-hover:text-red-500 transition-colors"/> Lihat Lokasi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <FloatingWarta onPrayerClick={() => setShowPrayerModal(true)} />

      {/* === MODAL CLASS MEETING (BG SOLID) === */}
      {showCM && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-base-100 rounded-2xl w-full max-w-4xl shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-base-200 flex justify-between items-center bg-base-200/50">
              <h3 className="text-2xl font-bold text-primary">Jadwal & Lokasi Class Meeting</h3>
              <button onClick={() => setShowCM(false)} className="btn btn-circle btn-sm btn-ghost hover:bg-red-100 hover:text-red-500"><X size={24} /></button>
            </div>
            {/* FIX: Ubah bg-grid-pattern jadi bg-base-100 agar teks tidak buram */}
            <div className="p-8 overflow-y-auto bg-base-100">
              <div className="grid grid-cols-1 gap-4">
                {classMeeting.map((cm, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-base-100/80 border border-base-300 rounded-xl hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 md:w-1/3 mb-2 md:mb-0">
                       <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                       <span className="font-bold text-lg whitespace-nowrap">{cm.nama}</span>
                    </div>
                    <div className="md:w-2/3 flex items-center gap-2 text-base-content/80">
                       <MapPin size={18} className="shrink-0 text-secondary" />
                       <span className="text-base leading-snug">{cm.lokasi}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-4 border-t border-base-200 text-center">
                 <p className="text-sm opacity-60 italic">*Lokasi CM dapat berubah sewaktu-waktu. Hubungi ketua CM masing-masing.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === MODAL POJOK DOA === */}
      {showPrayerModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-base-100 rounded-2xl w-full max-w-md shadow-2xl relative flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <div className="bg-secondary text-white p-6 relative overflow-hidden">
               <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
               <h3 className="text-2xl font-bold flex items-center gap-2"><MessageCircle /> Pojok Doa</h3>
               <p className="text-white/80 text-sm mt-1">Kami siap mendukung Anda dalam doa.</p>
               <button onClick={() => setShowPrayerModal(false)} className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost text-white hover:bg-white/20"><X size={20}/></button>
            </div>
            
            <form onSubmit={handleSendPrayer} className="p-6 flex flex-col gap-4">
               <div>
                 <label className="label font-bold text-sm">Nama Anda (Opsional)</label>
                 <input 
                   type="text" 
                   className="input input-bordered w-full focus:input-secondary" 
                   placeholder="Contoh: Bpk. Budi"
                   value={prayerName}
                   onChange={(e) => setPrayerName(e.target.value)}
                 />
               </div>
               <div>
                 <label className="label font-bold text-sm">Pokok Doa</label>
                 <textarea 
                   className="textarea textarea-bordered w-full h-32 focus:textarea-secondary" 
                   placeholder="Ceritakan apa yang ingin didoakan..."
                   required
                   value={prayerRequest}
                   onChange={(e) => setPrayerRequest(e.target.value)}
                 ></textarea>
               </div>
               <button type="submit" className="btn btn-secondary w-full mt-2 text-white gap-2">
                 <Send size={18} /> Kirim ke WhatsApp Pendeta
               </button>
               <p className="text-xs text-center opacity-60 mt-2">Pesan Anda akan terkirim langsung ke nomor pelayanan gereja.</p>
            </form>
          </div>
        </div>
      )}

      {/* === MODAL KONFIRMASI MAP === */}
      {showMapModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-base-100 rounded-2xl w-full max-w-sm shadow-2xl relative flex flex-col overflow-hidden animate-in zoom-in-95">
            <div className="p-6 text-center">
               <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                 <Map size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">Buka Google Maps?</h3>
               <p className="text-base-content/70 mb-6">
                 Anda akan diarahkan ke lokasi <strong>{selectedJadwalName}</strong> di Google Maps.
               </p>
               <div className="flex gap-3">
                 <button 
                   onClick={() => setShowMapModal(false)} 
                   className="btn btn-ghost flex-1"
                 >
                   Batal
                 </button>
                 <button 
                   onClick={confirmOpenMap} 
                   className="btn btn-primary text-white flex-1"
                 >
                   Ya, Buka
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
      

    </main>
  );
}