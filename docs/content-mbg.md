# MBG Insight - Konten Website

Dokumen ini berisi ringkasan konten yang digunakan di website MBG Insight.
Website dibuat sebagai project HTML, CSS, dan JavaScript native sederhana.

## Nama Website

MBG Insight

## Logo dan Title

- Logo website memakai `assets/logombg.png`.
- Logo kecil ditampilkan di header sebelah kiri menu Home.
- Logo juga dipakai sebagai favicon atau logo kecil pada tab browser.

Kode favicon di `index.html`:

```html
<link rel="icon" href="assets/logombg.png">
```

## Navigasi

Menu utama:

- Home
- Tentang
- Sasaran
- Alur
- SPPG
- Manfaat
- Dokumentasi
- Gizi
- FAQ

Di header juga ada link GitHub berbentuk icon.

## Hero Section

Judul utama:

```text
Gizi Hari Ini,
Generasi Kuat Esok Hari
```

Deskripsi:

```text
MBG Insight menyajikan informasi Program Makan Bergizi Gratis secara ringkas, visual, dan mudah dipahami. Website ini membantu pengguna mengenal tujuan, sasaran, alur layanan, peran SPPG, dan dampak MBG bagi kesehatan serta pendidikan.
```

Background hero memakai:

```text
assets/prabowo.webp
```

Logo kecil di hero tetap memakai:

```text
assets/logombg.png
```

## Tentang MBG

Section ini menjelaskan pengertian Program Makan Bergizi Gratis.

Isi utamanya:

```text
Program Makan Bergizi Gratis atau MBG adalah program pemenuhan gizi nasional yang ditujukan untuk mendukung kesehatan, tumbuh kembang, dan kesiapan belajar penerima manfaat.
```

Poin pendukung:

- Pemenuhan Gizi
- Dukungan Pendidikan
- Investasi SDM

## Sasaran Penerima Manfaat

Sasaran penerima manfaat ditampilkan dalam bentuk tabel sederhana.

Kelompok sasaran:

- Peserta Didik
- Santri
- Anak Usia Dini dan Balita
- Ibu Hamil
- Ibu Menyusui

## Alur Program MBG

Section alur memakai flexbox card. Setiap card berisi gambar, judul, dan teks pendek.

Isi card:

1. Identifikasi Sasaran
2. Perencanaan Menu
3. Pengadaan Bahan Pangan
4. Pengolahan di SPPG
5. Distribusi
6. Edukasi dan Pemantauan

Beberapa gambar yang dipakai di card alur:

- `assets/mbg.webp`
- `assets/dapur.webp`
- `assets/dapur1.webp`
- `assets/sppg.webp`
- `assets/mobilmbg.webp`
- `assets/distribusi.webp`

## SPPG

Section SPPG menjelaskan Satuan Pelayanan Pemenuhan Gizi.

Card SPPG:

- Bahan Pangan
- Pengolahan
- Distribusi
- Pengawasan

Card ini juga memakai foto dari folder `assets`, seperti:

- `assets/dapur2.webp`
- `assets/dapur.webp`
- `assets/mobilmbg1.webp`
- `assets/sppg.webp`

## Manfaat

Section manfaat menjelaskan dampak MBG secara sederhana.

Card manfaat:

- Kesehatan Anak
- Konsentrasi Belajar
- Dukungan Keluarga
- Pencegahan Masalah Gizi
- Ekonomi Lokal
- Investasi SDM

Card manfaat juga diberi gambar agar tampilan tidak terlalu kosong.

## Dokumentasi Pelaksanaan MBG

Section dokumentasi sekarang dibuat sebagai galeri gambar.
Bagian ini tidak memakai paragraf deskripsi dan tidak memakai judul/deskripsi di dalam card.

Isi dokumentasi hanya kumpulan foto dalam flexbox.

Foto yang digunakan:

- `assets/dapur.webp`
- `assets/dapur1.webp`
- `assets/dapur2.webp`
- `assets/distribusi.webp`
- `assets/mbg.webp`
- `assets/mobilmbg.webp`
- `assets/mobilmbg1.webp`
- `assets/prabowo.webp`
- `assets/prabowo1.jpg`
- `assets/prabowo2.webp`
- `assets/sppg.webp`

Catatan:

- `assets/logombg.png` tidak dimasukkan ke dokumentasi karena dipakai sebagai logo.
- Jika ada foto baru di folder `assets`, foto tersebut bisa ditambahkan ke dalam `.card-dokumentasi`.

## Gizi

Section gizi berisi edukasi sederhana tentang komponen makanan bergizi.

Card gizi:

- Karbohidrat
- Protein
- Sayur
- Buah
- Air Mineral

## Standar Gizi

Section standar gizi berisi informasi tabel mengenai standar sekali makan dan contoh porsi makanan.
Section ini memakai HTML table sederhana.

## Tata Kelola

Section tata kelola menjelaskan bahwa program berskala besar perlu memperhatikan:

- Keamanan Pangan
- Kualitas Bahan
- Ketepatan Sasaran
- Ketepatan Waktu
- Transparansi Informasi
- Evaluasi Berkelanjutan

## FAQ

FAQ memakai JavaScript sederhana untuk membuka dan menutup jawaban.

Contoh topik FAQ:

- Apa itu MBG?
- Siapa sasaran penerima manfaat MBG?
- Apa itu SPPG?
- Apakah website ini resmi pemerintah?
- Apakah data website real-time?

## Footer

Footer berisi:

- Nama website
- Deskripsi singkat
- Link navigasi
- Link GitHub
- Tombol Info Website
- Copyright

Tombol kembali ke atas tetap ada, tetapi tampil sebagai tombol lingkaran fixed di kanan bawah dengan icon panah ke atas.

## Tombol Kembali ke Atas

Tombol kembali ke atas memakai fungsi JavaScript lama:

```html
<button onclick="kembaliKeAtas()" class="tombol-js tombol-atas" aria-label="Kembali ke atas">&#8593;</button>
```

CSS-nya dibuat sederhana:

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

## Catatan Asset Gambar

Nama file gambar yang sudah dirapikan:

- `dapur.webp`
- `dapur1.webp`
- `dapur2.webp`
- `distribusi.webp`
- `mbg.webp`
- `mobilmbg.webp`
- `mobilmbg1.webp`
- `prabowo.webp`
- `prabowo2.webp`
- `sppg.webp`

File lain yang masih ada:

- `prabowo1.jpg`
- `logombg.png`

Project tetap dibuat sebagai website basic, tanpa framework dan tanpa library tambahan.
