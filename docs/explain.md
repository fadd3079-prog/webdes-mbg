# Website MBG Insight

Dokumen ini menjelaskan isi project MBG Insight dengan bahasa sederhana.
Project ini dibuat menggunakan HTML, CSS, dan JavaScript native.

## 1. Gambaran Umum Project

MBG Insight adalah website edukatif tentang Program Makan Bergizi Gratis.
Website ini membahas pengertian MBG, sasaran penerima manfaat, alur program, SPPG, manfaat, dokumentasi, edukasi gizi, standar gizi, tata kelola, dan FAQ.

Project ini masih termasuk website basic.
Tidak ada framework seperti Bootstrap, Tailwind, React, atau library JavaScript tambahan.

## 2. Struktur File Project

File utama:

- `index.html`
  Berisi struktur halaman website.

- `style.css`
  Berisi semua style, warna, layout, card, gambar, header, footer, dan tombol.

- `script.js`
  Berisi JavaScript sederhana untuk alert, tombol kembali ke atas, dan FAQ.

- `assets`
  Berisi gambar dan logo yang dipakai website.

- `docs`
  Berisi dokumentasi project dalam format Markdown.

## 3. Asset Gambar

Folder `assets` berisi gambar yang sudah dipakai di website.

Daftar gambar:

- `logombg.png`
- `dapur.webp`
- `dapur1.webp`
- `dapur2.webp`
- `distribusi.webp`
- `mbg.webp`
- `mobilmbg.webp`
- `mobilmbg1.webp`
- `prabowo.webp`
- `prabowo1.jpg`
- `prabowo2.webp`
- `sppg.webp`

Nama file lama dengan awalan `compressO-` sudah direname agar lebih rapi dan aman dipakai di HTML.

## 4. Penjelasan index.html

File `index.html` adalah file utama yang dibuka browser.

### Bagian head

Bagian `<head>` berisi charset, title, favicon, dan link CSS.

Contoh:

```html
<meta charset="UTF-8">
<title>MBG Insight</title>
<link rel="icon" href="assets/logombg.png">
<link rel="stylesheet" href="style.css" />
```

`logombg.png` dipakai sebagai favicon agar logo muncul di tab browser.

### Header dan Navbar

Header memakai tag:

```html
<header>
    <nav>
        <ul>
            ...
        </ul>
    </nav>
</header>
```

Di bagian paling kiri navbar ada logo kecil:

```html
<a href="#home" class="header-logo">
    <img src="assets/logombg.png" alt="Logo MBG">
</a>
```

Setelah logo, ada menu navigasi seperti Home, Tentang, Sasaran, Alur, SPPG, Manfaat, Dokumentasi, Gizi, dan FAQ.

### Section Home

Section Home adalah bagian pembuka website.
Bagian ini memakai background gambar:

```css
background-image: linear-gradient(...), url("assets/prabowo.webp");
```

Overlay gelap tetap dipakai supaya teks putih mudah dibaca.

Di hero juga ada logo kecil:

```html
<img src="assets/logombg.png" alt="Logo MBG Insight" class="logombg">
```

### Section Tentang

Section Tentang menjelaskan apa itu Program MBG.
Strukturnya sederhana: judul, paragraf, dan list poin dalam card kecil.

### Section Sasaran

Section Sasaran menggunakan tabel HTML.
Tabel ini menjelaskan kelompok penerima manfaat seperti peserta didik, santri, anak usia dini, ibu hamil, dan ibu menyusui.

### Section Alur

Section Alur menggunakan flexbox card.
Setiap card berisi:

- gambar
- judul alur
- paragraf pendek

Contoh gambar di card:

```html
<img src="assets/mbg.webp" alt="Foto MBG">
```

Card alur tetap menggunakan struktur sederhana:

```html
<div class="card-alur">
    <div class="card">
        <img src="assets/mbg.webp" alt="Foto MBG">
        <h3>01. Identifikasi Sasaran</h3>
        <p>...</p>
    </div>
</div>
```

### Section SPPG

Section SPPG menjelaskan Satuan Pelayanan Pemenuhan Gizi.
Card SPPG juga diberi gambar agar tampilan tidak terlalu kosong.

Card SPPG tetap memakai flexbox sederhana:

```html
<div class="card-sppg">
    <div class="card">
        <img src="assets/dapur2.webp" alt="Foto layanan MBG">
        <h3>Bahan Pangan</h3>
        <p>...</p>
    </div>
</div>
```

### Section Manfaat

Section Manfaat berisi beberapa card seperti Kesehatan Anak, Konsentrasi Belajar, Dukungan Keluarga, dan lainnya.

