var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolling", window.scrollY > 0);
});

// var nav = document.querySelector('nav');

//       window.addEventListener('scroll', function () {
//         if (window.pageYOffset > 5) {
//           nav.classList.add('bg-dark', 'shadow');
//         } else {
//           nav.classList.remove('bg-dark', 'shadow');
//         }
//       });
