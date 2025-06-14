function lanjutForm() {
  document.getElementById('form-section').style.display = 'block';
}

// Bisa ditambahin validasi atau alert nanti di sini
document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesanan berhasil dikirim! Terima kasih 😊");
});


function lanjutForm() {
  document.getElementById('form-section').style.display = 'block';
}

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data form
  const nama = document.querySelector('[name="nama"]').value;
  const nohp = document.querySelector('[name="nohp"]').value;
  const alamat = document.querySelector('[name="alamat"]').value;

  // Ambil makanan yang dipilih
  const makananDipilih = Array.from(document.querySelectorAll('.menu-list input:checked'))
    .map(el => el.value)
    .join(', ');

  // Cek kalau tidak pilih makanan
  if (!makananDipilih) {
    alert("Silakan pilih minimal satu makanan.");
    return;
  }

  // Buat isi pesan
  const pesan = `Halo! Saya ingin pesan makanan:
- Nama: ${nama}
- No HP: ${nohp}
- Alamat: ${alamat}
- Pesanan: ${makananDipilih}`;

  // Encode pesan
  const pesanEncode = encodeURIComponent(pesan);

  // Nomor WhatsApp tujuan
  const nomorWA = "+6283114053508"; // Ganti dengan nomor WA kamu

  // Redirect ke WA
  window.open(`https://wa.me/${nomorWA}?text=${pesanEncode}`, "_blank");
});
