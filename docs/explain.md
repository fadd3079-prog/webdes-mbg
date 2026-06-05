#Website MBG Insight

## 1. Gambaran Umum Project

Project ini adalah website edukatif bernama **MBG Insight**. Website ini membahas informasi dasar tentang Program Makan Bergizi Gratis, mulai dari pengertian program, sasaran penerima manfaat, alur pelaksanaan, peran SPPG, manfaat, dokumentasi, edukasi gizi, tata kelola, sampai pertanyaan umum.

Website ini dibuat menggunakan tiga teknologi dasar frontend, yaitu **HTML**, **CSS**, dan **JavaScript native**. HTML dipakai untuk menyusun struktur halaman, CSS dipakai untuk mengatur tampilan dan warna, sedangkan JavaScript dipakai untuk memberi interaksi sederhana seperti tombol alert, kembali ke atas, dan membuka jawaban FAQ.

Secara konsep, website ini masih termasuk project basic. Struktur kodenya belum memakai framework seperti Bootstrap atau Tailwind. Semua bagian dibuat langsung menggunakan tag HTML, class CSS, dan function JavaScript sederhana.

## 2. Struktur File Project

Project ini memiliki beberapa file dan folder utama:

- `index.html`

  File ini adalah halaman utama website. Di dalamnya terdapat struktur lengkap website, mulai dari header, navbar, section home, section informasi MBG, FAQ, sampai footer.

- `style.css`

  File ini digunakan untuk mengatur tampilan website. Semua warna, ukuran, jarak, card, background section, tombol, header, footer, dan layout sederhana diatur di file ini.

- `script.js`

  File ini berisi JavaScript sederhana. Fungsinya untuk memastikan JavaScript aktif, menampilkan pesan alert, mengembalikan halaman ke atas, dan membuka atau menutup jawaban FAQ.

- `assets`

  Folder ini menyimpan file gambar yang dipakai di website, seperti logo MBG dan gambar dokumentasi. Contohnya `logombg.png` dan `prabowo1.jpg`.

- `docs`

  Folder ini digunakan untuk menyimpan dokumentasi project. File `explain.md` ini juga berada di folder `docs`.

## 3. Penjelasan index.html

File `index.html` adalah pusat dari struktur website. Semua konten yang tampil di browser ditulis di file ini.

### Deklarasi HTML

Pada bagian paling atas terdapat kode:

```html
<!DOCTYPE html>
```

Kode ini memberi tahu browser bahwa file yang dibuka menggunakan standar HTML modern. Dengan adanya deklarasi ini, browser dapat membaca struktur halaman dengan lebih benar.

Setelah itu ada tag:

```html
<html>
```

Tag ini menjadi pembungkus utama seluruh isi halaman HTML.

### Bagian head

Di dalam tag `<head>`, terdapat beberapa informasi penting untuk halaman.

```html
<meta charset="UTF-8">
```

Tag ini digunakan agar karakter khusus seperti simbol copyright dan simbol panah pada FAQ dapat terbaca dengan baik oleh browser.

```html
<title>MBG Insight</title>
```

Bagian ini menentukan judul halaman yang muncul di tab browser.

```html
<link rel="stylesheet" href="style.css" />
```

Kode ini menghubungkan file HTML dengan file CSS. Jadi, semua class yang ditulis di HTML dapat diberi style melalui `style.css`.

### Bagian body

Semua elemen yang terlihat oleh pengguna berada di dalam tag `<body>`. Di dalam body terdapat `header`, `main`, `footer`, dan pemanggilan file JavaScript.

### Header dan Navbar

Bagian header dibuat dengan tag:

```html
<header>
    <nav>
        <ul>
            ...
        </ul>
    </nav>
</header>
```

Header berfungsi sebagai bagian navigasi utama di bagian atas website. Di dalamnya ada tag `<nav>` sebagai penanda area navigasi, lalu `<ul>` dan `<li>` untuk membuat daftar menu.

Setiap menu menggunakan tag `<a>` seperti:

