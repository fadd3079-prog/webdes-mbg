function tampilPesan() {
    alert("KELOMPOK 9 - FADHOL, SURYA, NAJMI, INDRA, NASHIR");
}

function kembaliKeAtas() {
    window.scrollTo(0, 0);
}

function bukaFaq(idJawaban) {
    var jawaban = document.getElementById(idJawaban);

    if (jawaban.style.display === "block") {
        jawaban.style.display = "none";
    } else {
        jawaban.style.display = "block";
    }
}
