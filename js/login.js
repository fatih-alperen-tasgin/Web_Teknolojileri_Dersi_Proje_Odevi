function validateForm() {
  const email = document.getElementById("kullanici").value.trim();
  const sifre = document.getElementById("sifre").value.trim();

  if (!email || !sifre) {
    alert("Lütfen tüm alanları doldurunuz.");
    return false;
  }

  const emailPattern = /^[a-z0-9._%+-]+@ogr\.sakarya\.edu\.tr$/i;
  if (!emailPattern.test(email)) {
    alert("Lütfen geçerli bir Sakarya Üniversitesi e-posta adresi giriniz.");
    return false;
  }

  return true;
}
