export type Project = {
  id: string
  title: string
  label: string
  summary: string
  details?: readonly string[]
  stack: readonly string[]
  featured: boolean
  badge?: string
}

export const portfolio = {
  profile: {
    name: "Afghan Almufqi Yournawan",
    role: "Web & Mobile Software Developer (Laravel & Flutter)",
    location: "Pangkalpinang, Bangka Belitung, Indonesia",
    status: "Available for Software Developer Roles",
    intro: "Lulusan D4 Rekayasa Perangkat Lunak Politeknik Manufaktur Negeri Bangka Belitung yang berfokus pada pengembangan aplikasi web dan mobile menggunakan Laravel, PHP, dan Flutter—mulai dari perancangan database relasional, REST API, hingga antarmuka pengguna yang responsif.",
  },
  contact: {
    email: "kakarotuchiha5@gmail.com",
    phone: "+62 895-4173-80105",
    whatsapp: "https://wa.me/62895417380105",
    linkedin: "https://www.linkedin.com/in/apgan11/",
    github: "https://github.com/aligan11",
  },
  skills: [
    { title: "Backend & Database", items: ["PHP", "Laravel", "SQL", "MySQL", "REST API", "SMTP / Gmail API"] },
    { title: "Frontend & Mobile", items: ["Flutter", "Dart", "Android Studio", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] },
  ],
  certifications: ["Junior Mobile Programmer (BNSP - LSP P1)", "Junior Web Developer (Digital Talent Scholarship KOMINFO)"],
  projects: [
    { id: "smart-parking", title: "Integrated Smart Parking System", label: "Featured Case Study", badge: "Terdaftar HKI / Hak Cipta", summary: "Sistem monitoring parkir terintegrasi yang terdiri dari aplikasi mobile untuk pemindaian QR code dan top-up saldo, serta backend admin dan REST API.", details: ["Aplikasi mobile Flutter untuk pemindaian QR code dan top-up saldo.", "Backend admin dan REST API menggunakan Laravel serta MySQL.", "Integrasi payment gateway, tarif dinamis, dan rekapitulasi laporan."], stack: ["Flutter", "Dart", "Laravel", "PHP", "MySQL"], featured: true },
    { id: "spbe", title: "Sistem Informasi Manajemen & Monitoring SPBE", label: "Featured Case Study", summary: "Prototipe aplikasi web tata kelola SPBE dengan alur kerja multi-role, database relasional terintegrasi, dan otomatisasi notifikasi email.", details: ["Alur kerja multi-role untuk Pemohon, Pimpinan, dan Petugas.", "Database relasional terintegrasi dengan lebih dari 10 tabel.", "Otomatisasi notifikasi email untuk mempercepat tindak lanjut berita acara."], stack: ["Laravel", "PHP", "Tailwind CSS", "JavaScript", "MySQL", "SMTP/Gmail API"], featured: true },
    { id: "kebun", title: "Sistem Informasi Manajemen Kebun", label: "Freelance Project", summary: "Aplikasi web berbasis Laravel untuk pencatatan operasional perkebunan, pemantauan hasil panen, dan pengelolaan aktivitas harian.", stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"], featured: false },
    { id: "kamus-daerah", title: "Aplikasi Kamus Bahasa Daerah", label: "Web Dictionary", summary: "Aplikasi kamus digital berbasis web dengan struktur database relasional dan fitur pencarian kosakata instan.", stack: ["Laravel", "PHP", "SQL", "JavaScript", "Tailwind CSS"], featured: false },
  ] satisfies Project[],
  timeline: [
    { type: "experience", period: "Feb 2026 – Jun 2026", title: "Peserta Magang Pengembang Web", organization: "Kominfo Provinsi Bangka Belitung", description: "Mengembangkan prototipe aplikasi web SPBE berbasis Laravel, Tailwind CSS, dan MySQL dengan sistem notifikasi email otomatis serta alur kerja multi-role." },
    { type: "experience", period: "Agu 2024 – Jan 2025", title: "Magang Pengembang Aplikasi Android", organization: "PLN UIW Bangka Belitung", description: "Merancang aplikasi mobile monitoring jadwal stakeholder (SMASH) menggunakan Android Studio beserta backend PHP dan MySQL." },
    { type: "education", period: "2022 – 2026", title: "D4 Rekayasa Perangkat Lunak", organization: "Politeknik Manufaktur Negeri Bangka Belitung", description: "Pendidikan vokasi di bidang rekayasa perangkat lunak." },
  ],
} as const