```html
<a href="#home">Home</a>
```

Tanda `#home` berarti ketika link diklik, halaman akan berpindah ke elemen yang memiliki `id="home"`. Cara ini disebut anchor link dan cocok untuk website satu halaman.

Menu navbar mengarah ke beberapa section, yaitu:

- `#home`
- `#tentang`
- `#sasaran`
- `#alur`
- `#sppg`
- `#manfaat`
- `#dokumentasi`
- `#gizi`
- `#faq`

### Main

Tag `<main>` digunakan untuk membungkus isi utama website. Di dalam main terdapat beberapa section yang menjadi bagian utama halaman.

### Section Home

Section home ditulis seperti ini:

```html
<section id="home" class="container home">
```

`id="home"` digunakan agar navbar bisa menuju ke bagian ini. Class `home` digunakan untuk memberi style khusus pada section pembuka, sedangkan class `container` membatasi isi agar tetap rapi di tengah.

Di dalam home terdapat beberapa bagian:

- `.logohome`

  Bagian ini berisi logo dan teks singkat "My Bini Gweh (MBG)". Logo menggunakan tag `<img>` dengan class `logombg`.

- `.headline`

  Bagian ini berisi judul utama website:

  ```html
  <h1>Gizi Hari Ini,<br>Generasi Kuat Esok Hari</h1>
  ```

  Tag `<br>` digunakan untuk memindahkan teks ke baris baru.

- Paragraf penjelasan

  Paragraf ini menjelaskan bahwa MBG Insight menyajikan informasi Program Makan Bergizi Gratis secara ringkas dan mudah dipahami.

- `.button`

  Bagian ini berisi dua tombol link:

  - `Jelajahi Program`
  - `Lihat Alur MBG`

  Keduanya sebenarnya adalah tag `<a>`, tetapi diberi class `button1` dan `button2` agar tampil seperti tombol.

- `.disclaimer`

  Bagian ini berisi keterangan bahwa website bukan kanal resmi pemerintah. Class `disclaimer` dipakai untuk mengatur posisi dan tampilannya di bagian bawah hero.

### Pola Section dan Container

Setelah home, section lain memakai pola:

```html
<section id="nama-section" class="nama-section">
    <div class="container">
        isi section
    </div>
</section>
```

Pola ini penting karena section luar dipakai untuk background yang full sampai kanan dan kiri layar, sedangkan `<div class="container">` dipakai untuk menjaga isi tetap rapi di tengah.

Contohnya:

```html
<section id="manfaat" class="manfaat">
    <div class="container">
        ...
    </div>
</section>
```

Dengan cara ini, background dari `.manfaat` bisa melebar penuh, tetapi teks dan card tetap mengikuti lebar container.

### Section Tentang

Section tentang menggunakan:

```html
<section id="tentang" class="tentang">
```

Bagian ini menjelaskan pengertian Program Makan Bergizi Gratis. Di dalamnya ada class `tentang-content` untuk membungkus judul dan paragraf utama.

Setelah paragraf, terdapat daftar menggunakan `<ul>` dan `<li>`. Daftar ini menjelaskan tiga poin:

- Pemenuhan Gizi
- Dukungan Pendidikan
- Investasi SDM

Setiap item memakai tag `<b>` untuk menebalkan judul kecil, lalu paragraf untuk penjelasannya.

### Section Sasaran

Section sasaran menggunakan:

```html
<section id="sasaran" class="sasaran">
```

Bagian ini menjelaskan siapa saja penerima manfaat program MBG. Data ditampilkan menggunakan tabel.

Tag yang dipakai adalah:

- `<table>` untuk membungkus tabel
- `<tr>` untuk baris tabel
- `<td>` untuk isi kolom

Kolom pertama berisi kelompok sasaran, sedangkan kolom kedua berisi penjelasan. Contohnya peserta didik, santri, anak usia dini dan balita, ibu hamil, serta ibu menyusui.

### Section Alur

Section alur menggunakan:

