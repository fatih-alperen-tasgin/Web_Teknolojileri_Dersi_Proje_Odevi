function validateForm() {
  const email = document.getElementById("kullanici").value;
  const sifre = document.getElementById("sifre").value;
  if (!email || !sifre) {
    alert("Lütfen tüm alanları doldurunuz.");
    return false;
  }
  const emailPattern = /^[a-z0-9]+@sakarya\.edu\.tr$/i;
  if (!emailPattern.test(email)) {
    alert("Lütfen geçerli bir Sakarya Üniversitesi e-posta adresi giriniz.");
    return false;
  }
  return true;
}
