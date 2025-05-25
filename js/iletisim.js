const { createApp } = Vue
createApp({
  data() {
    return {
      form: {
        ad: '',
        email: '',
        konu: '',
        mesaj: ''
      }
    };
  },
  methods: {
    gonder() {
      // Verileri localStorage’a yaz
      localStorage.setItem('iletisimFormu', JSON.stringify(this.form));
      // Sayfayı yönlendir
      window.location.href = "form_sonuc.html";
    },
    temizle() {
      this.form = { ad: '', email: '', konu: '', mesaj: '' };
    }
  }
}).mount('#app');
