const apiKey = "pub_db90c0b2fb864522b3f272cbff4ec12e";
const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=tr&q=galatasaray`
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const haberDiv = document.getElementById("haberler");
        const loadingDiv = document.getElementById("loading");
        if (loadingDiv) loadingDiv.remove()
        const haberler = data.results
        if (haberler && haberler.length > 0) {
          haberler.forEach(haber => {
            const col = document.createElement("div");
            col.className = "col-md-6 col-lg-4"
            const img = haber.image_url
              ? `<img src="${haber.image_url}" class="card-img-top" alt="Haber Görseli">`
              : ""
            const tarih = new Date(haber.pubDate).toLocaleDateString("tr-TR", {
              year: "numeric", month: "long", day: "numeric"
            })
            const kaynak = haber.source_id ? haber.source_id.toUpperCase() : "Bilinmeyen"
            col.innerHTML = `
              <div class="card h-100 shadow-sm">
                ${img}
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${haber.title}</h5>
                  <p class="card-text">${haber.description ? haber.description.substring(0, 120) + "..." : "Açıklama yok."}</p>
                  <p class="text-muted small mb-1"><strong>📅</strong> ${tarih}</p>
                  <p class="text-muted small"><strong>🌐 Kaynak:</strong> ${kaynak}</p>
                  <a href="${haber.link}" target="_blank" class="btn btn-sm btn-primary mt-auto">Haberi Oku</a>
                </div>
              </div>
            `;
            haberDiv.appendChild(col);
          });
        } else {
          haberDiv.innerHTML = "<p class='text-danger'>Galatasaray ile ilgili haber bulunamadı.</p>";
        }
      })
      .catch(error => {
        document.getElementById("haberler").innerHTML = "<p class='text-danger'>Haberleri alırken bir hata oluştu.</p>";
        console.error("API hatası:", error);
      });
  }, 2000);
});