```html
<section id="alur" class="alur">
```

Bagian ini menjelaskan tahapan program MBG berjalan. Isi section ditampilkan dalam beberapa card.

Pembungkus card menggunakan class:

```html
<div class="card-alur">
```

Setiap card memakai class `card`. Di dalam card terdapat:

- `<h3>` untuk judul tahap
- `<p>` untuk penjelasan tahap

Tahap yang dijelaskan mulai dari identifikasi sasaran, perencanaan menu, pengadaan bahan pangan, pengolahan di SPPG, distribusi, sampai edukasi dan pemantauan.

### Section SPPG

Section SPPG menggunakan:

```html
<section id="sppg" class="sppg">
```

Bagian ini menjelaskan SPPG sebagai titik layanan pemenuhan gizi. SPPG dijelaskan sebagai tempat yang membantu menyiapkan dan menyalurkan makanan bergizi.

Card pada section ini dibungkus oleh:

```html
<div class="card-sppg">
```

Isi card terdiri dari:

- Bahan Pangan
- Pengolahan
- Distribusi
- Pengawasan

Class `card-sppg` digunakan agar ukuran dan susunan card SPPG bisa diatur khusus di CSS.

### Section Manfaat

Section manfaat menggunakan:

```html
<section id="manfaat" class="manfaat">
```

Bagian ini menjelaskan bahwa MBG tidak hanya tentang makan gratis, tetapi juga berkaitan dengan kesehatan, pendidikan, keluarga, dan ekonomi lokal.

Daftar manfaat ditampilkan dalam card yang dibungkus class:

```html
<div class="card-manfaat">
```

Isi card manfaat antara lain:

- Kesehatan Anak
- Konsentrasi Belajar
- Dukungan Keluarga
- Pencegahan Masalah Gizi
- Ekonomi Lokal
- Investasi SDM

### Section Dokumentasi

Section dokumentasi menggunakan:

```html
<section id="dokumentasi" class="dokumentasi">
```

Bagian ini menampilkan dokumentasi visual. Setiap card berisi gambar, judul, dan paragraf.

Gambar ditampilkan dengan tag:

```html
<img src="assets/prabowo1.jpg" alt="..." width="250">
```

Class pembungkusnya adalah:

```html
<div class="card-dokumentasi">
```

Class ini dipakai untuk mengatur susunan card dokumentasi dan ukuran gambar di CSS.

### Section Gizi

Section gizi menggunakan:

```html
<section id="gizi" class="gizi">
```

Bagian ini berisi edukasi sederhana tentang komponen makanan bergizi. Kontennya dibuat dalam bentuk card dengan class pembungkus:

```html
<div class="card-gizi">
```

Card yang ditampilkan membahas:

- Karbohidrat
- Protein
- Sayur
- Buah
- Air Mineral

Section ini membantu pengguna memahami bahwa makanan bergizi tidak hanya soal kenyang, tetapi juga tentang keseimbangan nutrisi.

### Section Tata Kelola

Section tata kelola menggunakan:

```html
<section id="tata-kelola" class="tata-kelola">
```

Bagian ini menjelaskan bahwa program berskala nasional membutuhkan tata kelola yang aman, terukur, dan bertanggung jawab.

Card pada bagian ini dibungkus oleh:

```html
<div class="card-tata-kelola">
```

Isi card terdiri dari:

- Keamanan Pangan
- Ketepatan Sasaran
- Evaluasi

### Section FAQ

Section FAQ menggunakan:

```html
<section id="faq" class="faq">
```

FAQ berisi pertanyaan umum seputar website dan Program MBG. Card FAQ dibungkus dengan class:

```html
<div class="card-faq">
```

Setiap pertanyaan menggunakan tag `<h3>` dan diberi atribut `onclick`, contohnya:

```html
<h3 onclick="bukaFaq('faq1')">Apa itu MBG?</h3>
```

