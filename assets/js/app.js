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
//------------------------------------------------------------------email-js------------------------
document.addEventListener("DOMContentLoaded", function () {
            emailjs.init("gX92W7anPNaKRuQld");

            document.getElementById('contact-form').addEventListener('submit', function (e) {
                e.preventDefault();

                emailjs.sendForm('service_g8efs5f', 'template_mtyvzft', this)
                    .then(function () {
                        document.getElementById('form-status').style.display = 'block';
                        document.getElementById('form-status').textContent = "Message sent successfully!";
                        document.getElementById('form-status').classList.add('text-success');
                        document.getElementById('form-status').classList.remove('text-danger');
                        document.getElementById('contact-form').reset();
                    }, function (error) {
                        document.getElementById('form-status').style.display = 'block';
                        document.getElementById('form-status').textContent = "Failed to send message: " + error.text;
                        document.getElementById('form-status').classList.remove('text-success');
                        document.getElementById('form-status').classList.add('text-danger');
                    });
            });
        });
