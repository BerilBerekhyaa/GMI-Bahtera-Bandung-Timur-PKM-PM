// src/app/data.js

export const lokasiGereja = [
  {
    nama: "GMI Bahtera - Lokasi 1",
    alamat: "Jl. Atlas Tengah No.2, Babakan Surabaya, Kec. Kiaracondong, Kota Bandung, Jawa Barat",
    // Embed map sesuai request
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794.2203081887955!2d107.64547874962864!3d-6.914125229006683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c277a0b22f%3A0xbc3e72c8aaec9db!2sGereja%20Methodist%20Indonesia%20Bahtera%20Bandung%20Timur!5e0!3m2!1sen!2sid!4v1765816204520!5m2!1sen!2sid", 
    // Link untuk tombol "Buka di Google Maps" (Placeholder ke search query alamat)
    externalLink: "https://maps.app.goo.gl/zLcwLSvRtFDFFojBA"
  },
  {
    nama: "GMI Bahtera - Lokasi 2",
    alamat: "Jl. Sanggar Kencana XXVII No.42, Jatisari, Kec. Buahbatu, Kota Bandung, Jawa Barat",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.640693077421!2d107.66158717399762!3d-6.9334769930664075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8039bd964cd%3A0x8432d6168d14fba7!2sPAUD%20TK%20KRISTEN%20PKMI%20Methodist%20Bandung!5e0!3m2!1sen!2sid!4v1765816241352!5m2!1sen!2sid",
    externalLink: "https://maps.app.goo.gl/aRCsm45f127XkuXd8"
  }
];

export const jadwalIbadah = [
  { nama: "Ibadah Umum 1", waktu: "Minggu, 08.00 WIB", lokasi: "Jl. Atlas Tengah No.2",
    mapLink: "https://maps.app.goo.gl/zLcwLSvRtFDFFojBA" },
  { nama: "Ibadah Umum 2", waktu: "Minggu, 10.00 WIB", lokasi: "Jl. Atlas Tengah No.2",
    mapLink: "https://maps.app.goo.gl/zLcwLSvRtFDFFojBA" },
  { nama: "Ibadah Umum 3", waktu: "Minggu, 16.30 WIB", lokasi: "Jl. Sanggar Kencana XXVII No.42",
    mapLink: "https://maps.app.goo.gl/aRCsm45f127XkuXd8" },
  { nama: "Sekolah Minggu", waktu: "Minggu, 10.00 WIB", lokasi: "Jl. Atlas Tengah No.2",
    mapLink: "https://maps.app.goo.gl/zLcwLSvRtFDFFojBA" },
  { nama: "PRMI (Remaja)", waktu: "Minggu, 10.00 WIB", lokasi: "Jl. Atlas Tengah No.2",
    mapLink: "https://maps.app.goo.gl/zLcwLSvRtFDFFojBA" },
  { nama: "P3MI (Pemuda)", waktu: "Sabtu, 18.30 WIB", lokasi: "Jl. Sanggar Kencana XXVII No.42",
    mapLink: "https://maps.app.goo.gl/aRCsm45f127XkuXd8" },
  { nama: "PWMI (Wanita)", waktu: "Jumat, 17.00 WIB", lokasi: "Jl. Atlas Tengah No.2",
    mapLink: "https://maps.app.goo.gl/zLcwLSvRtFDFFojBA" },
  { nama: "P2MI (Pria)", waktu: "Sabtu, 18.00 WIB", lokasi: "Jl. Sanggar Kencana XXVII No.42",
    mapLink: "https://maps.app.goo.gl/aRCsm45f127XkuXd8" },
  { nama: "Usindah (Lansia)", waktu: "Minggu, 12.00 WIB", lokasi: "Jl. Atlas Tengah No.2",
    mapLink: "https://maps.app.goo.gl/zLcwLSvRtFDFFojBA" },
  { nama: "Doa Malam (Selasa)", waktu: "Selasa, 19.00 WIB", lokasi: "Jl. Sanggar Kencana XXVII No.42",
    mapLink: "https://maps.app.goo.gl/aRCsm45f127XkuXd8" },
];

