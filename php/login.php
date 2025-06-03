<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $kullanici = $_POST["kullanici"];
  $sifre = $_POST["sifre"];

  // Örnek öğrenci bilgileri
  $dogruKullanici = "fatih.tasgin@ogr.sakarya.edu.tr";
  $dogruSifre = "b241210079";

  if ($kullanici == $dogruKullanici && $sifre == $dogruSifre) {
    echo "<h2 style='text-align:center; margin-top: 50px;'>Hoş geldiniz <strong>$kullanici</strong>!</h2>";
  } else {
    // Başarısız giriş → login.html'e yönlendirme, hata mesajı ile
    header("Location: http://localhost/Web_Teknolojileri_Dersi_Proje_Odevi/login.html?error=Kullanıcı adı veya şifre yanlış");
    exit();
  }
} else {
  // Form POST ile gelmemişse login sayfasına dön, hata mesajı ile
  header("Location: http://localhost/Web_Teknolojileri_Dersi_Proje_Odevi/login.html?error=Geçersiz istek, lütfen tekrar giriş yapın");
  exit();
}
?>
