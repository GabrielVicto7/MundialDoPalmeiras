function inicia(){
        document.getElementById("Tem").addEventListener('click', function () {
            var eixohorizontal = Math.floor(Math.random() * (98 - 2 + 1)) + 0;
            var eixovertical = Math.floor(Math.random() * (98 - 2 + 1)) + 0;
            document.getElementById("Tem").style.left = eixohorizontal + "%";
            document.getElementById("Tem").style.top = eixovertical + "%";
            const a = document.getElementById("me");
            a.play();
        });
        document.getElementById("NTem").addEventListener('click', function k() {
            document.getElementById("Tem").style.opacity = 0;
            document.getElementById("NTem").style.opacity = 0;
            document.getElementById("TEXTO1").style.opacity = 0;
            document.getElementById("PALMEIRAS").style.display = "inline";
            document.getElementById("PALMEIRAS").style.transition = 1 + "s";
            document.querySelector('body').style.backgroundImage = "url('img.jpg')";
            const audio = document.getElementById("hino_do_flamengo");
            audio.play();
        });
    }

window.addEventListener("load",inicia);