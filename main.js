function handleBuy() {
  Swal.fire({
    title: "Apakah Anda Yakin?",
    text: "Ingin membelinya",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, beli"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Jika anda yakin",
        text: "Maka akan kami arahkan ke admin.",
        icon: "info",
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "Lanjut ke WhatsApp"
      }).then(() => {
        // Ganti 'https://wa.me/<nomor>?text=<pesan>' dengan nomor dan pesan yang sesuai
        window.location.href = "https://wa.me/6281234567890?text=Halo%20admin,%20saya%20ingin%20membeli%20produk%20ini.";
      });
    }
  });
}