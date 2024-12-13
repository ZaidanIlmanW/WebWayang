//Style Navbar
let prevScrollPos = window.pageYOffset;
let navbar = document.getElementById("navbar-top");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // Scroll ke bawah
    navbar.style.transform = "translateY(-200%)";
  } else {
    // Scroll ke atas
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = st <= 0 ? 0 : st; // Menyimpan posisi scroll sebelumnya

  prevScrollPos = currentScrollPos;
});

var prevScrollPoss = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPoss > currentScrollPos) {
    // Scroll ke atas
    document.querySelector(".nav-bawah").classList.remove("hidden");
  } else {
    // Scroll ke bawah
    document.querySelector(".nav-bawah").classList.add("hidden");
  }
  
  prevScrollPoss = currentScrollPos;
};

//Ubah Konten Page 3
function UbahKonten (judul) {
    var header = document.getElementById("page-3-header")
    header.innerHTML = judul;

    var article = document.getElementById("page-3-article") 


    if(judul == "Wayang Kulit") {
        article.innerHTML = "Wayang kulit (Jawa: ꦮꦪꦁ​ꦏꦸꦭꦶꦠ꧀) adalah bentuk tradisional dari kesenian wayang yang aslinya ditemukan dalam budaya Jawa dan Bali di Indonesia. Narasi wayang kulit seringkali berkaitan dengan tema utama kebaikan melawan kejahatan. Dalam kepercayaan dan sastra Jawa, wayang kulit diciptakan oleh Kanjeng Sunan Kalijaga yang merupakan sebagai anggota Wali Songo dan merupakan keturunan Bangsawan Ponorogo, Arya Wiraraja. Kanjeng Sunan Kalijaga melihat masyarakat Indonesia terutama masyarakat suku Jawa yang menggemari pertunjukan Wayang Beber, dalam Islam melukis diatas kertas dianggap Haram (dilarang), maka dari itu Kanjeng Sunan Kalijaga memodifikasi bahan material dari karakter Wayang yang semula-mula terbuat dari Daluang (kertas Ponoragan) dan diganti menggunakan bahan dasar Kulit sapi, atau kerbau."
    } else if(judul == "Wayang Golek") {
        article.innerHTML = "Wayang golek (Bahasa Sunda: ᮝᮚᮀ ᮍᮧᮜᮦᮊ᮪; pengucapan bahasa Sunda: [wajaŋ golɛk]) merupakan salah satu aliran dari kesenian wayang. Umumnya wayang ini dipentaskan di wilayah Parahyangan, Jawa Barat dengan menggunakan Bahasa Sunda. Namun wayang ini juga dipentaskan di luar wilayah tersebut seperti di Brebes dan Cilacap di Jawa Tengah. Lakon yang dimainkan dalam wayang golek purwa adalah kisah Mahabharata dan Ramayana. Aliran wayang golek ini diperkirakan mulai berkembang di Jawa Barat sejak abad ke-19 M, dipelopori oleh Bupati Bandung Wiranatakusumah III. Pagelarannya di waktu itu dikhususkan untuk kaum menak (bangsawan), sebelum akhirnya menyebar luas di kalangan masyarakat Sunda. Selain berfungsi sebagai pelengkap upacara selamatan atau ruwatan, pertunjukan seni wayang golek juga menjadi tontonan dan hiburan dalam perhelatan tertentu.";
    } else if (judul == "Wayang Wong") {
        article.innerHTML = "Wayang wong (berasal dari Jawa: ꦮꦪꦁ​ꦮꦺꦴꦁ, translit. wayang wong, har. 'wayang orang') adalah wayang yang dimainkan dengan menggunakan orang sebagai tokoh dalam cerita wayang tersebut. Wayang wong diciptakan oleh Sri Susuhunan Hamangkurat I pada tahun 1731 di Kerajaan Mataram. Sesuai dengan nama sebutannya, wayang tersebut tidak lagi dipergelarkan dengan memainkan boneka-boneka wayang , akan tetapi menampilkan manusia-manusia sebagai pengganti boneka-boneka wayang tersebut. Mereka memakai pakaian sama seperti hiasan-hiasan yang dipakai pada wayang kulit. Supaya bentuk muka atau bangun muka mereka menyerupai wayang kulit , sering kali pemain wayang wong ini diubah/dihias mukanya dengan tambahan gambar atau lukisan. Cerita-cerita yang diangkat dalam wayang wong berbasis pada duel epik cerita kolosal yaitu Mahabharata dan Ramayana. "
    } else if (judul == "Wayang Bambu") {
        article.innerHTML = "Wayang bambu (Aksara Sunda: ᮝᮚᮀ ᮘᮙ᮪ᮘᮥ) adalah kesenian khas dari yang berasal dari wilayah Kampung Cijahe, Kelurahan Curugmekar, Kecamatan Bogor Barat, Kota Bogor, Jawa Barat. Wayang ini terbuat dari bambu yang dibersihkan dan di bentuk menyerupai karakter tokoh tertentu, wayang bambu juga dimainkan oleh seorang dalang dan diiringi lagu kesenian khas Sunda. Berbeda dengan tema cerita pewayangan lain di daerah Pulau Jawa dan Bali yang mengambil cerita Mahabarata, Wayang bambu dibawakan dengan mengusung cerita sehari-hari yang menggambarkan kehidupan masyarakat, khususnya warga Kota Bogor. Pada acara pagelaran seni, wayang bambu sering dibawakan dalam bahasa Sunda dialek Bogor agar lebih dekat dengan warga dan menghibur"
    } else if (judul == "Wayang Suket") {
        article.innerHTML = "Wayang suket (berasal dari Jawa: ꦮꦪꦁ​ꦱꦸꦏꦼꦠ꧀, translit. wayang suket, har. 'wayang rumput') merupakan bentuk tiruan dari berbagai figur wayang kulit yang terbuat dari rumput. Wayang suket biasanya dibuat sebagai alat permainan atau penyampaian cerita perwayangan pada anak-anak di desa-desa Jawa. Untuk membuatnya, beberapa helai daun rerumputan dijalin lalu dirangkai (dengan melipat) membentuk figur serupa wayang kulit. Karena bahannya, wayang suket biasanya tidak bertahan lama. Seniman asal Tegal, Slamet Gundono, dikenal sebagai tokoh yang berusaha mengangkat wayang suket pada tingkat pertunjukan panggung. Bahkan jika menyebut wayang suket, sekarang sudah lekat dengan pertunjukan wayangnya Slamet Gundono lulusan STSI Pedalangan yang kini menetap di Solo."
    }

  
}

