
const butcli = document.querySelector(".btncl");
const clobtn = document.querySelector(".close");
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

butcli.onclick = function TS() {
    sidebar.classList.toggle("siUB");

    overlay.style.display = "block";
}

clobtn.onclick = function cl() {
    sidebar.classList.remove("siUB");
    overlay.style.display = "none";
};

