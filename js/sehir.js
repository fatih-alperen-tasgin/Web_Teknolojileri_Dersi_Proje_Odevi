// sehir.js
document.addEventListener("DOMContentLoaded", function () {
  // Tüm '#' ile başlayan linkleri seç (Sayfa içi navigasyon)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const navbarHeight = document.querySelector(".navbar").offsetHeight;

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Sadece '#' olan linkleri atla
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Navbar yüksekliğini hesaba katarak konumu hesapla
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});