export const classMeeting = [
  { nama: "CM ABRAHAM", lokasi: "Rumah Kel Bpk. A (Contoh)" },
  { nama: "CM BARTOLOMEUS", lokasi: "Rumah Kel Bpk. B (Contoh)" },
  { nama: "CM DANIEL", lokasi: "Gereja (Contoh)" },
  { nama: "CM ELIA", lokasi: "Rumah Ibu. C (Contoh)" },
  { nama: "CM FILIPUS", lokasi: "Rumah Kel Ibu. P (Contoh)" },
  { nama: "CM GAMALIEL", lokasi: "Rumah Kel Bpk. D (Contoh)" },
  { nama: "CM HIZKIA", lokasi: "Rumah Kel Bpk. E (Contoh)" },
  { nama: "CM ISHAK (P3MI)", lokasi: "Rumah Kak A (Contoh)" },
];

export const majelisGereja = [
  {
    id: 1,
    nama: "LS. Dokmen Lubis",
    jabatan: "Lay Leader",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/DokmenLubis.jpg", 
  },
  {
    id: 2,
    nama: "Mariam Sihombing",
    jabatan: "Bendahara",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/MariamSihombing.jpg",
  },
  {
    id: 3,
    nama: "Dumaria Simanungkalit",
    jabatan: "Komisi Keanggotaan dan Evangelisasi",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/DumariaSimanungkalit.jpg",
  },
  {
    id: 4,
    nama: "Ai Permanasari",
    jabatan: "Komisi Pendidikan Agama Kristen",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/AiPermanasari.jpg",
  },
  {
    id: 5,
    nama: "Metty Elfrida Hutahaean",
    jabatan: "Komisi Penatalayanan dan Keuangan",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/MettyHutahaean.jpg",
  },
  {
    id: 6,
    nama: "LS. Flora Siagian",
    jabatan: "Komisi Pekabaran Injil/Misi",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/FloraSiagian.jpg",
  },
  {
    id: 7,
    nama: "Sondang Pakpahan",
    jabatan: "Komisi Diakonia Sosial",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/SondangPakpahan.jpg",
  },
  {
    id: 8,
    nama: "Lisbeth Simatupang",
    jabatan: "Komisi Penyantun Pendidikan",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/LisbethSimatupang.jpg",
  },
  {
    id: 9,
    nama: "LS. Hotmaida Manulang",
    jabatan: "Panitia Kebaktian",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/HotmaidaManulang.jpg",
  },
  {
    id: 10,         
    nama: "Aris Woentoni Sitorus",
    jabatan: "Panitia Pemeliharaan Harta Benda",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/ArisSitorus.jpg",
  },
  {
    id: 11,
    nama: "Markus Malau",
    jabatan: "Panitia Perayaan",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/MarkusMalau.jpg",
  },
  {
    id: 12,
    nama: "Ester Simarmata",
    jabatan: "Ketua Sekolah Minggu",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/EsterSimarmata.jpg",
  },
  {
    id: 13,
    nama: "Jimmy Hasugian",
    jabatan: "Ketua P2MI",
    periode: "Oktober 2025 - Oktober 2027",
    foto: "/img/majelis/JimmyHasugian.jpg",
  },
  {
    id: 14,
    nama: "Rita Simangunsong",
    jabatan: "Ketua PWMI",
    periode: "Oktober 2025 - Oktober 2027",
    foto: "/img/majelis/RitaSimangunsong.jpg",
  },
  {
    id: 15,
    nama: "Devita Magdalena Lubis",
    jabatan: "Ketua P3MI",
    periode: "Oktober 2025 - Oktober 2027",
    foto: "/img/majelis/DevitaLubis.jpg",
  },
  {
    id: 16,
    nama: "Tiurlan Napitupulu",
    jabatan: "Koordinator Usindah",
    periode: "November 2024 - November 2026",
    foto: "/img/majelis/Tiurlan.jpg",
  },
];