Atribut `onclick` berarti ketika pertanyaan diklik, function JavaScript bernama `bukaFaq()` akan dijalankan. Jawaban FAQ berada pada tag `<p>` yang memiliki id, misalnya:

```html
<p id="faq1" class="jawaban-faq">...</p>
```

Class `jawaban-faq` digunakan untuk menyembunyikan jawaban di awal. Nanti JavaScript akan mengubah tampilannya menjadi muncul atau hilang.

### Footer

Footer ditulis dengan tag:

```html
<footer class="footer">
```

Footer berisi judul website, deskripsi singkat, menu link, tombol JavaScript, dan copyright.

Menu footer dibuat menggunakan `<ul>` dan `<li>`, mirip seperti navbar. Link footer juga menggunakan anchor link seperti `#home`, `#tentang`, dan `#faq`.

Di footer juga ada dua tombol:

```html
<button onclick="tampilPesan()" class="tombol-js">Info Website</button>
<button onclick="kembaliKeAtas()" class="tombol-js">Kembali ke Atas</button>
```

Tombol pertama menjalankan function `tampilPesan()`, sedangkan tombol kedua menjalankan function `kembaliKeAtas()`.

### Pemanggilan script.js

Di bagian bawah sebelum `</body>`, terdapat:

```html
<script src="script.js"></script>
```

Kode ini menghubungkan HTML dengan file JavaScript. Letaknya di bawah agar struktur HTML dibaca dulu oleh browser sebelum JavaScript dijalankan.

## 4. Penjelasan style.css

File `style.css` digunakan untuk mengatur tampilan semua bagian website. CSS ini masih menggunakan gaya basic, seperti `padding`, `margin`, `display: flex`, `gap`, `width`, `background-color`, `border`, `border-radius`, `color`, dan `font-size`.

### Import Font