//Ubah Konten Page 3 Device Kecil
const konten = [
    {
        background: '../ASSETS/card/wayang-kulit-2.jpg', header: 'Wayang Kulit', 
        teks: 'Wayang kulit (Jawa: ꦮꦪꦁ​ꦏꦸꦭꦶꦠ꧀) adalah bentuk tradisional dari kesenian wayang yang aslinya ditemukan dalam budaya Jawa dan Bali di Indonesia. Narasi wayang kulit seringkali berkaitan dengan tema utama kebaikan melawan kejahatan. Dalam kepercayaan dan sastra Jawa, wayang kulit diciptakan oleh Kanjeng Sunan Kalijaga yang merupakan sebagai anggota Wali Songo dan merupakan keturunan Bangsawan Ponorogo, Arya Wiraraja. Kanjeng Sunan Kalijaga melihat masyarakat Indonesia terutama masyarakat suku Jawa yang menggemari pertunjukan Wayang Beber, dalam Islam melukis diatas kertas dianggap Haram (dilarang), maka dari itu Kanjeng Sunan Kalijaga memodifikasi bahan material dari karakter Wayang yang semula-mula terbuat dari Daluang (kertas Ponoragan) dan diganti menggunakan bahan dasar Kulit sapi, atau kerbau.'
    }, {
        background: '../ASSETS/card/wayang-golek-2.jpg', header: 'Wayang Golek', 
        teks: 'Wayang golek (Bahasa Sunda: ᮝᮚᮀ ᮍᮧᮜᮦᮊ᮪; pengucapan bahasa Sunda: [wajaŋ golɛk]) merupakan salah satu aliran dari kesenian wayang. Umumnya wayang ini dipentaskan di wilayah Parahyangan, Jawa Barat dengan menggunakan Bahasa Sunda. Namun wayang ini juga dipentaskan di luar wilayah tersebut seperti di Brebes dan Cilacap di Jawa Tengah. Lakon yang dimainkan dalam wayang golek purwa adalah kisah Mahabharata dan Ramayana. Aliran wayang golek ini diperkirakan mulai berkembang di Jawa Barat sejak abad ke-19 M, dipelopori oleh Bupati Bandung Wiranatakusumah III. Pagelarannya di waktu itu dikhususkan untuk kaum menak (bangsawan), sebelum akhirnya menyebar luas di kalangan masyarakat Sunda. Selain berfungsi sebagai pelengkap upacara selamatan atau ruwatan, pertunjukan seni wayang golek juga menjadi tontonan dan hiburan dalam perhelatan tertentu.'
    }, {
        background: '../ASSETS/card/wayang-wong-2.jpg', header: 'Wayang Wong', 
        teks: 'Wayang wong (berasal dari Jawa: ꦮꦪꦁ​ꦮꦺꦴꦁ, translit. wayang wong, har. \'wayang orang\') adalah wayang yang dimainkan dengan menggunakan orang sebagai tokoh dalam cerita wayang tersebut. Wayang wong diciptakan oleh Sri Susuhunan Hamangkurat I pada tahun 1731 di Kerajaan Mataram. Sesuai dengan nama sebutannya, wayang tersebut tidak lagi dipergelarkan dengan memainkan boneka-boneka wayang , akan tetapi menampilkan manusia-manusia sebagai pengganti boneka-boneka wayang tersebut. Mereka memakai pakaian sama seperti hiasan-hiasan yang dipakai pada wayang kulit. Supaya bentuk muka atau bangun muka mereka menyerupai wayang kulit , sering kali pemain wayang wong ini diubah/dihias mukanya dengan tambahan gambar atau lukisan.'
    }, {
        background: '../ASSETS/card/wayang-bambu.jpg', header: 'Wayang Bambu',
        teks: 'Wayang bambu (Aksara Sunda: ᮝᮚᮀ ᮘᮙ᮪ᮘᮥ) adalah kesenian khas dari yang berasal dari wilayah Kampung Cijahe, Kelurahan Curugmekar, Kecamatan Bogor Barat, Kota Bogor, Jawa Barat. Wayang ini terbuat dari bambu yang dibersihkan dan di bentuk menyerupai karakter tokoh tertentu, wayang bambu juga dimainkan oleh seorang dalang dan diiringi lagu kesenian khas Sunda. Berbeda dengan tema cerita pewayangan lain di daerah Pulau Jawa dan Bali yang mengambil cerita Mahabarata, Wayang bambu dibawakan dengan mengusung cerita sehari-hari yang menggambarkan kehidupan masyarakat, khususnya warga Kota Bogor. Pada acara pagelaran seni, wayang bambu sering dibawakan dalam bahasa Sunda dialek Bogor agar lebih dekat dengan warga dan menghibur'
    }, {
        background: '../ASSETS/card/wayang-suket.jpg', header: 'Wayang Suket',
        teks: 'Wayang suket (berasal dari Jawa: ꦮꦪꦁ​ꦱꦸꦏꦼꦠ꧀, translit. wayang suket, har. \'wayang rumput\') merupakan bentuk tiruan dari berbagai figur wayang kulit yang terbuat dari rumput. Wayang suket biasanya dibuat sebagai alat permainan atau penyampaian cerita perwayangan pada anak-anak di desa-desa Jawa. Untuk membuatnya, beberapa helai daun rerumputan dijalin lalu dirangkai (dengan melipat) membentuk figur serupa wayang kulit. Karena bahannya, wayang suket biasanya tidak bertahan lama. Seniman asal Tegal, Slamet Gundono, dikenal sebagai tokoh yang berusaha mengangkat wayang suket pada tingkat pertunjukan panggung. Bahkan jika menyebut wayang suket, sekarang sudah lekat dengan pertunjukan wayangnya Slamet Gundono lulusan STSI Pedalangan yang kini menetap di Solo.'
    }
];


let currentIndex = 0;

function upContent() { 
    const currentContent = konten[currentIndex];
    document.getElementById('page-3-bg-article').style.background = `url('${currentContent.background}')`;
    document.getElementById('page-3-header').textContent = currentContent.header;
    document.getElementById('page-3-article').textContent = currentContent.teks;
}

document.getElementById('l-button').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + konten.length) % konten.length;
    upContent();
});

document.getElementById('r-button').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % konten.length;
    upContent();
});

upContent();

// Galeri
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
    
}

// Ambil tombol-tombol dan tambahkan event listener
const scrollUpButton = document.getElementById('scroll-up');
const scrollDownButton = document.getElementById('scroll-down');

scrollUpButton.addEventListener('click', function() {
    // Geser halaman ke atas
    window.scrollBy(0, -window.innerHeight);
});

scrollDownButton.addEventListener('click', function() {
    // Geser halaman ke bawah
    window.scrollBy(0, window.innerHeight);
});
