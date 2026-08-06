# Portfolio — Frontend Developer

Website portfolio bergaya `tajmirul.site`, dibangun dengan **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**. Background partikel dibuat manual dengan `<canvas>` (tanpa library berat), lengkap dengan efek magnet mengikuti kursor.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Struktur

```
app/
  layout.tsx        # font (Sora, Inter, JetBrains Mono) + metadata
  page.tsx           # merangkai semua section
  globals.css        # token warna, smooth scroll, scrollbar, noise overlay
components/
  Navbar.tsx          # navbar sticky + active-section indicator + menu mobile
  Hero.tsx            # hero + partikel background
  ParticlesBackground.tsx  # canvas partikel custom (signature element)
  About.tsx
  Stack.tsx           # tech stack per kategori
  Experience.tsx      # timeline pengalaman kerja
  Projects.tsx         # grid proyek dengan hover reveal
  Contact.tsx          # CTA banner
  Footer.tsx
  ScrollProgress.tsx   # progress bar scroll di atas layar
lib/
  data.ts             # SEMUA konten (nama, email, stack, pengalaman, proyek) — edit di sini
```

## Yang perlu kamu sesuaikan

1. **`lib/data.ts`** — ganti nama, email, tautan sosial, pengalaman kerja, dan daftar proyek dengan data kamu sendiri.
2. **Foto profil** — di `components/About.tsx`, bagian "This is me" saat ini pakai placeholder inisial. Ganti dengan `<Image />` dari `next/image` kalau sudah punya foto.
3. **Thumbnail proyek** — di `components/Projects.tsx` kartu proyek memakai gradient sebagai placeholder. Kamu bisa mengganti dengan gambar asli.
4. **Warna aksen** — ada di `tailwind.config.ts` (`accent` = ungu, `mint` = hijau toska). Ganti sesuai selera.

## Catatan desain

- **Smooth scroll**: `scroll-behavior: smooth` di CSS + reveal animation berbasis `whileInView` dari Framer Motion saat elemen masuk viewport.
- **Partikel live**: canvas custom di `ParticlesBackground.tsx`, jumlah partikel menyesuaikan ukuran layar, otomatis nonaktif animasinya kalau user mengaktifkan "reduce motion".
- **Responsive**: breakpoint mobile-first, navbar berubah jadi menu dropdown di bawah `md`, grid proyek 1 kolom di mobile → 2 kolom di ≥`sm`.