Pada bagian atas terdapat:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
```

Kode ini mengambil font Inter dari Google Fonts. Font ini kemudian digunakan untuk seluruh website.

### Reset CSS

Bagian ini:

```css
*,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}
```

digunakan untuk menghapus margin dan padding bawaan browser. Dengan begitu, tampilan halaman lebih mudah diatur dari awal.

`box-sizing: border-box` membuat ukuran elemen lebih mudah dihitung, karena padding dan border ikut dihitung dalam ukuran elemen.

### Body

```css
body {
    background-color: #f7f8f5;
    color: #1b1b1b;
}
```

Body diberi warna background abu-hijau sangat muda. Warna teks dasar menggunakan hitam keabu-abuan agar mudah dibaca.

### Header

Header dibuat fixed:

```css
position: fixed;
top: 0;
left: 0;
z-index: 999;
```

Artinya header akan tetap berada di bagian atas layar saat halaman discroll. `z-index` digunakan agar header tetap berada di atas elemen lain.

Header juga menggunakan:

```css
display: flex;
justify-content: center;
align-items: center;
```

`display: flex` membuat isi header lebih mudah disusun. `justify-content: center` membuat isi berada di tengah secara horizontal, sedangkan `align-items: center` membuat isi berada di tengah secara vertikal.

### Navigasi

Menu navigasi menggunakan:

```css
header ul {
    list-style: none;
    display: flex;
    gap: 40px;
}
```

`list-style: none` menghapus titik bawaan dari list. `display: flex` membuat menu sejajar ke samping. `gap` memberi jarak antar menu.

Link navbar diberi warna gelap dan hover hijau:

```css
header a:hover {
    color: #2f6b3f;
}
```

Hover berarti style berubah saat kursor diarahkan ke elemen.

### Heading

```css
h2 {
    font-size: 40px;
    letter-spacing: -1.8px;
    padding-bottom: 25px;
}
```

Tag `h2` dibuat besar agar judul section terlihat jelas. `padding-bottom` memberi jarak bawah antara judul dan isi section.

### Container

```css
.container {
    width: min(100% - 64px, 1400px);
    margin: 0 auto;
}
```

Class `.container` digunakan untuk membatasi lebar konten. `margin: 0 auto` membuat konten berada di tengah. Dengan pola section luar dan container di dalamnya, background section bisa full layar, tetapi isi tetap rapi di tengah.

### Home atau Hero

Section `.home` menjadi bagian pembuka website. CSS-nya menggunakan gambar sebagai background:

```css
background-image: linear-gradient(...), url("assets/prabowo1.jpg");
```

Gambar diberi lapisan gelap menggunakan `linear-gradient` agar teks putih di atasnya tetap terbaca.

Property:

```css
min-height: 100svh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
```

membuat section home memenuhi tinggi layar dan isinya berada di tengah. `flex-direction: column` membuat isi tersusun dari atas ke bawah.

### Logo Home

Class `.logohome` menggunakan flex agar logo dan teks berada dalam satu baris. Class `.logombg` mengatur ukuran logo menjadi kecil dan memberi jarak kanan dengan `margin-right`.

### Headline

Class `.headline` mengatur judul utama agar terlihat besar dan berada di tengah. `line-height` digunakan untuk mengatur jarak antar baris judul.

### Button

Tombol dibuat dari tag `<a>`, lalu diberi class `button1` dan `button2`.

```css
.button1 {
    background-color: #2f6b3f;
    color: #ffffff;
}
```

Tombol pertama diberi warna hijau gelap sebagai aksen utama. Tombol kedua dibuat transparan dengan border putih agar cocok dengan background hero yang gelap.

Hover pada tombol membuat warna berubah sedikit saat diarahkan kursor.

### Disclaimer

Class `.disclaimer` diposisikan di bagian bawah hero:

```css
position: absolute;
bottom: 40px;
```

Ini membuat disclaimer berada di bawah section home, bukan mengikuti alur normal seperti paragraf biasa.

### Section Tentang

Section `.tentang` diberi padding dan background putih. Padding digunakan agar isi section tidak terlalu menempel dengan bagian atas dan bawah.

List di dalam section tentang dibuat seperti card kecil:

```css
.tentang li {
    background-color: #f7faf4;
    border: 1px solid #d7dfd0;
    border-radius: 10px;
    padding: 18px;
}
```

`border-radius` membuat sudut menjadi sedikit melengkung. Hover pada list membuat warna berubah lembut saat diarahkan kursor.

### Section Sasaran

Section `.sasaran` berisi tabel. Background section dibuat sedikit berbeda agar ada pembeda visual dengan section lain.

Tabel dibuat penuh mengikuti lebar container:

```css
.sasaran table {
    width: 100%;
    border-collapse: collapse;
}
```

`border-collapse: collapse` membuat border tabel menyatu dan terlihat lebih rapi.

Kolom pertama pada tabel diberi style khusus:

```css
.sasaran td:first-child {
    width: 250px;
    font-weight: 700;
    background-color: #eef6e9;
}
```

Ini membuat nama kelompok sasaran lebih menonjol dibanding penjelasannya.

### Section Alur dan Card

Section alur memakai card untuk menampilkan tahapan program. Pembungkus card menggunakan:

```css
.card-alur {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}
```

`display: flex` membuat card bisa disusun sejajar. `gap` memberi jarak antar card. `flex-wrap: wrap` membuat card turun ke baris berikutnya jika ruang tidak cukup.

Class `.card` adalah class global yang dipakai di banyak section. Isinya:

```css
.card {
    background-color: #ffffff;
    width: 280px;
    min-height: 170px;
    padding: 20px;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}
