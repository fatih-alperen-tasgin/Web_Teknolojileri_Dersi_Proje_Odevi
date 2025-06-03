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
    // Başarısız giriş → hata mesajını ekrana yazdır
    echo "<p style='color:red; text-align:center;'><strong>Kullanıcı adı veya şifre yanlış</p>";
    echo "<p style='text-align:center;'><a href='http://localhost/Web_Teknolojileri_Dersi_Proje_Odevi/login.html'>Tekrar dene</a></p>";
    exit();
  }
} else {
  // Form POST ile gelmemişse login sayfasına dön, hata mesajı ile
  header("Location: http://localhost/Web_Teknolojileri_Dersi_Proje_Odevi/login.html?error=Geçersiz istek, lütfen tekrar giriş yapın");
  exit();
}
?>
