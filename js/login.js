// login.js
function form_dogrula() {
    const eposta = document.getElementById("kullanici").value.trim();
    const sifre = document.getElementById("sifre").value.trim();

    // 1. Boş alan kontrolü
    if (eposta === "" || sifre === "") {
        alert("Lütfen tüm alanları doldurunuz.");
        return false;
    }

    // 2. Sakarya Üniversitesi mail formatı kontrolü (Regex)
    // Format: b veya g ile başlayan, sayılarla devam eden @sakarya.edu.tr uzantılı mail
    const eposta_deseni = /^[a-z][0-9]+@sakarya\.edu\.tr$/i;
    
    if (!eposta_deseni.test(eposta)) {
        alert("Lütfen geçerli bir Sakarya Üniversitesi maili giriniz!\nÖrn: b241210079@sakarya.edu.tr");
        return false;
    }

    return true;
}