document.getElementById("menu-btn").addEventListener("click", function () {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
});

var navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    var navLinksContainer = document.getElementById("navLinks");
    navLinksContainer.classList.remove("active");
  });
});