```

Card diberi background putih, border abu-abu muda, sudut melengkung, dan bayangan tipis. Hover pada card membuat card terlihat sedikit berubah saat diarahkan kursor.

### Section SPPG

Section `.sppg` menggunakan background abu-hijau muda. Paragraf section diberi ukuran dan line-height agar nyaman dibaca.

Card SPPG menggunakan `.card-sppg`. Di CSS, ukuran card SPPG dibuat sedikit berbeda:

```css
.card-sppg .card {
    width: 300px;
    min-height: 160px;
}
```

Ini membuat card SPPG lebih sesuai dengan jumlah dan isi teksnya.

### Section Manfaat

Section `.manfaat` memakai background putih. Card manfaat menggunakan `.card-manfaat`. Ukuran card manfaat dibuat lebih lebar:

```css
.card-manfaat .card {
    width: 380px;
    min-height: 150px;
}
```

Karena isi manfaat cukup ringkas, card dibuat lebar agar susunannya terlihat lebih rapi.

### Section Dokumentasi

Section `.dokumentasi` berisi card dengan gambar. Class `.card-dokumentasi` mengatur susunan card dokumentasi.

Gambar dokumentasi diatur dengan:

```css
.card-dokumentasi img {
    width: 100%;
    height: 170px;
    object-fit: cover;
}
```

`width: 100%` membuat gambar mengikuti lebar card. `height: 170px` membuat semua gambar sama tinggi. `object-fit: cover` membuat gambar tetap memenuhi area tanpa merusak ukuran card.

### Section Gizi

Section `.gizi` menjelaskan komponen gizi dalam bentuk card. Card pada section ini memakai `.card-gizi`.

```css
.card-gizi .card {
    width: 240px;
    min-height: 230px;
}
```

Ukuran card dibuat cukup tinggi karena beberapa penjelasan gizi memiliki teks yang lebih panjang.

### Section Tata Kelola

Section `.tata-kelola` membahas keamanan pangan, ketepatan sasaran, dan evaluasi. Card dibungkus oleh `.card-tata-kelola`.

```css
.card-tata-kelola .card {
    width: 360px;
    min-height: 150px;
}
```

Ukuran ini membuat tiga card dapat tampil rapi di tengah.

### Section FAQ

Section `.faq` dibuat rata tengah:

```css
.faq {
    text-align: center;
}
```

Card FAQ disusun vertikal:

```css
.card-faq {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
```

`flex-direction: column` membuat card FAQ tersusun dari atas ke bawah. `align-items: center` membuat card berada di tengah.

Jawaban FAQ disembunyikan di awal:

```css
.jawaban-faq {
    display: none;
    margin-top: 12px;
}
```

Nanti JavaScript akan mengubah `display` menjadi `block` ketika pertanyaan diklik.

### Footer

Footer menggunakan background gelap:

```css
.footer {
    background-color: #142017;
    color: #ffffff;
}
```

Warna gelap membuat footer terlihat sebagai penutup halaman. Teks footer dibuat putih agar kontras.

Menu footer menggunakan flex:

```css
.footer-menu {
    display: flex;
    gap: 18px;
    justify-content: center;
    flex-wrap: wrap;
}
```

Menu disusun sejajar dan berada di tengah. Tombol footer menggunakan class `.tombol-js`, dengan border warna kuning hangat dan hover sederhana.

### Background Section

Di bagian bawah CSS ada pengaturan background untuk beberapa section:

```css
.tentang,
.alur,
.manfaat,
.gizi,
.faq {
    background-color: #ffffff;
}

.sasaran,
.sppg,
.dokumentasi,
.tata-kelola {
    background-color: #f7faf6;
}
```

Bagian ini membuat warna background antar section bergantian antara putih dan abu-hijau muda. Tujuannya agar halaman tidak terlalu polos, tetapi tetap sederhana.

## 5. Penjelasan script.js

File `script.js` berisi JavaScript yang masih sederhana. JavaScript di sini digunakan sebagai latihan interaksi dasar pada website.

### console.log

```js
console.log("js on");
```

Kode ini menampilkan teks `js on` di console browser. Fungsinya untuk mengecek apakah file JavaScript sudah berhasil tersambung dengan HTML.

### Function tampilPesan

```js
function tampilPesan() {
    alert("web design B - MBG");
}
```

Function ini akan menampilkan kotak pesan atau alert. Function ini dipanggil oleh tombol `Info Website` di footer.

Saat tombol diklik, browser akan menampilkan pesan:

```text
web design B - MBG
```

### Function kembaliKeAtas

```js
function kembaliKeAtas() {
    window.scrollTo(0, 0);
}
```

Function ini digunakan untuk mengembalikan posisi halaman ke bagian paling atas. Tombol `Kembali ke Atas` di footer memanggil function ini.

`window.scrollTo(0, 0)` berarti halaman diarahkan ke posisi horizontal 0 dan vertikal 0, yaitu bagian paling atas halaman.

### Function bukaFaq

```js
function bukaFaq(idJawaban) {
    var jawaban = document.getElementById(idJawaban);

    if (jawaban.style.display === "block") {
        jawaban.style.display = "none";
    } else {
        jawaban.style.display = "block";
    }
}
```

Function ini digunakan untuk membuka dan menutup jawaban FAQ.

Penjelasannya:

- `idJawaban` adalah nama id dari jawaban FAQ yang dikirim dari HTML.
- `document.getElementById(idJawaban)` digunakan untuk mengambil elemen jawaban berdasarkan id.
- Jika jawaban sedang tampil (`display === "block"`), maka jawaban disembunyikan dengan `display = "none"`.
- Jika jawaban sedang tersembunyi, maka jawaban ditampilkan dengan `display = "block"`.

Contohnya pada HTML:

```html
<h3 onclick="bukaFaq('faq1')">Apa itu MBG?</h3>
```

Saat pertanyaan diklik, JavaScript akan mencari elemen dengan id `faq1`, lalu menampilkan atau menyembunyikan jawabannya.

## 6. Alur Kerja Website

Saat pengguna membuka website, bagian pertama yang terlihat adalah hero atau section home. Di bagian atas terdapat navbar yang tetap menempel karena header menggunakan `position: fixed`.

Pengguna dapat mengklik menu navbar untuk berpindah ke section tertentu. Misalnya, klik menu `Tentang` akan membawa pengguna ke section `#tentang`, sedangkan klik menu `FAQ` akan membawa pengguna ke section `#faq`.

Setelah membaca bagian home, pengguna dapat melihat penjelasan tentang Program MBG, lalu melihat sasaran penerima manfaat dalam bentuk tabel. Setelah itu pengguna dapat membaca alur program dalam bentuk card, memahami peran SPPG, melihat manfaat program, membaca dokumentasi, mempelajari komponen gizi, dan membaca bagian tata kelola.

Pada bagian FAQ, pengguna dapat mengklik pertanyaan untuk membuka jawaban. Jika pertanyaan diklik lagi, jawaban akan disembunyikan kembali. Ini menjadi contoh interaksi sederhana menggunakan JavaScript.

Di bagian paling bawah ada footer. Footer berisi nama website, menu navigasi tambahan, tombol `Info Website`, tombol `Kembali ke Atas`, dan copyright. Tombol `Info Website` menampilkan alert, sedangkan tombol `Kembali ke Atas` membawa halaman kembali ke section home.

## 7. Kesimpulan

Project MBG Insight ini menggunakan struktur HTML yang sederhana dan mudah dipahami. Setiap bagian website dipisahkan ke dalam section, sehingga isi halaman lebih rapi dan mudah dicari.

File `style.css` digunakan untuk mengatur tampilan dengan CSS basic. Styling yang digunakan masih sederhana, seperti pengaturan warna, padding, margin, flex, gap, border, card, hover, dan footer. Walaupun sederhana, tampilan website tetap dibuat rapi dengan pembagian background section dan card yang konsisten.

File `script.js` digunakan sebagai pelengkap interaksi dasar. JavaScript yang dipakai masih mudah dipahami, yaitu `console.log`, `alert`, function sederhana, `onclick`, dan pengaturan `display` untuk FAQ.

Secara keseluruhan, website ini cocok sebagai project tugas kuliah dasar HTML, CSS, dan JavaScript karena sudah memiliki struktur halaman lengkap, tampilan yang cukup rapi, dan interaksi sederhana tanpa menggunakan framework atau library tambahan.
