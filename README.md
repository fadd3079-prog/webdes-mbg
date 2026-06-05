# MBG Insight

MBG Insight adalah website edukatif sederhana tentang Program Makan Bergizi Gratis. Website ini dibuat sebagai project tugas kuliah menggunakan HTML, CSS, dan JavaScript native.

Website ini menyajikan informasi MBG secara ringkas, mulai dari pengertian program, sasaran penerima manfaat, alur pelaksanaan, peran SPPG, manfaat, dokumentasi, edukasi gizi, standar gizi, tata kelola, sampai FAQ.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript native

Project ini tidak menggunakan framework seperti Bootstrap, Tailwind, React, atau library frontend lain.

## Struktur Project

```text
webdes-mbg/
|-- assets/
|   |-- logombg.png
|   |-- dapur.webp
|   |-- dapur1.webp
|   |-- dapur2.webp
|   |-- distribusi.webp
|   |-- mbg (1).jpg
|   |-- mbg (2).jpg
|   |-- mbg (3).jpg
|   |-- mbg (4).jpg
|   |-- mbg.webp
|   |-- mobilmbg.webp
|   |-- mobilmbg1.webp
|   |-- prabowo.webp
|   |-- prabowo1.jpg
|   |-- prabowo2.webp
|   `-- sppg.webp
|-- docs/
|   |-- content-mbg.md
|   |-- explain.md
|   `-- prd.md
|-- index.html
|-- style.css
|-- script.js
|-- index.js
|-- package.json
|-- package-lock.json
`-- README.md
```

## Penjelasan File

- `index.html`

  File utama yang berisi struktur halaman website, mulai dari header, navbar, section home, tentang, sasaran, alur, SPPG, manfaat, dokumentasi, gizi, standar gizi, tata kelola, FAQ, dan footer.

- `style.css`

  File untuk mengatur tampilan website, seperti warna, background section, card, gambar, tombol, tabel, header fixed, footer, dan tombol kembali ke atas.

- `script.js`

  File JavaScript utama untuk interaksi sederhana, seperti tombol info website, tombol kembali ke atas, dan FAQ yang bisa dibuka atau ditutup.

- `assets`

  Folder untuk menyimpan logo dan foto yang digunakan di website.

- `docs`

  Folder dokumentasi project. Isinya ada ringkasan konten, penjelasan kode, dan PRD sederhana.

## Fitur Website

- Header fixed dengan logo MBG di sebelah kiri menu Home.
- Logo MBG sebagai favicon di tab browser.
- Navbar untuk berpindah ke section tertentu.
- Hero section dengan background gambar dan overlay gelap.
- Informasi tentang Program MBG.
- Tabel sasaran penerima manfaat.
- Card alur program dengan gambar.
- Card penjelasan SPPG dengan gambar.
- Card manfaat program dengan gambar.
- Section dokumentasi berbentuk galeri foto.
- Edukasi gizi sederhana.
- Section standar gizi dengan tabel.
- Section tata kelola.
- FAQ interaktif dengan JavaScript.
- Footer dengan link navigasi dan tombol Info Website.
- Tombol kembali ke atas fixed di kanan bawah berbentuk lingkaran.

## Asset Gambar

Logo:

- `logombg.png`

Foto:

- `dapur.webp`
- `dapur1.webp`
- `dapur2.webp`
- `distribusi.webp`
- `mbg (1).jpg`
- `mbg (2).jpg`
- `mbg (3).jpg`
- `mbg (4).jpg`
- `mbg.webp`
- `mobilmbg.webp`
- `mobilmbg1.webp`
- `prabowo.webp`
- `prabowo1.jpg`
- `prabowo2.webp`
- `sppg.webp`

Jika ada foto baru di folder `assets`, foto dapat ditambahkan ke section dokumentasi di `index.html`.

## Cara Menjalankan

Website ini dapat dijalankan langsung di browser.

1. Buka folder project.
2. Klik dua kali file `index.html`.
3. Website akan terbuka di browser.

Tidak perlu menjalankan server atau install dependency untuk melihat website utama.

## Catatan

Website ini dibuat untuk kebutuhan pembelajaran HTML, CSS, dan JavaScript dasar. Isi website bersifat edukatif dan bukan kanal resmi pemerintah.
