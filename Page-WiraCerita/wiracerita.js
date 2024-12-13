//Hide Chapter
const headerStoryElements = document.querySelectorAll('.header-story');

// Menambahkan event listener ke setiap elemen header
headerStoryElements.forEach((headerStoryElement) => {
    headerStoryElement.addEventListener('click', function () {
        // Mengambil nilai "data-toggle" dari elemen yang diklik
        const toggleTarget = this.getAttribute('data-toggle');
    
        // Mendapatkan elemen-elemen yang harus ditampilkan/sembunyikan
        const toggleElements = document.querySelectorAll(`.${toggleTarget}`);

        // Toggle (menampilkan/sembunyikan) elemen-elemen yang sesuai
        toggleElements.forEach((toggleElement) => {
            toggleElement.classList.toggle('hidden');
        });
    });
});

