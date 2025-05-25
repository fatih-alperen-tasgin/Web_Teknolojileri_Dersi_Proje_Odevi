<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $kullanici = $_POST["kullanici"];
  $sifre = $_POST["sifre"];

  // Örnek öğrenci bilgileri
  $dogruKullanici = "fatih.tasgin@ogr.sakarya.edu.tr";
  $dogruSifre = "b241210079";

  if ($kullanici == $dogruKullanici && $sifre == $dogruSifre) {
    echo "<h2 style='text-align:center; margin-top: 50px;'>Hoş geldiniz <strong>$sifre</strong>!</h2>";
  } else {
    // Başarısız giriş → login.html'e yönlendirme
    header("Location: login.html");
    exit();
  }
} else {
  // Form POST ile gelmemişse login sayfasına dön
  header("Location: login.html");
  exit();
}
?>
