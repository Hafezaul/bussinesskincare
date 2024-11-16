
AOS.init();
// Modal 1
document.getElementById('modalButton1').addEventListener('click', function() {
  document.getElementById('myModal1').classList.add('is-active');
});
document.getElementById('closeModal1').addEventListener('click', function() {
  document.getElementById('myModal1').classList.remove('is-active');
});
document.getElementById('cancelModal1').addEventListener('click', function() {
  document.getElementById('myModal1').classList.remove('is-active');
});

// Modal 2
document.getElementById('modalButton2').addEventListener('click', function() {
  document.getElementById('myModal2').classList.add('is-active');
});
document.getElementById('closeModal2').addEventListener('click', function() {
  document.getElementById('myModal2').classList.remove('is-active');
});
document.getElementById('cancelModal2').addEventListener('click', function() {
  document.getElementById('myModal2').classList.remove('is-active');
});

// Modal 3
document.getElementById('modalButton3').addEventListener('click', function() {
  document.getElementById('myModal3').classList.add('is-active');
});
document.getElementById('closeModal3').addEventListener('click', function() {
  document.getElementById('myModal3').classList.remove('is-active');
});
document.getElementById('cancelModal3').addEventListener('click', function() {
  document.getElementById('myModal3').classList.remove('is-active');
});