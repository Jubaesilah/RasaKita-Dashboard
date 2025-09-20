# RasaKita Monorepo

Repositori ini berisi dua aplikasi utama:

- **RasaKita**: Aplikasi React (Vite) klasik
- **rasa-kita-next**: Aplikasi Next.js (App Router)

---

## Struktur Folder

```
Tugas-WSP-React-Next/
├── RasaKita/                # Project React (Vite)
│   ├── src/
│   │   ├── components/      # Komponen UI (Button, Input, Layout, dsb)
│   │   ├── pages/           # Halaman (LoginPage.jsx, DashboardPage.jsx)
│   │   ├── assets/          # Gambar/icon lokal
│   │   ├── main.jsx         # Entry point React
│   │   └── index.css        # Global CSS (Tailwind)
│   ├── public/              # File statis (favicon, logo, dsb)
│   ├── index.html           # HTML utama (Vite)
│   ├── package.json         # Konfigurasi npm
│   └── ...
│
├── rasa-kita-next/          # Project Next.js (App Router)
│   ├── src/
│   │   ├── app/             # Routing Next.js (login, dashboard, layout, dsb)
│   │   ├── components/      # Komponen UI (Button, Input, Layout, dsb)
│   │   ├── pages/           # Komponen halaman (DashboardPage.jsx, dsb)
│   │   └── ...
│   ├── public/              # File statis (favicon, logo, dsb)
│   ├── package.json         # Konfigurasi npm
│   └── ...
```

---

## Penjelasan Folder Utama

### **RasaKita (Vite + React)**
- `src/components/`  : Komponen UI (Button, Input, Layout, dsb)
- `src/pages/`       : Halaman utama (LoginPage.jsx, DashboardPage.jsx)
- `src/assets/`      : Gambar/icon lokal
- `public/`          : File statis (favicon, logo, dsb)
- `main.jsx`         : Entry point aplikasi React
- `index.css`        : Global CSS (Tailwind)

### **rasa-kita-next (Next.js)**
- `src/app/`         : Routing berbasis file (App Router Next.js)
    - `login/page.js`      : Halaman login
    - `dashboard/page.js`  : Halaman dashboard
    - `layout.js`          : Layout global
    - `globals.css`        : Global CSS (Tailwind)
- `src/components/`  : Komponen UI (Button, Input, Layout, dsb)
- `src/pages/`       : Komponen halaman (DashboardPage.jsx, dsb)
- `public/`          : File statis (favicon, logo, dsb)

---

## Perbedaan Utama
- **RasaKita** menggunakan Vite + React Router (SPA klasik)
- **rasa-kita-next** menggunakan Next.js App Router (routing otomatis, SSR/SSG support)
- Struktur komponen dan halaman mirip, sehingga mudah migrasi/porting

---

## Cara Menjalankan

### RasaKita (Vite)
```bash
cd RasaKita
npm install
npm run dev
```

### rasa-kita-next (Next.js)
```bash
cd rasa-kita-next
npm install
npm run dev
```

---

## Catatan
- Semua styling menggunakan Tailwind CSS
- Komponen utama (Button, Input, dsb) reusable di kedua project
- Dashboard sudah menggunakan chart (Recharts) dan desain modern

