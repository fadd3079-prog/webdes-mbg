console.log("js on");

function tampilPesan() {
    alert("web design B - MBG");
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
