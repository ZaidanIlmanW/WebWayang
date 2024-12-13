//Style Navbar
let prevScrollPos = window.pageYOffset;
let navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // Scroll ke bawah
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scroll ke atas
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = st <= 0 ? 0 : st; // Menyimpan posisi scroll sebelumnya

  prevScrollPos = currentScrollPos;
});

//Fungsi Search
document.getElementById('input-pencarian').addEventListener('input', function () {
    const kataKunci = this.value.toLowerCase();
    const kartu = document.querySelectorAll('.card-4');

    kartu.forEach(function (card) {
        const judul = card.querySelector('h2').textContent.toLowerCase();
        const deskripsi = card.querySelector('p').textContent.toLowerCase();

        if (judul.includes(kataKunci) || deskripsi.includes(kataKunci)) {
            card.classList.add('search-match'); // Tambahkan kelas search-match
        } else {
            card.classList.remove('search-match'); // Hapus kelas search-match
        }
    });
});


const toggleButton = document.getElementById('search-icon');
const textInput = document.getElementById('input-pencarian');
const iconButton = document.getElementById('search-icon-rl');

let isInputVisible = false;

toggleButton.addEventListener('click', function () {
    if (isInputVisible) {
        textInput.style.display = 'none';
        iconButton.style.color = '#CC8E35';
    } else {
        textInput.style.display = 'block';
        iconButton.style.color = 'white';
    }
    isInputVisible = !isInputVisible;
});