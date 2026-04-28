<?php
// login.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // GÜVENLİK: htmlspecialchars ile basit XSS koruması
    $gelen_kullanici = isset($_POST["kullanici"]) ? htmlspecialchars($_POST["kullanici"]) : "";
    $gelen_sifre = isset($_POST["sifre"]) ? htmlspecialchars($_POST["sifre"]) : "";

    // Ödevde istenen sabit bilgiler
    $dogru_kullanici = "b241210079@sakarya.edu.tr";
    $dogru_sifre = "b241210079";

    if ($gelen_kullanici === $dogru_kullanici && $gelen_sifre === $dogru_sifre) {
        // Başarılı Giriş
        echo "<div style='text-align:center; margin-top: 50px; font-family: sans-serif;'>";
        echo "<h2>Hoş geldiniz <strong>" . $dogru_sifre . "</strong></h2>";
        echo "<p>Giriş başarılı. Ana sayfaya yönlendiriliyorsunuz...</p>";
        echo "</div>";
        
        // ÖNEMLİ: php/ klasöründen bir üst klasöre (../) index.html'e çıkar
        header("Refresh: 3; url=../index.html");
        exit();
    } else {
        // Hatalı Giriş
        // GÜVENLİK: Hatalı girişte bir üst klasördeki login.html'e yönlendirir
        echo "<script>
                alert('Hatalı kullanıcı adı veya şifre!');
                window.location.href='../login.html';
              </script>";
        exit();
    }
} else {
    // Form dışı erişimde geri gönder
    header("Location: ../login.html");
    exit();
}
?>