Setiap card manfaat juga diberi gambar.
Gambar tidak harus selalu akurat dengan deskripsi, yang penting berasal dari folder `assets` dan masih berhubungan dengan MBG.

### Section Dokumentasi

Section Dokumentasi sekarang dibuat seperti galeri.
Tidak ada paragraf deskripsi section dan tidak ada teks di dalam card.

Strukturnya:

```html
<section id="dokumentasi" class="dokumentasi">
    <div class="container">
        <h2>Dokumentasi Pelaksanaan MBG</h2>

        <div class="card-dokumentasi">
            <div class="card">
                <img src="assets/dapur.webp" alt="Dokumentasi MBG" width="250">
            </div>
        </div>
    </div>
</section>
```

Foto yang sudah dimasukkan ke dokumentasi:

- `dapur.webp`
- `dapur1.webp`
- `dapur2.webp`
- `distribusi.webp`
- `mbg.webp`
- `mobilmbg.webp`
- `mobilmbg1.webp`
- `prabowo.webp`
- `prabowo1.jpg`
- `prabowo2.webp`
- `sppg.webp`

### Section Gizi

Section Gizi berisi edukasi sederhana tentang komponen makanan bergizi.
Card gizi menjelaskan karbohidrat, protein, sayur, buah, dan air mineral.

### Section Standar Gizi

Section Standar Gizi memakai tabel HTML.
Isinya menjelaskan standar sekali makan dan contoh porsi makanan.

### Section Tata Kelola

Section Tata Kelola menjelaskan keamanan pangan, kualitas bahan, ketepatan sasaran, ketepatan waktu, transparansi informasi, dan evaluasi.

### Section FAQ

Section FAQ berisi pertanyaan dan jawaban.
Jawaban FAQ dibuka memakai function `bukaFaq()` dari `script.js`.

### Footer

Footer berisi:

- judul MBG Insight
- deskripsi singkat
- link navigasi
- link GitHub
- tombol Info Website
- copyright

Tombol kembali ke atas tetap berada di HTML footer, tetapi tampil fixed di kanan bawah.

## 5. Penjelasan style.css

File `style.css` mengatur tampilan semua bagian website.

### Reset CSS

Bagian awal CSS merapikan margin, padding, box sizing, dan font.

```css
*,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}
```

### Header

Header dibuat fixed agar tetap berada di atas layar.

```css
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
```

Logo header memakai class:

```css
.header-logo img {
    width: 20px;
    object-fit: contain;
}
```

### Card Gambar

Gambar pada card alur, SPPG, dan manfaat diatur bersama.

```css
.card-alur img,
.card-sppg img,
.card-manfaat img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}
```

CSS ini membuat semua gambar card punya ukuran yang sama.

### Dokumentasi

Dokumentasi memakai flexbox sederhana.

```css
.card-dokumentasi {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}
```

Gambar dokumentasi:

```css
.card-dokumentasi img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 8px;
}
```

Karena card dokumentasi hanya berisi gambar, tinggi card dibuat lebih pendek.

### Tombol Kembali ke Atas

Tombol kembali ke atas memakai class `tombol-atas`.
Tombol ini fixed di kanan bawah dan berbentuk lingkaran.

```css
.tombol-atas {
    position: fixed;
    right: 25px;
    bottom: 25px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
```

Isi tombol hanya panah atas:

```html
&#8593;
```

## 6. Penjelasan script.js

File `script.js` tidak ditambah fitur baru.
Isinya tetap sederhana.

### tampilPesan()

Function ini menampilkan alert ketika tombol Info Website diklik.

```js
function tampilPesan() {
    alert("web design B - MBG");
}
```

### kembaliKeAtas()

Function ini membuat halaman kembali ke posisi paling atas.

```js
function kembaliKeAtas() {
    window.scrollTo(0, 0);
}
```

Tombolnya sekarang fixed di kanan bawah, tetapi function JavaScript-nya tetap sama.

### bukaFaq()

Function ini dipakai untuk membuka atau menutup jawaban FAQ.

## 7. Catatan Desain

Desain website tetap basic:

- HTML biasa
- CSS biasa
- JavaScript native
- flexbox sederhana
- tanpa framework
- tanpa animasi rumit
- tanpa layout professional yang terlalu kompleks

Gambar dimasukkan ke dalam card agar website tidak terlalu flat.
Section dokumentasi menjadi tempat utama kumpulan foto.

## 8. Kesimpulan

MBG Insight adalah website edukatif sederhana yang dibuat dengan HTML, CSS, dan JavaScript native.
Website ini sudah memakai logo di header dan tab browser, gambar pada card, galeri dokumentasi, serta tombol kembali ke atas fixed di kanan bawah.
