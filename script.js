document.addEventListener('DOMContentLoaded', function() {
    
    const text = "My Bini Gweh (MBG)";
    const element = document.getElementById("efek-ngetik");
    const speed = 100;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

});
