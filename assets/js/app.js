//-----------------------------------navbar---------------------------------------------
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
//------------------------------------------------theme---------------------------------------------
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark');
});
//----------------------------------------------back to top------------------------------------------------
const myButton = document.getElementById("myBtn");

window.onscroll = function () {
    myButton.style.display = window.scrollY > 200 ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
