// Hitung Luas Segitiga
function hitungluas(){
    alas = document.getElementById("alasSegitiga").value;
    tinggi = document.getElementById("tinggiSegitiga").value;
    luas = 1/2*alas*tinggi;
    document.getElementById("Hasil1").value = luas;
}

// Hitung Keliling Segitiga
function hitungkeliling() {
    sisiPertama = +document.getElementById("sisiSegitiga1").value;
    sisiKedua = +document.getElementById("sisiSegitiga2").value;
    sisiKetiga = +document.getElementById("sisiSegitiga3").value;
    keliling = sisiPertama + sisiKedua + sisiKetiga;
    document.getElementById("Hasil2").value = keliling;
}

//Reset Luas
function resetluas(){
    alasSegitiga.value = null;
    tinggiSegitiga.value = null;
    Hasil1.value = null;
    document.getElementsByClassName("reset").value = reset;
}

// Reset keliling
function resetkeliling(){
    sisiSegitiga1.value = null;
    sisiSegitiga2.value = null;
    sisiSegitiga3.value = null;
    Hasil2.value = null;
    document.getElementsByClassName("reset").value = reset;
}