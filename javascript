function toggleHamburg() {
    console.log("Hamburger menu toggled");  // Debug log untuk memastikan fungsi dipanggil
    var hamburg = document.querySelector(".hamburg");
    var dropdown = document.querySelector(".dropdown");

    hamburg.classList.toggle("active");
    dropdown.classList.toggle("active");
}

function closeHamburg() {
    console.log("Hamburger menu closed");  // Debug log untuk memastikan fungsi dipanggil
    var hamburg = document.querySelector(".hamburg");
    var dropdown = document.querySelector(".dropdown");

    hamburg.classList.remove("active");
    dropdown.classList.remove("active");
}
