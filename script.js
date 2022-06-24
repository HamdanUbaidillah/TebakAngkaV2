const input = document.querySelector("input");
const btnGuess = document.querySelector(".tebak");
const indikator = document.querySelector(".indikator");
const info = document.querySelector(".info");
const winLose = document.querySelector(".winLose");
const tebakan = document.querySelector(".tebakan");
const start = document.querySelector(".start");
const boxGame = document.querySelector(".box");
const kesempatan = document.querySelector(".hitungTebakan");
const btnUlang = document.getElementById("ulang");
const btnTebak = document.getElementById("tombolTebak");

// start game
start.addEventListener("click", function () {
  start.classList.add("hilang");
  boxGame.classList.remove("hilang");
  btnUlang.classList.add("hilang");
});

// mencari angka random
let random = Math.floor(Math.random() * 100) + 1;
let hasil = "";
let count = "";
let chance = 5;
// menebak angka random
btnGuess.addEventListener("click", function () {
  // mengecek jika yg di inputkan bukan angka
  if (input.value == "" || isNaN(input.value)) {
    input.value = "";
    count = count + 1 - 1;
    alert("Harap Masukan Angka");
  } //jika yang di inputkan tidak angka 1-100
  else if (input.value < 0 || input.value > 100) {
    input.value = "";
    count = count + 1 - 1;
    alert("Harap Masukan Angka 1-100");
  } else {
    // alur game
    // jika tebakan benar
    count++;
    if (input.value == random) {
      btnUlang.classList.remove("hilang");
      btnTebak.classList.add("hilang");
      info.classList.remove("hilang");
      indikator.innerHTML = `Kamu menebak angkanya dengan benar!`;
      tebakan.innerHTML = `Kamu menebak sebanyak <b>"${count}"</b> kali`;
    } //jika tebakan salah
    else if (input.value != random) {
      hasil = input.value < random ? "Terlalu Rendah" : "Terlalu Tinggi";
      indikator.innerHTML = hasil;
      chance--;
      kesempatan.innerHTML = `Kesempatan kamu tinggal ${chance} kali`;
      // jika kesempatan 0
      if (chance == 0) {
        btnTebak.classList.add("hilang");
        btnUlang.classList.remove("hilang");
        kesempatan.innerHTML = "yah... kesempatan kamu sudah habis";
        indikator.innerHTML = `Angka yang benar adalah <b>"${random}"</b>`;
      }
    }
  }
});

btnUlang.addEventListener("click", function () {
  btnUlang.innerHTML = "Loading...";
  location.reload();
});
