document.getElementsByTagName("input")[0].addEventListener("change", visualizarImagem);

let visualizacao = document.querySelector('img');

function visualizarImagem(event) {
    const file = event.target.files[0];

    if (file.type.includes("image")) {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            visualizacao.src = reader.result;
            document.getElementsByTagName("textarea")[0].value = reader.result;
            document.getElementsByClassName("botaoCopiaBase64")[0].style.display = "block";
        };
    }
    else {
        alert("Atenção! Por favor, escolha um arquivo no formato de imagem para realizar a conversão para Base64.");
    }
}

function copiarBase64Imagem() {
  var copiaTexto = document.getElementById("txtCampoBase64");

  copiaTexto.select();
  copiaTexto.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copiaTexto.value);

  alert("Base64 copiado para área de transferência.");
}    