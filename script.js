// Typing animation
const roles = ["Full Stack Developer", "AI Enthusiast", "Problem Solver"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < roles[index].length) {
    typingElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1500);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

// Scroll animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => observer.observe(section));

// Code //
// // Mouse Glow Effect
// const glow = document.querySelector(".mouse-glow");

// document.addEventListener("mousemove", (e) => {
//   glow.style.left = e.clientX - 100 + "px";
//   glow.style.top = e.clientY - 100 + "px";
// });
{/* <script>
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");
  document.body.appendChild(star);

  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";

  setTimeout(() => star.remove(), 2000);
}

setInterval(createShootingStar, 3000);
</script> */}
